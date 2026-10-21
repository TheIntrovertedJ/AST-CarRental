import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets, dummyCarData } from '../assets/assets';
import Loader from '../components/Loader';
import Button from '../components/ui/Button';
import Field from '../components/ui/Field';

const CarDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const car = dummyCarData.find((car) => car._id === id);
	const currencySymbol = import.meta.env.VITE_CURRENCY || '$';
	const [pickupDate, setPickupDate] = useState('');
	const [returnDate, setReturnDate] = useState('');
	const returnBeforePickup = Boolean(
		pickupDate && returnDate && returnDate < pickupDate,
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return car ? (
		<div className="mt-16 px-6 md:px-16 lg:px-24 xl:px-32">
			<button
				onClick={() => navigate(-1)}
				className="mb-6 flex cursor-pointer items-center gap-2 text-gray-500"
			>
				<img src={assets.arrow_icon} alt="" className="rotate-180 opacity-65" />
				Back to all cars
			</button>

			<div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
				{/* Left Car Image and Details Placeholder */}
				<div className="lg:col-span-2">
					<img
						src={car.image}
						alt=""
						className="mb-6 h-auto w-full rounded-xl object-cover shadow-md md:max-h-100"
					/>
					<div className="space-y-6">
						<div>
							<h1 className="text-3xl font-bold">
								{car.brand} {car.model}
							</h1>
							<p className="text-lg text-gray-500">
								{car.category} • {car.year}
							</p>
						</div>
						<hr className="my-6 border-borderColor" />

						<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
							{[
								{ icon: assets.users_icon, text: `${car.seats} Seats` },
								{ icon: assets.fuel_icon, text: car.fuel_type },
								{ icon: assets.car_icon, text: car.transmission },
								{ icon: assets.location_icon, text: car.location },
							].map(({ icon, text }) => (
								<div
									key={text}
									className="flex flex-col items-center rounded-lg bg-light p-4"
								>
									<img src={icon} alt="" className="mb-2 h-5" />
									{text}
								</div>
							))}
						</div>

						{/* Description */}
						<div>
							<h1 className="mb-3 text-xl font-medium">Description</h1>
							<p className="text-gray-500">{car.description}</p>
						</div>

						{/* Features */}
						<div>
							<h1 className="mb-3 text-xl font-medium">Features</h1>
							<ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
								{['360 Camera', 'GPS', 'Heated Seats', 'Bluetooth'].map(
									(item) => (
										<li key={item} className="flex items-center text-gray-500">
											<img
												src={assets.check_icon}
												className="mr-2 h-4"
												alt=""
											/>
											{item}
										</li>
									),
								)}
							</ul>
						</div>
					</div>
				</div>

				{/* Right Car Details Placeholder */}
				<form
					onSubmit={handleSubmit}
					className="sticky top-18 h-max space-y-6 rounded-xl p-6 text-gray-500 shadow-lg"
				>
					<p className="flex items-center justify-between text-2xl font-semibold text-gray-800">
						{currencySymbol}
						{car.pricePerDay}{' '}
						<span className="text-base font-normal text-gray-400">
							{' '}
							per day
						</span>{' '}
					</p>

					<hr className="my-6 border-borderColor" />

					<label htmlFor="pickup-date">Pickup Date</label>
					<Field
						label="Pickup Date"
						type="date"
						required
						value={pickupDate}
						onChange={(e) => setPickupDate(e.target.value)}
						min={new Date().toISOString().split('T')[0]}
					/>

					<label htmlFor="return-date">Return Date</label>
					<Field
						label="Return Date"
						type="date"
						required
						value={returnDate}
						onChange={(e) => setReturnDate(e.target.value)}
						min={pickupDate}
						error={
							returnBeforePickup
								? "Return date can't be before your pickup date."
								: undefined
						}
					/>

					<Button type="submit" block size="lg">
						Book Now
					</Button>

					<p className="text-center text-sm">
						No credit card required to reserve
					</p>
				</form>
			</div>
		</div>
	) : (
		<Loader />
	);
};

export default CarDetails;
