import React, { useState } from "react";
import Buttons from "./Buttons";
import Output from "./Output";

const Frame = ({ handleDisplay }) => {
	const [operation, setOperation] = useState("0");
	const [sum, setSum] = useState(0);
	

	return (
		<div className="frame grid">
			<span className="mt-2 p-0">
				Calc - <small className="text-danger">Xtra</small>
			</span>
			<Output
				operation={operation}
				setOperation={setOperation}
				sum={sum}
				setSum={setSum}
				onChange={handleDisplay}
			/>
			<Buttons
				operation={operation}
				setOperation={setOperation}
				sum={sum}
				setSum={setSum}
				onChange={handleDisplay}
			/>
		</div>
	);
};

export default Frame;
