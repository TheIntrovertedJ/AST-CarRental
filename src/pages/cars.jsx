import { Link } from 'react-router-dom';
import { dummyCarData } from '../assets/assets';
import CarCard from '../components/CarCard';

const Cars = () => {
	return (
		<main className="px-6 md:px-16 lg:px-24 xl:px-32 py-16">
			<h1 className="text-3xl font-semibold mb-8">All Cars</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{dummyCarData.map((car) => (
					<Link key={car._id} to={`/car-details/${car._id}`}>
						<CarCard car={car} />
					</Link>
				))}
			</div>
		</main>
	);
};

export default Cars;
