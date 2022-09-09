import React, { useEffect, useRef, useContext } from "react";
import { createChart, ColorType } from "lightweight-charts";

import DataContext from "../context/DataContext";

export const ChartComponent = (props) => {
	const { klines, ticker } = useContext(DataContext);
	const chartContainerRef = useRef();

	// const current = klines[klines.length - 1];

	useEffect(() => {
		const handleResize = () => {
			chart.applyOptions({ width: chartContainerRef.current.clientWidth });
		};

		const chart = createChart(chartContainerRef.current, {
			layout: {
				background: { type: ColorType.Solid, color: "black" },
				textColor: "greenyellow",
				fontSize: 14,
			},
			watermark: {
				visible: true,
				fontSize: 24,
				horzAlign: "center",
				vertAlign: "top",
				color: "rgba(128, 128, 128, 0.75)",
				text: ticker,
			},
			grid: {
				vertLines: {
					color: "rgba(0, 128, 0, 0.50)",
				},
				horzLines: {
					color: "rgba(0, 128, 0, 0.50)",
				},
			},

			width: 400,
			height: 250,
		});
		chart.timeScale().fitContent();

		const newSeries = chart.addCandlestickSeries();
		newSeries.setData(klines);

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);

			chart.remove();
		};
	}, [klines, ticker]);

	return <div ref={chartContainerRef} />;
};

export default function App(props) {
	return <ChartComponent {...props}></ChartComponent>;
}
