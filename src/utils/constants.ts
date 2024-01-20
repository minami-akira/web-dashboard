export const MATTERS_HEADER = [
  { Header: "Name", accessor: "name" },
  { Header: "Date Hold Began", accessor: "date" },
  { Header: "No. of Custodian", accessor: "custodians" },
  { Header: "Source held", accessor: "sources" },
  { Header: "Case Status", accessor: "status" },
  { Header: "Date Release", accessor: "release" },
  { Header: "Acknowledge ment %", accessor: "acknowledgement" },
  { Header: "Lead Attorney", accessor: "lead" },
  { Header: "Case Type", accessor: "type" },
  { Header: " ", accessor: "manage" },
];

export const FILTER_BY = [
  {
    label: "Matter",
    value: "name",
  },
  {
    label: "Hold",
    value: "holds",
  },
  {
    label: "Custodian",
    value: "custodians",
  },
  {
    label: "Source",
    value: "sources",
  },
];