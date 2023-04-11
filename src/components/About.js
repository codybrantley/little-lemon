import './About.css';
import MarioAndAdrianA from '../images/Mario_and_Adrian_A.png';
import Restaurant from '../images/restaurant.png';

function About() {

    return (
      <div className="about">
        <div className="container">
            <div className="row">
                <div>
                    <h2>Little Lemon</h2>
                    <p>Scelerisque consequat ante, vel semper, aliquet diam amet commodo gravida. Arcu quam feugiat hac, nam taciti egestas, vestibulum venenatis blandit morbi tristique bibendum. Vestibulum integer netus egestas, iaculis sociosqu at posuere volutpat. Tempus tincidunt auctor, neque id, habitant torquent turpis potenti integer consequat.</p>
                </div>
                <div>
                    <div className="about__image_container">
                        <img className="about__image about__image_left" src={Restaurant} alt="Restaurant View" />
                        <img className="about__image about__image_right" src={MarioAndAdrianA} alt="Mario and Adrian" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default About;