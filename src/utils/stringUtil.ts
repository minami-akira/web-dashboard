import moment from "moment";

export const getPercentage = (percent: number) => {
  return percent + "%";
};

export const getFormattedDate = (date: Date) => {
  return moment(date).format("MM/DD/YY");
};
