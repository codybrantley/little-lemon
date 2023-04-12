import './Reservations.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';

function Reservations() {
    return (
        <>
        <Header />
        <div className="reservations__heading">
            <div className="container">
                <div className="row">
                    <div>
                        <h2>Reserve Your Table</h2>
                        <h4>We can't wait to see you!</h4>
                    </div>
                </div>
            </div>
        </div>
        <ReservationForm />
        <Footer />
        </>
    );
}

export default Reservations;