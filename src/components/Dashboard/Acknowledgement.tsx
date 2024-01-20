import React from "react";
import VerticalBarChart from "../Charts/VerticalBarChart";
import { ChartData } from "chart.js";

interface Acknowledgement {
  chartData: ChartData<'bar'>
}

const Acknowledgement = (props: Acknowledgement) => {
  return (
    <div className="w-full h-full px-7.5 py-7.5 text-white rounded-[20px] bg-black-light-100">
      <p className="text-xl leading-8 font-semibold">
        Legal Hold Acknowledgement Status by Case
      </p>
      <div className="pt-5">
        <VerticalBarChart chartData={props.chartData} />
      </div>
    </div>
  );
};

export default Acknowledgement;
