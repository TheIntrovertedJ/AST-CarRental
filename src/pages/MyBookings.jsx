import { assets, dummyMyBookingsData } from '../assets/assets';
import Title from '../components/Title';
import Badge from '../components/ui/Badge';

const statusTone = {
	confirmed: 'success',
	pending: 'warning',
};

const MyBookings = () => {
	const bookings = dummyMyBookingsData;
	const currencySymbol = import.meta.env.VITE_CURRENCY || '$';

	return (
		<div className="mt-16 max-w-7xl px-6 text-sm md:px-16 lg:px-24 xl:px-32 2xl:px-48">
			<Title
				title="My Bookings"
				subtitle="View and manage all your car bookings"
				align="left"
			/>

			<div>
				{bookings.map((booking, index) => (
					<div
						key={booking._id}
						className="mt-5 grid grid-cols-1 gap-6 rounded-lg border border-borderColor p-6 first:mt-12 md:grid-cols-4"
					>
						{/* Car Image and Info */}
						<div className="md:col-span-1">
							<div className="mb-3 overflow-hidden rounded-md">
								<img
									src={booking.car.image}
									alt=""
									className="aspect-video h-auto w-full object-cover"
								/>
							</div>
							<p className="mt-2 text-lg font-medium">
								{booking.car.brand} {booking.car.model}
							</p>

							<p className="text-gray-500">
								{booking.car.year} • {booking.car.category} •{' '}
								{booking.car.location}
							</p>
						</div>

						{/* Booking Info */}

						<div className="md:col-span-2">
							<div className="flex items-center gap-2">
								<p className="rounded bg-light px-3 py-1.5">
									Booking #{index + 1}
								</p>
								<Badge tone={statusTone[booking.status] ?? 'danger'}>
									{booking.status}
								</Badge>
							</div>

							<div className="mt-3 flex items-center gap-2">
								<img
									src={assets.calendar_icon_colored}
									alt="Calendar Icon"
									className="mt-1 h-4 w-4"
								/>
								<div>
									<p className="text-gray-500">Rental Period</p>
									<p>
										{booking.pickupDate.split('T')[0]} To{' '}
										{booking.returnDate.split('T')[0]}
									</p>
								</div>
							</div>

							<div className="mt-3 flex items-center gap-2">
								<img
									src={assets.location_icon_colored}
									alt="Location Icon"
									className="mt-1 h-4 w-4"
								/>
								<div>
									<p className="text-gray-500">Pick-up Location</p>
									<p>{booking.car.location}</p>
								</div>
							</div>
						</div>

						{/* Price Info */}
						<div className="flex flex-col justify-between gap-6 md:col-span-1">
							<div className="text-right text-sm text-gray-500">
								<p>Total Price</p>
								<h1 className="text-2xl font-semibold text-primary">
									{currencySymbol}
									{booking.price}
								</h1>
								<p>Booked on {booking.createdAt.split('T')[0]}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyBookings;
