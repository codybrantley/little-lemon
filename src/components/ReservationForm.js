import React, { useEffect, useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../Api';
import './ReservationForm.css';
import { useFormik } from "formik";
import * as Yup from 'yup';

function ReservationForm({ onSubmit }) {
    const navigate = useNavigate();
    const todaysDate = new Date().toJSON().slice(0, 10);

    const ReservationSchema = Yup.object({
        date: Yup.date().required("Required").min(todaysDate),
        name: Yup.string().required("Required"),
        guests: Yup.number().min(1, "We need at least 1 guest").max(10, "Too many people"),
        emailAddress: Yup.string().required("Required").email("Invalid email address"),
        comment: Yup.string().required("Required").min(25, "Must be at least 25 characters")
    });

    const {
        values,
        errors,
        touched,
        getFieldProps,
        handleSubmit,
    } = useFormik({
        initialValues: {
            date: todaysDate,
            time: '',
            guests: 1,
            occasion: 'Night Out',
            tablePreferences: '',
            name: '',
            emailAddress: '',
        },
        validationSchema: ReservationSchema,
        onSubmit: (formData) => {
            if (submitAPI(formData)) {
                if (onSubmit) onSubmit();
                navigate('/reservations/thanks', { state: formData });
            } else
                return false;
        },
    });

    const updateTimes = (state, date) => {
        date = new Date(date);
        if (date) {
            return fetchAPI(date);
        } else {
            return state;
        }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, {});

    useEffect(() => {
        dispatch(values.date);
    }, [values.date]);

    return (
        <div className="container">
            <form id="form" className="reservation__form" onSubmit={handleSubmit}>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="date">Choose date</label>
                    <input className="reservation__input" id="date" type="date" min={todaysDate} {...getFieldProps("date")} />
                    {errors.date && touched.date && <div className="reservation__errors">{errors.date}</div>}
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="time">Choose time</label>
                    <select className="reservation__input" id="time" {...getFieldProps("time")}>
                        {(availableTimes && availableTimes.length >= 1) ? availableTimes.map(time => (
                            <option key={time}>{time}</option>
                        )) : <option value="">--:--</option>}
                    </select>
                    {errors.time && touched.time && <div className="reservation__errors">{errors.time}</div>}
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="guests">Number of guests</label>
                    <input className="reservation__input" type="number" placeholder="1" min="1" max="10" id="guests" {...getFieldProps("guests")} />
                    {errors.guests && touched.guests && <div className="reservation__errors">{errors.guests}</div>}
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="occasion">Occasion</label>
                    <select className="reservation__input" id="occasion" {...getFieldProps("occasion")}>
                        <option>Night Out</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="tablePreferences">Table Preferences</label>
                    <textarea className="reservation__input" id="tablePreferences" rows="4" {...getFieldProps("tablePreferences")} placeholder="By the window, close the bathroom, ect."></textarea>
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="name">Your name</label>
                    <input className="reservation__input" id="name" type="text" {...getFieldProps("name")} />
                    {errors.name && touched.name && <div className="reservation__errors">{errors.name}</div>}
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="emailAddress">Your email address</label>
                    <input className="reservation__input" id="emailAddress" type="email" {...getFieldProps("emailAddress")} />
                    {errors.emailAddress && touched.emailAddress && <div className="reservation__errors">{errors.emailAddress}</div>}
                </div>
                <button className="reservation__submit button" role="submit" type="submit">Make Your Reservation</button>
            </form>
        </div>
    );
}

export default ReservationForm;