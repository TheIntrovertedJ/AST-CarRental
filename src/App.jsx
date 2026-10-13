import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CarDetails from './pages/CarDetails';
import Cars from './pages/cars';
import Home from './pages/home';
import MyBookings from './pages/MyBookings';
import AddCar from './pages/owner/AddCar';
import Dashboard from './pages/owner/Dashboard';
import Layout from './pages/owner/Layout';
import ManageBookings from './pages/owner/ManageBookings';
import ManageCars from './pages/owner/ManageCars';

const App = () => {
	const [, setShowLogin] = useState(false);
	const isOwnerPath = useLocation().pathname.startsWith('/owner');
	return (
		<>
			{!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

			<Routes>
				{/* Users Routes */}
				<Route path="/" element={<Home />} />
				<Route path="/cars" element={<Cars />} />
				<Route path="/car-details/:id" element={<CarDetails />} />
				<Route path="/my-bookings" element={<MyBookings />} />

				{/* Car Owners Routes */}
				<Route path="/owner" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="add-car" element={<AddCar />} />
					<Route path="manage-cars" element={<ManageCars />} />
					<Route path="manage-bookings" element={<ManageBookings />} />
				</Route>
			</Routes>

			{!isOwnerPath && <Footer />}
		</>
	);
};

export default App;
