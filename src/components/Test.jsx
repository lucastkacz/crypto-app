import React, { useEffect, useState } from "react";

const endpointUrl = "https://api.binance.com/api/v3/uiKlines?symbol=BTCUSDT&interval=1h&limit=200";

const Test = () => {
	// const [klines, setKlines] = useState([]);
	const [kline, setKline] = useState({});

	const fetchApi = async () => {
		const response = await fetch(endpointUrl);
		const responseData = await response.json();

		console.log(responseData);

		for (let i = 0; i < responseData.length; i++) {
			setKline({
				time: responseData[i][0],
				open: responseData[i][1],
				high: responseData[i][2],
				low: responseData[i][3],
				close: responseData[i][4],
			});
			console.log(kline);
		}
	};

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<div>
			<ul>boca</ul>
		</div>
	);
};

export default Test;

// [
//     [
//       1499040000000,      // Kline open time
//       "0.01634790",       // Open price
//       "0.80000000",       // High price
//       "0.01575800",       // Low price
//       "0.01577100",       // Close price
//       "148976.11427815",  // Volume
//       1499644799999,      // Kline Close time
//       "2434.19055334",    // Quote asset volume
//       308,                // Number of trades
//       "1756.87402397",    // Taker buy base asset volume
//       "28.46694368",      // Taker buy quote asset volume
//       "0"                 // Unused field, ignore.
//     ]
// ]
