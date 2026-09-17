import { useNavigate } from 'react-router-dom';
import { assets, dummyCarData } from '../assets/assets';
import CarCard from './CarCard';
import Title from './Title';

const FeaturedSection = () => {
	const navigate = useNavigate();

	return (
		// Section for displaying featured vehicles
		<div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 py-24">
			<div>
				{/* Title for the featured vehicles section */}
				<Title
					title="Featured Vehicles"
					subtitle="Discover our top-rated vehicles for rent"
				/>
			</div>

			<div className="mt-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* Render featured vehicles here */}

				{dummyCarData.slice(0, 6).map((car) => (
					<div key={car._id}>
						<CarCard car={car} />
					</div>
				))}
			</div>

			<button
				onClick={() => {
					navigate('/cars');
					scrollTo(0, 0);
				}}
				className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer"
			>
				Explore more cars <img src={assets.arrow_icon} alt="arrow" />
			</button>
		</div>
	);
};

export default FeaturedSection;
