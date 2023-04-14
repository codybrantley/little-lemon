import './Quote.css';

function Quote(props) {
    const starRating = "★".repeat(props.rating);

    return (
        <div className="quote">
            <h4 className="quote__name">{props.name}</h4>
            <img className="quote__image" src={props.photoUrl} alt={props.name} />
            <span className="quote__rating">{starRating}</span>
            <blockquote className="quote__message" cite={props.name}>{props.message}</blockquote>
        </div>
    );
}

export default Quote;