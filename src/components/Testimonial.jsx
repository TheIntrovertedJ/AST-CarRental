import { assets } from '../assets/assets';
import Title from './Title';

// Testimonial Section
const Testimonial = () => {
	// Sample testimonials data
	const testimonials = [
		{
			name: 'Emma Rodriguez',
			location: 'Barcelona, Spain',
			image: assets.testimonial_image_1,
			testimonial:
				'I had an amazing experience with AST-RENTAL! The service was top-notch, and the team went above and beyond to ensure my satisfaction. Highly recommended!',
		},
		{
			name: 'Liam Johnson',
			location: 'New York, USA',
			image: assets.testimonial_image_2,
			testimonial:
				'I recently used AST-RENTAL for a business trip, and I was thoroughly impressed. The booking process was seamless, and the vehicle provided exceeded my expectations. I will definitely be using their services again!',
		},
		{
			name: 'Sophia Lee',
			location: 'Seoul, South Korea',
			image: assets.testimonial_image_1,
			testimonial:
				'I cannot recommend AST-RENTAL enough! From start to finish, the experience was exceptional. The staff was friendly and knowledgeable, and the vehicle I rented was in pristine condition. I will be a loyal customer for years to come!',
		},
	];

	// Render the testimonial section

	return (
		<div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
			<Title
				title="What Our Customers Say"
				subtitle="Discover why discerning travelers choose AST RENTAL for their luxury accomodations around the globe"
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
					>
						<div className="flex items-center gap-3">
							<img
								className="w-12 h-12 rounded-full"
								src={testimonial.image}
								alt={testimonial.name}
							/>
							<div>
								<p className="text-xl">{testimonial.name}</p>
								<p className="text-gray-500">{testimonial.location}</p>
							</div>
						</div>
						<div className="flex items-center gap-1 mt-4">
							{Array(5)
								.fill(0)
								.map((_, index) => (
									<img key={index} src={assets.star_icon} alt="star-icon" />
								))}
						</div>
						<p className="text-gray-500 max-w-90 mt-4">
							"{testimonial.testimonial}"
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonial;
