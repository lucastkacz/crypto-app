import React, { useContext } from "react";
import DataWebhookContext from "../context/DataWebhookContext";

const formatPrice = (price) => {
	return `$ ${price}`;
};

const formatFunding = (rate) => {
	return `${Math.round(rate * 1000000) / 10000}%`;
};

const BinanceStream = () => {
	const { mark, index, funding, symbol } = useContext(DataWebhookContext);

	return (
		<div>
			{mark && (
				<div className="panel">
					<h1 id="ticker">{symbol}</h1>
					<p>Mark Price: {formatPrice(mark)}</p>
					<p>Index Price: {formatPrice(index)}</p>
					<p>Funding Rate: {formatFunding(funding)}</p>
				</div>
			)}
		</div>
	);
};

export default BinanceStream;
