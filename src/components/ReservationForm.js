import React, { useReducer, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../Api';
import './ReservationForm.css';

function ReservationForm({ onSubmit }) {
    const navigate = useNavigate();
    const todaysDate = new Date().toJSON().slice(0, 10);
    const dateRef = useRef();
    const timeRef = useRef();
    const guestsRef = useRef();
    const occasionRef = useRef();
    const tablePreferencesRef = useRef();
    const nameRef = useRef();
    const emailAddressRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date: dateRef.current.value,
            time: timeRef.current.value,
            guests: guestsRef.current.value,
            occasion: occasionRef.current.value,
            tablePreferences: tablePreferencesRef.current.value,
            name: nameRef.current.value,
            emailAddress: emailAddressRef.current.value,
        };

        if (submitAPI(formData)) {
            if (onSubmit) onSubmit();
            navigate('/reservations/thanks', { state: formData });
        } else
            return false;
    }

    const updateTimes = (state, date) => {
        date = new Date(date);
        if (date) {
            return fetchAPI(date);
        } else {
            return state;
        }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, {});

    return (
        <div className="container">
            <form id="form" className="reservation__form" onSubmit={handleSubmit}>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="date">Choose date</label>
                    <input className="reservation__input" id="date" required type="date" name="date" min={todaysDate} ref={dateRef} onChange={(e) => dispatch(e.target.value)} />
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="time">Choose time</label>
                    <select className="reservation__input" id="time" required name="time" ref={timeRef}>
                        { (availableTimes && availableTimes.length >= 1) ? availableTimes.map(time => (
                            <option key={time}>{time}</option>
                        )) : <option value="">--:--</option> }
                    </select>
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="guests">Number of guests</label>
                    <input className="reservation__input" type="number" placeholder="1" min="1" max="10" id="guests" name="guests" ref={guestsRef} />
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="occasion">Occasion</label>
                    <select className="reservation__input" id="occasion" name="occasion" ref={occasionRef}>
                        <option>Night Out</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="tablePreferences">Table Preferences</label>
                    <textarea className="reservation__input" id="tablePreferences" name="tablePreferences" rows="4" ref={tablePreferencesRef} placeholder="By the window, close the bathroom, ect."></textarea>
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="name">Your name</label>
                    <input className="reservation__input" id="name" type="text" name="name" required ref={nameRef} />
                </div>
                <div className="reservation__input_container">
                    <label className="reservation__label" htmlFor="emailAddress">Your email address</label>
                    <input className="reservation__input" id="emailAddress" type="email" name="emailAddress" ref={emailAddressRef} />
                </div>
                <button className="reservation__submit button" role="submit" type="submit">Make Your Reservation</button>
            </form>
        </div>
    );
}

export default ReservationForm;