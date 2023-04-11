import { Link } from 'react-router-dom';
import './Card.css'

function Card(props) {
    return (
      <div className="card">
        <img className="card__image" src={props.imageUrl} alt={props.item} />
        <div className="card__content">
            <h4 className="card__title">{props.item} <span>${props.price}</span></h4>
            <p className="card__description">{props.description}</p>
            <Link to={props.link} className="card__link">Order a delivery</Link>
        </div>
      </div>
    );
}

export default Card;