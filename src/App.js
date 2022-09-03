import React, { useEffect, useState } from "react";
import "./App.css";

const streamUrl = "wss://stream.binance.com:9443/ws";

const request = {
	method: "SUBSCRIBE",
	params: ["btcusdt@aggTrade"],
	id: 1,
};

const formatPrice = (price) => {
	return `$ ${price}`;
};

function App() {
	const [prices, setPrice] = useState([]);
	const [symbol, setSymbol] = useState("");

	useEffect(() => {
		const socket = new WebSocket(streamUrl);
		socket.onopen = (event) => {
			socket.send(JSON.stringify(request));
		};

		socket.onmessage = (event) => {
			const data = JSON.parse(event.data);
			try {
				if (data["e"] === "aggTrade") {
					setSymbol(data["s"]);
					setPrice((prev) => [...prev.slice(-10), formatPrice(data["p"])]);
				}
			} catch (error) {
				console.log(error);
			}
		};
	}, []);

	const firstBids = prices.map((item, index) => (
		<div key={index}>
			<p> {item}</p>
		</div>
	));

	return (
		<div>
			<h1>{symbol}</h1>
			{firstBids}
		</div>
	);
}

export default App;
