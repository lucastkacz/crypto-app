import React from "react";
import "./App.css";

import { DataWebhookProvider } from "./context/DataWebhookContext";

import BinanceStream from "./components/BinanceStream";
import CurrentTime from "./components/CurrentTime";
import FundingTime from "./components/FundingTime";

function App() {
	return (
		<div>
			<CurrentTime></CurrentTime>
			<DataWebhookProvider ticker="btcusdt">
				<FundingTime></FundingTime>
			</DataWebhookProvider>

			<DataWebhookProvider ticker="btcusdt">
				<BinanceStream></BinanceStream>
			</DataWebhookProvider>

			<DataWebhookProvider ticker="ethusdt">
				<BinanceStream></BinanceStream>
			</DataWebhookProvider>

			<DataWebhookProvider ticker="1000luncbusd">
				<BinanceStream></BinanceStream>
			</DataWebhookProvider>
		</div>
	);
}

export default App;
