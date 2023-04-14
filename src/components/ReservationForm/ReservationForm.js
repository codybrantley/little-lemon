import React, { useEffect, useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { fetchAPI, submitAPI } from '../../helpers/Api';
import './ReservationForm.css';

function ReservationForm({ onSubmit }) {
    const navigate = useNavigate();
    const todaysDate = new Date().toJSON().slice(0, 10);

    const ReservationSchema = Yup.object({
        date: Yup.date().required("Required").min(todaysDate),
        time: Yup.string().required("Select a date first"),
        guests: Yup.number().min(1, "We need at least 1 guest").max(10, "Too many people"),
        name: Yup.string().required("Required"),
        emailAddress: Yup.string().required("Required").email("Invalid email address"),
    });

    const {
        values,
        errors,
        touched,
        getFieldProps,
        handleSubmit,
        setFieldValue,
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
            } else {
                return false;
            }
        },
    });

    const updateTimes = (state, date) => {
        date = new Date(date);
        if (date) {
            let timeData = fetchAPI(date);
            setFieldValue('time', timeData[0]);
            return timeData;
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
                    <label className="reservation__label" htmlFor="date">Choose date *</label>
                    <input className="reservation__input" id="date" aria-required="true" type="date" min={todaysDate} {...getFieldProps("date")} aria-invalid="false" {...errors.date && touched.date && {'aria-describedby': 'date-error', 'aria-invalid': 'true', 'className': 'reservation__invalid'}} />
                    {errors.date && touched.date && <div id="date-error" className="reservation__errors">{errors.date}</div>}
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="time">Choose time *</label>
                    <select className="reservation__input" id="time" aria-required="true" {...getFieldProps("time")} aria-invalid="false" {...errors.time && touched.time && {'aria-describedby': 'time-error', 'aria-invalid': 'true', 'className': 'reservation__invalid'}}>
                        {(availableTimes && availableTimes.length >= 1) ? availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                        )) : <option value="">--:--</option>}
                    </select>
                    {errors.time && touched.time && <div id="time-error" className="reservation__errors">{errors.time}</div>}
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="guests">Number of guests *</label>
                    <input className="reservation__input" type="number" aria-required="true" placeholder="1" min="1" max="10" id="guests" {...getFieldProps("guests")} aria-invalid="false" {...errors.guests && touched.guests && {'aria-describedby': 'guests-error', 'aria-invalid': 'true', 'className': 'reservation__invalid'}} />
                    {errors.guests && touched.guests && <div id="guests-error" className="reservation__errors">{errors.guests}</div>}
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="occasion">Occasion</label>
                    <select className="reservation__input" id="occasion" aria-required="false" aria-invalid="false" {...getFieldProps("occasion")}>
                        <option>Night Out</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="tablePreferences">Table Preferences</label>
                    <textarea className="reservation__input" id="tablePreferences" rows="5" aria-required="false" {...getFieldProps("tablePreferences")} aria-invalid="false" placeholder="By the window, close the bathroom, ect."></textarea>
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="name">Your name *</label>
                    <input className="reservation__input" id="name" aria-required="true" type="text" {...getFieldProps("name")} aria-invalid="false" {...errors.name && touched.name && {'aria-describedby': 'name-error', 'aria-invalid': 'true', 'className': 'reservation__invalid'}} />
                    {errors.name && touched.name && <div id="name-error" className="reservation__errors">{errors.name}</div>}
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="emailAddress">Your email address *</label>
                    <input className="reservation__input" id="emailAddress" aria-required="true" type="email" {...getFieldProps("emailAddress")} aria-invalid="false" {...errors.emailAddress && touched.emailAddress && {'aria-describedby': 'email-error', 'aria-invalid': 'true', 'className': 'reservation__invalid'}} />
                    {errors.emailAddress && touched.emailAddress && <div id="email-error" className="reservation__errors">{errors.emailAddress}</div>}
                </div>
                <button className="reservation__submit button" type="submit">Make Your Reservation</button>
            </form>
        </div>
    );
}

export default ReservationForm;