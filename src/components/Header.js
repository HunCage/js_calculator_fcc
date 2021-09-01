import React from "react";

// import "../App.css";

import { FaFreeCodeCamp } from "react-icons/fa";

const Header = () => {
	return (
		<header className="App-header">
			<h3 className="headerText">JavaScript Calculator</h3>
			<h2 className="mr-3">
				<a
					className="App-link"
					href="https://www.freecodecamp.org/huncage"
				>
					freeCodeCamp
					<FaFreeCodeCamp className="iconFCC" />
				</a>
			</h2>
		</header>
	);
};

export default Header;