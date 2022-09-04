import React, { useEffect, useState } from "react";

const streamUrl = "wss://fstream.binance.com/ws";

const formatPrice = (price) => {
	return `$ ${price}`;
};

const formatFunding = (rate) => {
	return `${Math.round(rate * 1000000) / 10000}%`;
};

const BinanceStream = (props) => {
	const [mark, setMark] = useState("");
	const [index, setIndex] = useState("");
	const [funding, setFunding] = useState("");
	const [symbol, setSymbol] = useState("");

	useEffect(() => {
		const request = {
			method: "SUBSCRIBE",
			params: [`${props.ticker}@markPrice@1s`],
			id: 1,
		};

		const socket = new WebSocket(streamUrl);
		socket.onopen = (event) => {
			socket.send(JSON.stringify(request));
		};

		socket.onmessage = (event) => {
			const data = JSON.parse(event.data);
			try {
				if (data["e"]) {
					setSymbol(data["s"]);
					setMark(formatPrice(data["p"]));
					setIndex(formatPrice(data["i"]));
					setFunding(formatFunding(data["r"]));
				}
			} catch (error) {
				console.log(error);
			}
		};
	}, [props.ticker]);

	return (
		<div>
			{mark && (
				<div className="panel">
					<h1 id="ticker">{symbol}</h1>
					<p>Mark Price: {mark}</p>
					<p>Index Price: {index}</p>
					<p>Funding Rate: {funding}</p>
				</div>
			)}
		</div>
	);
};

export default BinanceStream;
