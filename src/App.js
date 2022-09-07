import React from "react";
import "./App.css";

import { DataWebhookProvider } from "./context/DataWebhookContext";

import BinanceStream from "./components/BinanceStream";
import CurrentTime from "./components/CurrentTime";
import FundingTime from "./components/FundingTime";
import Chart from "./components/Chart";
import Test from "./components/Test";

function App() {
	return (
		<div>
			{/* <CurrentTime></CurrentTime>
			<DataWebhookProvider ticker="btcusdt">
				<FundingTime></FundingTime>
			</DataWebhookProvider>

			<DataWebhookProvider ticker="btcusdt">
				<BinanceStream></BinanceStream>
			</DataWebhookProvider>

			<Chart></Chart> */}
			<Test></Test>
		</div>
	);
}

export default App;
