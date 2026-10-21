// Placeholder block for loading states. Mark the loading region itself with
// aria-busy="true"; the blocks are decorative and hidden from screen readers.
const Skeleton = ({ className = '' }) => (
	<div
		aria-hidden="true"
		className={`rounded-md bg-borderColor/60 motion-safe:animate-pulse ${className}`}
	/>
);

export default Skeleton;
