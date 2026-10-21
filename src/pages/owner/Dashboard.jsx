import { useState } from 'react';
import { assets, dummyDashboardData } from '../../assets/assets';
import Title from '../../components/owner/Title';

const Dashboard = () => {
	const currencySymbol = import.meta.env.VITE_CURRENCY || '$';
	const [data] = useState(dummyDashboardData);

	const dashboardCards = [
		{ title: 'Total Cars', value: data.totalCars, icon: assets.carIconColored },
		{
			title: 'Total Bookings',
			value: data.totalBookings,
			icon: assets.listIconColored,
		},
		{
			title: 'Pending',
			value: data.pendingBookings,
			icon: assets.cautionIconColored,
		},
		{
			title: 'Confirmed',
			value: data.completedBookings,
			icon: assets.listIconColored,
		},
	];

	return (
		<div className="flex-1 px-4 pt-10 md:px-10">
			<Title
				title="Admin Dashboard"
				subTitle="Monitor overall platform performance including total cars, bookings, revenue, and recent activities."
			/>

			<div className="my-8 grid max-w-3xl gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{dashboardCards.map((card, index) => (
					<div
						key={index}
						className="border-Color flex items-center justify-between gap-2 rounded-md border p-4"
					>
						<div>
							<h1 className="text-xs text-gray-500">{card.title}</h1>
							<p className="text-lg font-semibold">{card.value}</p>
						</div>
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
							<img src={card.icon} alt="" className="h-4 w-4" />
						</div>
					</div>
				))}
			</div>

			<div className="flex-warp mb-8 flex w-full items-start gap-6">
				{/* RECENT BOOKING */}
				<div className="w-full max-w-lg rounded-md border border-borderColor p-4 md:p-6">
					<h1 className="text-lg font-medium">Recent Bookings</h1>
					<p className="text-gray-500">Latest customer bookings</p>
					{data.recentBookings.map((booking, index) => (
						<div key={index} className="mt-4 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="hidden h-12 w-12 items-center justify-center rounded-full bg-primary/10 md:flex">
									<img
										src={assets.listIconColored}
										alt=""
										className="h-5 w-5"
									/>
								</div>
								<div>
									<p>
										{booking.car.brand} {booking.car.model}
									</p>
									<p className="text-sm text-gray-500">
										{booking.createdAt.split('T')[0]}
									</p>
								</div>
							</div>

							<div className="flex items-center gap-2 font-medium">
								<p className="text-sm text-gray-500">
									{currencySymbol}
									{booking.price}
								</p>
								<p className="rounded-full border border-borderColor px-3 py-0.5 text-sm">
									{booking.status}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* MONTHLY REVENUE */}
				<div></div>
			</div>
		</div>
	);
};

export default Dashboard;
