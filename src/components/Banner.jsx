import { assets } from '../assets/assets';

const Banner = () => {
	return (
		// Banner Section
		<div className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-linear-to-r from-[#0B6623] to-[#A8E4A0] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden">
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
				<button className="mt-4 bg-white hover:bg-slate-100 py-2 px-6 rounded-lg text-sm text-black cursor-pointer transition-all">
					List Your Car
				</button>
			</div>

			<img
				src={assets.banner_car_image}
				alt="Banner car Image"
				className="max-h-45 mt-10"
			/>
		</div>
	);
};

export default Banner;
