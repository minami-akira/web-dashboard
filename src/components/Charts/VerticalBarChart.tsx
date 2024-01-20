import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface VerticalBarChartProp {
  chartData: ChartData<'bar'>
}

const options: ChartOptions<"bar"> = {
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: "Acknowledgement",
        padding: {
          top: 20,
        },
      },
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
      border: {
        width: 0,
      },
    },
    y: {
      ticks: {
        color: "#7B91B0",
        font: {
          size: 12,
        },
        crossAlign: "near",
      },
      grid: {
        display: true,
        color: "rgba(70, 78, 95, 0.12)",
      },
      title: {
        display: true,
        text: "Case Number",
        padding: {
          bottom: 20,
        },
      },
      border: {
        width: 0,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const VerticalBarChart = (props: VerticalBarChartProp) => {
  return <Bar data={props.chartData} options={options} />;
};

export default VerticalBarChart;
