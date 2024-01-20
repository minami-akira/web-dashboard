import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import HorizontalBarChart from "../Charts/HorizontalBarChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface CustodiansProp {
  chartData: ChartData<'bar'>
}

const Custodians = (props: CustodiansProp) => {
  return (
    <div className="w-full h-full px-7.5 py-7.5 text-white rounded-[20px] bg-black-light-100">
      <p className="text-xl leading-8 font-semibold">Custodians Under Hold</p>
      <div className="h-[calc(100vh *256 / 1440)]">
        <HorizontalBarChart chartData={props.chartData} />
      </div>
    </div>
  );
};

export default Custodians;
