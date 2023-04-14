import Quote from '../Quote';
import AmyImage from '../../images/testimonials/amy.jpg';
import CharlieImage from '../../images/testimonials/charlie.jpg';
import GavinImage from '../../images/testimonials/gavin.jpg';
import MelanieImage from '../../images/testimonials/melanie.jpg';
import './Testimonials.css';

function Testimonials() {
    const quotes = [
        {
            rating: 5,
            name: "Amy Henderson",
            photoUrl: AmyImage,
            message: "Ullamcorper varius vulputate, erat litora tristique quis.",
        },
        {
            rating: 4,
            name: "Charlie Sullivan",
            photoUrl: CharlieImage,
            message: "Ullamcorper varius vulputate, erat litora tristique quis auctor. Iaculis neque nec vitae.",
        },
        {
            rating: 5,
            name: "Gavin Fisher",
            photoUrl: GavinImage,
            message: "Ullamcorper varius vulputate, erat litora.",
        },
        {
            rating: 4,
            name: "Melanie Murphy",
            photoUrl: MelanieImage,
            message: "Ullamcorper varius vulputate, erat litora tristique quis auctor. Iaculis neque nec.",
        },
    ];

    return (
        <div className="testimonials">
            <div className="container">
                <h2 className="testimonials_heading">Testimonials</h2>
                <div className="testimonials__row row">
                { quotes.map((quote) => (
                    <Quote key={quote.name} {...quote} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;