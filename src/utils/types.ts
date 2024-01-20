import { ChartData } from "chart.js";

export type MatterTableData = {
  id: number;
  name: string;
  date: string;
  holds: number;
  custodians: number;
  sources: string;
  status: string;
  release: string;
  acknowledgement: string;
  lead: string;
  type: string;
};

export interface MatterTableRowCustomize {
  rownum: number;
  component: React.FC<TableCustomizeCellProps>;
}

export interface TableCustomizeCellProps {
  data: unknown;
}

export type DoughnutDataType = {
  label: string,
  value: string
}[]

export type DashboardDataType = {
  DOUGHNUT_DATA: DoughnutDataType;
  HORIZONTAL_CHART_DATA: ChartData<'bar'>;
  VERTICAL_CHART_DATA: ChartData<'bar'>;
}