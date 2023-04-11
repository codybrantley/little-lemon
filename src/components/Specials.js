import './Specials.css';
import GreekSalad from '../images/greek_salad.png';
import Bruchetta from '../images/bruchetta.png';
import LemonDesert from '../images/lemon_dessert.png';
import Card from './Card';
import { Link } from 'react-router-dom';

function Specials() {
    const specials = [
		{
			imageUrl: GreekSalad,
			item: "Greek Salad",
			price: "12.99",
			description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
			link: "/#",
		},
		{
			imageUrl: Bruchetta,
			item: "Bruchetta",
			price: "5.99",
			description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
			link: "/#",
		},
		{
			imageUrl: LemonDesert,
			item: "Lemon Dessert",
			price: "5.00",
			description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
			link: "/#",
		},
	];

    return (
        <div className="specials">
            <div className="container">
                <div className="row">
                    <div>
                        <h2>This weeks specials!</h2>
                    </div>
                    <div>
						<Link className="button specials__button" to="/menu">Online Menu</Link>
                    </div>
                </div>
                <div className="specials__items row">
                    { specials.map((special) => (
                        <Card {...special} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Specials;