import { assets } from '../assets/assets';
import Button from './ui/Button';

const Banner = () => {
	return (
		// Banner Section
		<div className="mx-3 flex max-w-6xl flex-col items-center justify-between overflow-hidden rounded-2xl bg-linear-to-r from-[#0B6623] to-[#A8E4A0] px-8 pt-10 md:mx-auto md:flex-row md:items-start md:pl-14">
			{/* Banner Content */}
			<div className="text-white">
				<h2 className="text-3xl font-medium">Do You Own a Car?</h2>
				<p className="mt-2">
					Monetize your vehicle effortlessly by listing it on AST to people in
					need of a vehicle.
				</p>
				<p className="max-w-130">
					We take care of insurance, maintenance, driver verification, and
					secure payment - so you can earn money while you sleep.
				</p>
				<Button variant="secondary" className="mt-4">
					List Your Car
				</Button>
			</div>

			<img
				src={assets.banner_car_image}
				alt="Banner car Image"
				className="mt-10 max-h-45"
			/>
		</div>
	);
};

export default Banner;
