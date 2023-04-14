import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './NotFound.css';

function NotFound() {
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

export default NotFound;