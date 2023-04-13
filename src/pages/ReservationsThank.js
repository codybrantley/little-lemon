import './Reservations.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Reservations() {
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!state)
            navigate('/');
    }, []);

    if (state) {
        const firstName = (state.name.split(' ').length > 1) ? state.name.split(' ')[0] : state.name;
        const dateString = `${state.date} ${state.time}`;
        const date = new Date(dateString).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", timeZone: 'EST'});

        return (
            <>
            <Header />
            <div className="reservations__heading">
                <div className="container">
                    <div className="row">
                        <div>
                            <h2>{ firstName }, your reservation is set.</h2>
                            <h4>We can't wait to see you!</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reservations__details">
                <div className="container">
                    <div className="row">
                        <div className="reservations__details_container">
                            <h3 className="reservations__details_heading">Confirmation Details</h3>
                            <ul className="reservations__details_box">
                                <li><b>Name</b>: {state.name}</li>
                                <li><b>Date:</b> {date}</li>
                                <li><b>Time:</b> {state.time}</li>
                                <li><b>Party Size:</b> {state.guests}</li>
                                <li><b>Occassion:</b> {state.occassion}</li>
                                <li><b>Table Preferences:</b> {state.tablePreferences ? state.tablePreferences : "None"}</li>
                            </ul>
                            <p className="reservations__details_p">You will receive a confirmation email shortly.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default Reservations;