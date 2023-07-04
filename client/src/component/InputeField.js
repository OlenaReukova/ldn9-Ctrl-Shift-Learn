export const InputeField = ({ id, label, ...props }) => {
	return (
		<div>
			<label htmlFor={id} > {label}</label>
			<input id={id} {...props} />
		</div>
	);
};
