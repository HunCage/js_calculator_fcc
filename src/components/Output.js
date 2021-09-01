import React from "react";

const Output = ({ operation, sum }) => {
	return (
		<div id="output">
			<div className="d-flex text-right justify-content-end">
				<input
					type="text"
					className="sumDisplay w-100 h-75 d-flex text-right"
					placeholder="0"
					value={sum}
					disabled
				/>
			</div>
			<div className="d-flex text-right justify-content-end">
				<input
					id="display"
					value={operation}
					type="text"
					className="w-100 d-flex text-right"
					maxLength="12"
					placeholder="0"
				/>
			</div>
		</div>
	);
};

export default Output;
