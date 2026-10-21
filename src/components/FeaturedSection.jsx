import { assets, dummyCarData } from '../assets/assets';
import CarCard from './CarCard';
import Title from './Title';
import Button from './ui/Button';

const FeaturedSection = () => {
	return (
		// Section for displaying featured vehicles
		<div className="flex flex-col items-center px-6 py-24 md:px-16 lg:px-24 xl:px-32">
			<div>
				{/* Title for the featured vehicles section */}
				<Title
					title="Featured Vehicles"
					subtitle="Discover our top-rated vehicles for rent"
				/>
			</div>

			<div className="mt-18 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{/* Render featured vehicles here */}

				{dummyCarData.slice(0, 6).map((car) => (
					<CarCard key={car._id} car={car} />
				))}
			</div>

			<Button
				variant="secondary"
				to="/cars"
				onClick={() => scrollTo(0, 0)}
				className="mt-18"
			>
				Explore more cars <img src={assets.arrow_icon} alt="" />
			</Button>
		</div>
	);
};

export default FeaturedSection;
