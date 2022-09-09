import React from "react";
import "./App.css";

import { DataWebhookProvider } from "./context/DataWebhookContext";
import { DataProvider } from "./context/DataContext";

import BinanceStream from "./components/BinanceStream";
import CurrentTime from "./components/CurrentTime";
import FundingTime from "./components/FundingTime";
import Chart from "./components/Chart";

function App() {
	return (
		<div>
			<div className="top-bar">
				<CurrentTime></CurrentTime>

				<DataWebhookProvider ticker="btcusdt">
					<FundingTime></FundingTime>
				</DataWebhookProvider>
			</div>

			<DataWebhookProvider ticker="1000shibusdt">
				<BinanceStream></BinanceStream>
			</DataWebhookProvider>

			<DataProvider ticker="NEOUSDT">
				<Chart></Chart>
			</DataProvider>
			<DataProvider ticker="LINKUSDT">
				<Chart></Chart>
			</DataProvider>
			<DataProvider ticker="ADAUSDT">
				<Chart></Chart>
			</DataProvider>
			<DataProvider ticker="XRPUSDT">
				<Chart></Chart>
			</DataProvider>
		</div>
	);
}

export default App;
