import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CarDetails from './pages/CarDetails';
import Cars from './pages/cars';
import Home from './pages/home';
import MyBookings from './pages/MyBookings';

const App = () => {
	const [, setShowLogin] = useState(false);
	const isOwnerPath = useLocation().pathname.startsWith('/owner');
	return (
		<>
			{!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cars" element={<Cars />} />
				<Route path="/car-details/:id" element={<CarDetails />} />
				<Route path="/my-bookings" element={<MyBookings />} />
			</Routes>

			{!isOwnerPath && <Footer />}
		</>
	);
};

export default App;
