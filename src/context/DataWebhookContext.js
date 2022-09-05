import { createContext, useState, useEffect } from "react";
const DataWebhookContext = createContext({});

const streamUrl = "wss://fstream.binance.com/ws";

export const DataWebhookProvider = (props) => {
	const [mark, setMark] = useState("");
	const [index, setIndex] = useState("");
	const [funding, setFunding] = useState("");
	const [symbol, setSymbol] = useState("");
	const [nextFunding, setNextFunding] = useState("");

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
					setMark(data["p"]);
					setIndex(data["i"]);
					setFunding(data["r"]);
					setNextFunding(data["T"]);
				}
			} catch (error) {
				console.log(error);
			}
		};
	}, [props.ticker]);

	return (
		<DataWebhookContext.Provider value={{ mark, index, funding, symbol, nextFunding }}>
			{props.children}
		</DataWebhookContext.Provider>
	);
};

export default DataWebhookContext;

// {
//     "e": "markPriceUpdate",     // Event type
//     "E": 1562305380000,         // Event time
//     "s": "BTCUSDT",             // Symbol
//     "p": "11794.15000000",      // Mark price
//     "i": "11784.62659091",      // Index price
//     "P": "11784.25641265",      // Estimated Settle Price, only useful in the last hour before the settlement starts
//     "r": "0.00038167",          // Funding rate
//     "T": 1562306400000          // Next funding time
// }
