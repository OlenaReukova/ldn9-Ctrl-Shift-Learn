export const Button = ({ title }) => {
    return (
			<div>
				<button
					style={{
						backgroundColor: "#FF0000",
						color: "white",
						padding: "10px 20px",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
					}}
				>
					{title}
				</button>
			</div>
		);
};