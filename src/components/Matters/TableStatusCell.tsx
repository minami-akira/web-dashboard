import React from "react";

interface TableStatusCellProps {
  data: any;
}

const TableStatusCell: React.FC<TableStatusCellProps> = ({ data }) => {
  return (
    <div className="bg-success px-2 py-0.5 w-fit rounded-sm">
      <span className="font-sans text-paragraph4 font-normal leading-5">
        {data.status}
      </span>
    </div>
  );
};

export default TableStatusCell;
