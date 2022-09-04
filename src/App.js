import React from "react";
import "./App.css";

import BinanceStream from "./components/BinanceStream";
import CurrentTime from "./components/CurrentTime";

function App() {
	return (
		<React.Fragment>
			<CurrentTime></CurrentTime>
			<BinanceStream ticker="ethusdt"></BinanceStream>
			<BinanceStream ticker="btcusdt"></BinanceStream>
			<BinanceStream ticker="linkusdt"></BinanceStream>
		</React.Fragment>
	);
}

export default App;
