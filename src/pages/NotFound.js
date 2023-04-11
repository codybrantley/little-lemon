import './NotFound.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
      <Header />
      <div className="notfound">
        <h2>Uh-oh! We couldn't find that page.</h2>
        <p>Go back <Link className="notfound__link" to="/">home</Link></p>
      </div>
      <Footer />
      </>
    );
}

export default Home;