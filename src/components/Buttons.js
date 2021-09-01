import React from "react";
// import { create, all } from 'mathjs'
// import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';

const math = require('mathjs')

const Buttons = ({ operation, setOperation, sum, setSum }) => {
	const handleDisplay = (symbol) => {
		// setOperation((previous) => previous + symbol);
		// if (operation[operation.length - 1] === "=") {
		// 	if (/[1-9.]/.test(symbol)) {
		// 		setOperation(symbol);
		// 	} else {
		// 		setOperation(sum + symbol);
		// 	}
		// }
		setOperation((previous) => {
			if (
				/[+*-/]/.test(symbol) &&
				/[+*-/]/.test(previous[previous.length - 1])
			) {
				let newValue;
				if (/[-]/.test(symbol)) {
					newValue = previous.slice(0, previous.length) + symbol;
				} else {
					let count = 0;
					for (let i = 0; i < previous.length; i++) {
						if (isNaN(+previous[i])) {
							count++;
						} else {
							count = 0;
						}
					}
					newValue =
						previous.slice(0, previous.length - count) + symbol;
				}

				setOperation(newValue);
			} else {
				if (previous) {
					previous = previous + "";
					let valArr = previous.split(/[+/*-]/g);
					console.log("valArr " + JSON.stringify(valArr));
					let lastNumber = valArr[valArr.length - 1];
					if (
						!isNaN(lastNumber) &&
						/[.]/.test(lastNumber) &&
						symbol === "."
					) {
						console.log("symbol = empty ");
						symbol = "";
					}
				}

				setOperation(
					(previous + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
				);
			}
		});

		setSum((previous) =>
			(previous + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
		);
	};

	const calculate = () => {
		// setOperation(operation);
		setSum(math.evaluate(operation));
		setOperation(math.evaluate(operation));
		// setOperation(eval(operation));
		// setSum(eval(operation));
		// setSum((previous) => previous + "=");
	};

	const reset = () => {
		setOperation("0");
		setSum(0);
	};

	const resetLastElem = () => {
		setSum(0);
		if (operation.length > 0) {
			setOperation(operation.slice(0, operation.length - 1));
		} else {
			setOperation(0)
		}
	};

	return (
		<div className="m-0 pl-3">
			<div className="row numRowOne m-auto mt-3">
				<div className="col-6 p-0">
					<button
						onClick={reset}
						type="button"
						className="btns btn-c bg-danger text-light"
						id="clear"
						value="C"
					>
						C
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={resetLastElem}
						type="button"
						className="d-flex btns bg-warning text-white align-content-center justify-content-center"
						id="backspace"
						value="&#129080;"
					>
						<span className="">&#129080;</span>
					</button>
				</div>

				{/* <div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("%")}
						type="button"
						className="btns bg-info text-white"
						id="percent"
						value="%"
					>
						%
					</button>
				</div> */}
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("/")}
						type="button"
						className="btns bg-info text-white"
						id="divide"
						value="/"
					>
						/
					</button>
				</div>
			</div>

			<div className="row numRowTwo m-0 mt-2">
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("7")}
						type="button"
						className="btns"
						id="seven"
						value="7"
					>
						7
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("8")}
						type="button"
						className="btns"
						id="eight"
						value="8"
					>
						8
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("9")}
						type="button"
						className="btns"
						id="nine"
						value="9"
					>
						9
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("*")}
						type="button"
						className="btns bg-info text-white"
						id="multiply"
						value="x"
					>
						x
					</button>
				</div>
			</div>

			<div className="row numRowThree m-0 mt-2">
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("4")}
						type="button"
						className="btns"
						id="four"
						value="4"
					>
						4
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("5")}
						type="button"
						className="btns"
						id="five"
						value="5"
					>
						5
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("6")}
						type="button"
						className="btns"
						id="six"
						value="6"
					>
						6
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("-")}
						type="button"
						className="btns bg-info text-white"
						id="subtract"
						value="-"
					>
						-
					</button>
				</div>
			</div>

			<div className="row numRowFour m-0 mt-2">
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("1")}
						type="button"
						className="btns"
						id="one"
						value="1"
					>
						1
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("2")}
						type="button"
						className="btns"
						id="two"
						value="2"
					>
						2
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("3")}
						type="button"
						className="btns"
						id="three"
						value="3"
					>
						3
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("+")}
						type="button"
						className="btns bg-info text-white"
						id="add"
						value="+"
					>
						+
					</button>
				</div>
			</div>

			<div className="row numRowFive m-0 mt-2">
				{/* <div className="col-3 p-0">
					<button
						onClick={() => handleDisplay("x * x")}
						type="button"
						className="btns bg-info text-white"
						id="power"
						value="x2"
					>
						x<sup>2</sup>
					</button>
				</div> */}
				<div className="col-6 p-0">
					<button
						onClick={() => handleDisplay("0")}
						type="button"
						className="btns btn-0"
						id="zero"
						value="0"
					>
						0
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={() => handleDisplay(".")}
						type="button"
						className="btns bg-info text-white"
						id="decimal"
						value="."
					>
						.
					</button>
				</div>
				<div className="col-3 p-0">
					<button
						onClick={calculate}
						type="button"
						className="btns text-white bg-success"
						id="equals"
						value="="
					>
						=
					</button>
				</div>
			</div>
		</div>
	);
};

export default Buttons;
