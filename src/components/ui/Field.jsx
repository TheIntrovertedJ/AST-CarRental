import { useId } from 'react';

/**
 * Label + control with optional hint and error text.
 * `as` switches the control: <Field as="select">. Extra props (name, value,
 * onChange, or React Hook Form's register()) go straight to the control.
 */
const Field = ({
	label,
	hint,
	error,
	as: Control = 'input',
	id,
	className = '',
	children,
	...props
}) => {
	const generatedId = useId();
	const fieldId = id ?? generatedId;
	const messageId = `${fieldId}-message`;
	const message = error || hint;

	return (
		<div className={`flex flex-col gap-1.5 ${className}`}>
			<label htmlFor={fieldId} className="text-sm font-medium text-ink">
				{label}
			</label>
			<Control
				id={fieldId}
				aria-invalid={error ? true : undefined}
				aria-describedby={message ? messageId : undefined}
				className={`h-10 w-full rounded-lg border bg-white px-3 text-sm text-ink placeholder:text-muted ${error ? 'border-danger' : 'border-field'}`}
				{...props}
			>
				{children}
			</Control>
			{message && (
				<p
					id={messageId}
					className={`text-sm ${error ? 'text-danger' : 'text-muted'}`}
				>
					{message}
				</p>
			)}
		</div>
	);
};

export default Field;
