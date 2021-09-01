import React from "react";

const Output = ({ operation, setOperation, sum, setSum }) => {

	return (
		<div id="output">
			<div className="d-flex text-right justify-content-end">
				<input
					type="text"
					className="sumDisplay w-100 h-75 d-flex text-right"
					placeholder="0"
					disabled
					value={operation}
				/>
				{/* <div>{sum}</div> */}
			</div>
			<div className="d-flex text-right justify-content-end">
				<input
					id="display"
					type="text"
					value={sum}
					className="w-100 d-flex text-right"
					maxLength="12"
					// placeholder={sum}
				/>
			</div>
		</div>
	);
};

export default Output;
