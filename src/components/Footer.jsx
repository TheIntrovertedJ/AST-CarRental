import { assets } from '../assets/assets';

const Footer = () => {
	return (
		<div className="mt-60 px-6 text-sm text-gray-500 md:px-16 lg:px-24 xl:px-32">
			<div className="flex flex-wrap items-start justify-between gap-8 border-b border-borderColor pb-6">
				<div>
					<img src={assets.logo} alt="logo" className="h-8 md:h-9" />
					<p className="mt-3 max-w-80">
						Premium car rental service that offers a wide range of vehicles for
						all your travel needs.
					</p>
					<div className="mt-6 flex items-center gap-3">
						{/* Instagram */}
						<a href="#">
							<img
								src={assets.instagram_logo}
								className="h-5 w-5"
								alt="Instagram"
							/>
						</a>

						{/* Facebook */}
						<a href="#">
							<img
								src={assets.facebook_logo}
								className="h-5 w-5"
								alt="Facebook"
							/>
						</a>

						{/* Twitter */}
						<a href="#">
							<img
								src={assets.twitter_logo}
								className="h-5 w-5"
								alt="Twitter"
							/>
						</a>

						{/* Gmail */}
						<a href="#">
							<img src={assets.gmail_logo} className="h-5 w-5" alt="Gmail" />
						</a>
					</div>
				</div>

				<div>
					<h2 className="text-base font-medium text-gray-800 uppercase">
						Quick Links
					</h2>
					<ul className="mt-3 flex flex-col gap-1.5">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/cars">Browse Cars</a>
						</li>
						<li>
							<a href="#">List Your Car</a>
						</li>
						<li>
							<a href="#">About Us</a>
						</li>
					</ul>
				</div>

				<div>
					<h2 className="text-base font-medium text-gray-800 uppercase">
						Resources
					</h2>
					<ul className="mt-3 flex flex-col gap-1.5">
						<li>
							<a href="#">Help Center</a>
						</li>
						<li>
							<a href="#">Terms of Service</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Insurance</a>
						</li>
					</ul>
				</div>

				<div>
					<h2 className="text-base font-medium text-gray-800 uppercase">
						Contact Us
					</h2>
					<ul className="mt-3 flex flex-col gap-1.5">
						<li>1678 Street Name</li>
						<li>Houston, TX 77000</li>
						<li>info@astcarrentals.com</li>
						<li>+1 (123) 456-7890</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col items-center justify-between gap-2 py-5 md:flex-row">
				<p>
					© {new Date().getFullYear()}{' '}
					<a href="#">AST Car Rentals & Services LLC</a>. All rights reserved.
				</p>
				<ul className="flex items-center gap-4">
					<li>
						<a href="#">Privacy Policy</a>
					</li>
					<li>|</li>
					<li>
						<a href="#">Terms of Service</a>
					</li>
					<li>|</li>
					<li>
						<a href="#">Cookies</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
