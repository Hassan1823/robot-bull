"use client";

import React, { FC, useEffect, useRef } from "react";
import Chart, { ChartType } from "chart.js/auto";

interface ChartProps {
  chartType: ChartType;
}

const PieChartComp: FC<ChartProps> = ({ chartType }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current?.getContext("2d");

    if (myChartRef) {
      chartInstance.current = new Chart(myChartRef, {
        type: chartType,
        data: {
          datasets: [
            {
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(54, 162, 235)",
                "rgb(255, 99, 132)",
                "rgb(255, 205, 86)",
              ],
            },
          ],
          labels: ["Label 1", "Label 2", "Label 3"],
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartType]);

  return (
    <div className="py-[10%]">
      <canvas ref={chartRef} style={{ width: "300px", height: "200px" }} />
    </div>
  );
};

export default PieChartComp;
