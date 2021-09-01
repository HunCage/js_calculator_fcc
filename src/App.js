import "./App.css";
import Header from "./components/Header";
import Frame from "./components/Frame";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App h-100">
			<Header />
			<div className="container d-flex justify-content-center  align-items-center">
				<Frame />
			</div>
		</div>
	);
}

export default App;
