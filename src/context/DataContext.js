import { createContext, useState, useEffect } from "react";
const DataContext = createContext({});

export const DataProvider = (props) => {
	const [klines, setKlines] = useState([]);
	let ticker = props.ticker;

	const endpointUrl = `https://api.binance.com/api/v3/uiKlines?symbol=${props.ticker}&interval=5m&limit=1000`;

	useEffect(() => {
		const fetchApi = async () => {
			const response = await fetch(endpointUrl);
			const responseData = await response.json();

			if (responseData) {
				for (let i = 0; i < responseData.length; i++) {
					let kline = {
						time: responseData[i][0] / 1000,
						open: responseData[i][1],
						high: responseData[i][2],
						low: responseData[i][3],
						close: responseData[i][4],
					};
					setKlines((prev) => [...prev, kline]);
				}
			}
		};
		fetchApi().catch(console.error);
	}, [endpointUrl]);

	return <DataContext.Provider value={{ klines, ticker }}>{props.children}</DataContext.Provider>;
};

export default DataContext;
