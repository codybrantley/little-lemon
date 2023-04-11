import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
