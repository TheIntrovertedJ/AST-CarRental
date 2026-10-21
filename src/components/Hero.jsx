import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets, cityList } from '../assets/assets';

const Hero = () => {
	const [pickupLocation, setPickupLocation] = useState('');
	const [pickupDate, setPickupDate] = useState('');
	const [returnDate, setReturnDate] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/cars');
	};

	return (
		<div className="flex h-screen flex-col items-center justify-center gap-14 bg-light text-center">
			<h1 className="text-4xl font-semibold md:text-5xl">
				Welcome to AST Car Rental
			</h1>
			<p className="text-gray-500">
				Find the perfect car for your next adventure
			</p>

			<form
				className="flex w-full max-w-80 flex-col items-start justify-between rounded-lg bg-white p-6 shadow-[0px_8px_20px_rgba(0,0,0,0.1)] md:max-w-200 md:flex-row md:items-center md:rounded-full"
				onSubmit={handleSubmit}
			>
				<div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
					<div className="flex flex-col items-start gap-2">
						<select
							required
							value={pickupLocation}
							onChange={(e) => setPickupLocation(e.target.value)}
						>
							<option value="">Pickup Location</option>
							{cityList.map((city) => (
								<option key={city} value={city}>
									{city}
								</option>
							))}
						</select>
						<p className="px-1 text-sm text-gray-500">
							{pickupLocation ? pickupLocation : 'Choose a Location'}
						</p>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="pickup-date">Pickup Date</label>
						<input
							type="date"
							id="pickup-date"
							value={pickupDate}
							onChange={(e) => setPickupDate(e.target.value)}
							min={new Date().toISOString().split('T')[0]}
							className="text-sm text-gray-500"
							required
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="return-date">Return Date</label>
						<input
							type="date"
							id="return-date"
							value={returnDate}
							onChange={(e) => setReturnDate(e.target.value)}
							min={pickupDate}
							className="text-sm text-gray-500"
							required
						/>
					</div>
				</div>
				<button
					type="submit"
					className="flex cursor-pointer items-center justify-center gap-1 rounded-full bg-primary px-9 py-3 text-white hover:bg-primary-dull max-sm:mt-4"
				>
					<img
						src={assets.search_icon}
						alt="Search"
						className="brightness-300"
					/>
					Search Cars
				</button>
			</form>

			<img src={assets.main_car} alt="Main Car" className="max-h-74" />
		</div>
	);
};

export default Hero;
