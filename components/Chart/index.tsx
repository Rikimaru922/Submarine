import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function Chart() {
    const chartContainerRef = useRef<any>();

    useEffect(() => {
        console.log('width================', chartContainerRef.current.clientWidth)

        var chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 266,
            leftPriceScale: {
                visible: true,
                drawTicks: false
            },
            rightPriceScale: {
                visible: true,
                drawTicks: false
            },
            layout: {
                backgroundColor: "#0E1B29",
                textColor: "#d1d4dc"
            },
            grid: {
                vertLines: {
                    color: "rgba(42, 46, 57, 0)"
                },
                horzLines: {
                    color: "transparent"
                }
            }
        });

        var areaSeries = chart.addAreaSeries({
            topColor: "rgba(38,198,218, 0.56)",
            bottomColor: "rgba(38,198,218, 0.04)",
            lineColor: "rgba(38,198,218, 1)",
            lineWidth: 2
        });

        var areaSeries1 = chart.addAreaSeries({
            topColor: "transparent",
            bottomColor: "transparent",
            lineColor: "rgba(255, 255, 255, 0.85)",
            lineWidth: 1,
            priceScaleId: "left"
        });


        areaSeries.setData([
            { time: "2022-04-27", value: 49.85 },
            { time: "2022-04-28", value: 40.58 },
            { time: "2022-04-29", value: 54.84 },
            { time: "2022-04-30", value: 49.19 },
            { time: "2022-05-01", value: 49.52 },
            { time: "2022-05-02", value: 52.99 },
            { time: "2022-05-03", value: 48.24 },
            { time: "2022-05-06", value: 50.91 },
        ]);

        areaSeries1.setData([
            { time: "2022-04-27", value: 49 },
            { time: "2022-04-28", value: 56 },
            { time: "2022-04-29", value: 38 },
            { time: "2022-04-30", value: 57 },
            { time: "2022-05-01", value: 70 },
            { time: "2022-05-02", value: 40 },
            { time: "2022-05-03", value: 60 },
            { time: "2022-05-06", value: 49 },
        ]);


        chart.timeScale().fitContent();
    }, [])

    return (
        <div id="activity_chart" ref={chartContainerRef}>
        </div>
    );
}
