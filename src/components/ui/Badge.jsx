const tones = {
	success: 'bg-primary-soft text-primary',
	warning: 'bg-warning-soft text-warning',
	danger: 'bg-danger-soft text-danger',
	neutral: 'bg-light text-muted',
};

const Badge = ({ tone = 'neutral', className = '', children }) => (
	<span
		className={`inline-flex h-6 items-center rounded-full px-2.5 text-xs font-medium ${tones[tone]} ${className}`}
	>
		{children}
	</span>
);

export default Badge;
