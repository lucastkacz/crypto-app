import { createContext } from "react";
const DataContext = createContext({});

const endpointUrl = "https://api.binance.com/api/v3/uiKlines?symbol=BTCUSDT&interval=1h&limit=1000";

export const DataProvider = (props) => {
	const fetchApi = async () => {
		const response = await fetch(endpointUrl);
		console.log(response.statusText);
	};
};

// https://api.binance.com/api/v3/uiKlines?symbol=BTCUSDT&interval=1h&limit=1000
