import Overview from "@/components/Dashboard/Overview";
import BrokenDown from "@/components/Dashboard/BrokenDown";
import Custodians from "@/components/Dashboard/Custodians";
import Acknowledgement from "@/components/Dashboard/Acknowledgement";
import { DASHBOARD_DATA } from "@/mock/mock";

export default function Home() {
  return (
    <div className="flex flex-col gap-7.5">
      <div className="flex lg:flex-row flex-col gap-7.5">
        <div className="flex-1">
          <Overview />
        </div>
        <div className="lg:flex-none flex-1">
          <BrokenDown chartData={DASHBOARD_DATA.DOUGHNUT_DATA} />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-7.5">
        <div className="flex-1">
          <Custodians chartData={DASHBOARD_DATA.HORIZONTAL_CHART_DATA} />
        </div>
        <div className="flex-1">
          <Acknowledgement chartData={DASHBOARD_DATA.VERTICAL_CHART_DATA} />
        </div>
      </div>
    </div>
  );
}
