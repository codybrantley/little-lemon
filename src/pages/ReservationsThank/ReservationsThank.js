import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../Reservations/Reservations.css'
import './ReservationsThank.css'

function ReservationsThank() {
  const { state } = useLocation()

  if (state) {
    const dateString = `${state.date} ${state.time}`
    const date = new Date(dateString).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'EST',
    })
    const OccasionEmoji = () => {
      switch (state.occasion) {
        default:
        case 'Night Out':
          return '🍷'
        case 'Birthday':
          return '🎉'
        case 'Anniversary':
          return '💞'
      }
    }

    return (
      <>
        <Header />
        <div className="reservations__heading">
          <div className="container">
            <div className="row">
              <div>
                <h2>Your reservation is set.</h2>
                <h4>We can't wait to see you!</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="reservations__details">
          <div className="container">
            <div className="row">
              <div className="reservations__details_container">
                <h3 className="reservations__details_heading">
                  Confirmation Details
                </h3>
                <ul className="reservations__details_box">
                  <li>
                    <b>Name</b>: {state.name}
                  </li>
                  <li>
                    <b>Date:</b> {date}
                  </li>
                  <li>
                    <b>Time:</b> {state.time}
                  </li>
                  <li>
                    <b>Party Size:</b> {state.guests}
                  </li>
                  <li>
                    <b>Occasion:</b> {state.occasion} <OccasionEmoji />
                  </li>
                  <li>
                    <b>Table Preferences:</b>{' '}
                    {state.tablePreferences ? state.tablePreferences : 'None'}
                  </li>
                </ul>
                <p className="reservations__details_p">
                  You will receive a confirmation email shortly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <Header />
        <div className="notfound">
          <h2>
            Uh-oh! You haven't set a reservation yet, or an error occured.
          </h2>
          <p>
            Go to{' '}
            <Link
              className="notfound__link"
              to="/reservations"
            >
              reservations
            </Link>
          </p>
        </div>
        <Footer />
      </>
    )
  }
}

export default ReservationsThank
