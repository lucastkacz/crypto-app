import React, { useEffect, useState } from "react";

const CurrentTime = () => {
	const [time, setTime] = useState("");

	useEffect(() => {
		setInterval(() => {
			setTime(new Date().toISOString());
		}, 1);
	});

	return <div className="current-time">{time}</div>;
};

export default CurrentTime;
