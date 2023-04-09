import './Main.css';
import RestaurantFood from '../images/restaurantfood.png';

function Main() {
    return (
      <main className="main">
			<div class="main__hero">
				<div className="container">
            		<div className="row">
						<div>
							<h1 className="main__heading">Little Lemon</h1>
							<h3>Chicago</h3>
							<p class="main__description text__lead">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
							<button>Reserve A Table</button>
						</div>
						<div>
							<div class="main__image_container">
								<img className="main__image" src={RestaurantFood} alt="Little Lemon Restaurant Food" />
							</div>
						</div>
					</div>
				</div>
			</div>
      </main>
    );
}

export default Main;