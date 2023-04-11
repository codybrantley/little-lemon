import './Hero.css';
import RestaurantFood from '../images/restaurantfood.png';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div>
                        <h1 className="hero__heading">Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p className="hero__description text__lead">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link className="button" to="/reservations">Reserve A Table</Link>
                    </div>
                    <div>
                        <div className="hero__image_container">
                            <img className="hero__image" src={RestaurantFood} alt="Little Lemon Restaurant Food" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;