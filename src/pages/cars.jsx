import { useState } from 'react';
import { assets, dummyCarData } from '../assets/assets';
import CarCard from '../components/CarCard';
import Title from '../components/Title';

const Cars = () => {
	const [input, setInput] = useState('');

	return (
		// Main Container
		<div>
			<div className="flex flex-col items-center bg-light py-20 max-md:px-4">
				<Title
					title="Available Cars"
					subtitle="Browse our fleet of premium vehicles available for your next adventure"
				/>

				{/* Search and Filter */}

				<div className="mt-6 flex h-12 w-full max-w-140 items-center rounded-full bg-white px-4 shadow">
					<img src={assets.search_icon} alt="" className="mr-2 h-4.5 w-4.5" />
					<input
						onClick={(e) => setInput(e.target.value)}
						value={input}
						type="text"
						placeholder="Search cars..."
						className="h-full w-full text-gray-500 outline-none"
					/>
					<img src={assets.filter_icon} alt="" className="ml-2 h-4.5 w-4.5" />
				</div>
			</div>

			{/* Car Listings */}
			<div className="mt-10 px-6 md:px-16 lg:px-24 xl:px-32">
				<p className="mx-auto max-w-7xl text-gray-500 xl:px-20">
					Showing Available Cars
				</p>

				<div className="mx-auto mt-4 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:px-20">
					{dummyCarData.map((car) => (
						<CarCard key={car._id} car={car} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Cars;
