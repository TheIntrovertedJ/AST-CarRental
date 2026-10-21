import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets, menuLinks } from '../assets/assets';
import Button from './ui/Button';

const Navbar = ({ setShowLogin }) => {
	const location = useLocation();
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<div
			className={`relative flex items-center justify-between border-b border-borderColor px-6 py-4 text-gray-600 transition-all md:px-16 lg:px-24 xl:px-32 ${location.pathname === '/' && 'bg-light'}`}
		>
			<Link to="/">
				<img src={assets.logo} alt="logo" className="h-8" />
			</Link>

			<div
				className={`right-0 z-50 flex flex-col items-start gap-4 border-borderColor transition-all duration-300 max-sm:fixed max-sm:top-16 max-sm:h-screen max-sm:w-full max-sm:border-t max-sm:p-4 sm:flex-row sm:items-center sm:gap-8 ${location.pathname === '/' ? 'bg-light' : 'bg-white'} ${open ? 'max-sm:translate-x-0' : 'max-sm:-translate-x-full'}`}
			>
				{menuLinks.map((link, index) => (
					<Link key={index} to={link.path}>
						{link.name}
					</Link>
				))}

				<div className="hidden max-w-56 items-center gap-2 rounded-full border border-borderColor px-3 text-sm lg:flex">
					<input
						type="text"
						className="w-full bg-transparent py-1.5 placeholder-gray-500 outline-none"
						placeholder="Search cars, locations..."
					/>
					<img src={assets.search_icon} alt="Search" />
				</div>

				<div className="flex items-start gap-6 max-sm:flex-col sm:items-center">
					<button onClick={() => navigate('/owner')} className="cursor-pointer">
						Dashboard
					</button>

					<Button onClick={() => setShowLogin(true)}>Login</Button>
				</div>
			</div>

			<button
				className="cursor-pointer sm:hidden"
				aria-label="Menu"
				onClick={() => setOpen(!open)}
			>
				<img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
			</button>
		</div>
	);
};

export default Navbar;
