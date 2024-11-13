import React from "react";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function getCSSVariable(variableName) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
        pointStyle: "rectRounded",
        boxWidth: 10,
        boxHeight: 10,
        padding: 20,
        font: {
          size: 14,
          weight: "regular",
        },
      },
    },
  },
  scales: {
    x: {
      border: {
        display: false,
        color: getCSSVariable("--shadow-color"),
      },
      grid: {
        display: false,
        color: getCSSVariable("--shadow-color"),
      },
    },
    y: {
      border: {
        display: false,
        color: getCSSVariable("--shadow-color"),
      },
      grid: {
        display: true,
        color: getCSSVariable("--shadow-color"),
      },
    },
  },
};

export function LineChartComp({ labels, datasets, colors, title, height }) {
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    setChartReady(true);
  }, []);

  const data = {
    labels,
    datasets: datasets.map((dataset, index) => ({
      fill: true,
      showLine: true,
      borderWidth: 1.5,
      pointStyle: "rectRounded",
      pointBorderWidth: 0,
      pointRadius: 8,
      label: dataset.label,
      data: dataset.data,
      borderColor: getCSSVariable(
        colors[index]?.borderColor || "--default-border-color"
      ),
      backgroundColor: getCSSVariable(
        colors[index]?.backgroundColor || "--default-bg-color"
      ),
    })),
  };

  return chartReady ? (
    <Line
      options={
        title ? { ...options, title: { display: true, text: title } } : options
      }
      data={data}
    />
  ) : null;
}
