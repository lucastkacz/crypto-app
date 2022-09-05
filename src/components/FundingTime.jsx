import React, { useContext } from "react";
import DataWebhookContext from "../context/DataWebhookContext";

const FundingTime = () => {
	const { nextFunding } = useContext(DataWebhookContext);

	return <div>{nextFunding && <p> Next settlement: {new Date(nextFunding).toISOString()}</p>}</div>;
};

export default FundingTime;
