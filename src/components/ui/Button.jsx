import { Link } from 'react-router-dom';

const variants = {
	primary: 'bg-primary text-white hover:bg-primary-dull',
	secondary: 'bg-white text-ink border border-field hover:bg-light',
	ghost: 'text-primary hover:bg-primary-soft',
};

const sizes = {
	md: 'h-10 px-5 text-sm',
	lg: 'h-12 px-8 text-base',
};

/**
 * Shared button. Renders a router <Link> when `to` is given, otherwise a <button>.
 * `loading` keeps the button focusable but swaps the label and ignores clicks,
 * which also blocks double submits when type="submit".
 */
const Button = ({
	variant = 'primary',
	size = 'md',
	pill = false,
	block = false,
	to,
	loading = false,
	loadingLabel = 'Please wait',
	className = '',
	onClick,
	children,
	...props
}) => {
	const classes = [
		'inline-flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-60',
		pill ? 'rounded-full' : 'rounded-lg',
		block && 'w-full',
		variants[variant],
		sizes[size],
		className,
	]
		.filter(Boolean)
		.join(' ');

	if (to) {
		return (
			<Link to={to} className={classes} onClick={onClick} {...props}>
				{children}
			</Link>
		);
	}

	const handleClick = (event) => {
		if (loading) {
			event.preventDefault();
			return;
		}
		onClick?.(event);
	};

	return (
		<button
			type="button"
			className={classes}
			aria-busy={loading || undefined}
			onClick={handleClick}
			{...props}
		>
			{loading ? loadingLabel : children}
		</button>
	);
};

export default Button;
