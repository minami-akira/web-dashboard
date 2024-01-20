import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  Plugin,
} from "chart.js";

import { DoughnutDataType } from "@/utils/types";
ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProp {
  chartData: DoughnutDataType
}

const DoughnutChart = (props: DoughnutChartProp) => {
  const data = {
    labels: props.chartData.map((item) => item.label),
    datasets: [
      {
        lable: "Poll",
        data: props.chartData.map((item) => item.value),
        backgroundColor: [
          "#323140",
          "#AE262C",
          "#3A0CA3",
          "#F6921E",
          "#D8DF20",
          "#AE262C",
        ],
        borderColor: [
          "#323140",
          "#AE262C",
          "#3A0CA3",
          "#F6921E",
          "#D8DF20",
          "#AE262C",
        ],
        borderRadius: 100,
        spacing: -110,
        cutout: "85%",
        rotation: -90,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 11,
          boxHeight: 11,
          padding: 20,
          font: {
            size: 16,
            family: "Poppins",
          },
          color: "white",
        },
      },
    },
  };

  const doughnutLabel: Plugin<"doughnut"> = {
    id: "doughnutLabel",
    afterDatasetsDraw(chart: ChartJS<"doughnut">) {
      const { ctx, data } = chart;
      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      (ctx.font = "bold 28px Poppins"),
        (ctx.fillStyle = "white"),
        (ctx.textAlign = "center");
      ctx.fillText(
        props.chartData.reduce(
          (acc, item) => acc + parseInt(item.value),
          0
        ).toString(),
        centerX,
        centerY + 10
      );
    },
  };
  return (
    <div className="-mt-[30px]">
      <Doughnut
        data={data}
        options={options}
        plugins={[doughnutLabel]}
        width="316"
      ></Doughnut>
    </div>
  );
};

export default DoughnutChart;
