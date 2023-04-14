import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import ReservationsThank from './pages/ReservationsThank';
import NotFound from './pages/NotFound/NotFound';
import './App.css';

function App() {
	return (
		<>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/reservations" element={<Reservations />} />
			<Route path="/reservations/thanks" element={<ReservationsThank />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		</>
	);
}

export default App;