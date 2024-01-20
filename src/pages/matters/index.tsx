import React, { useEffect, useState } from "react";
import CoustomPagination from "@/components/Common/CoustomPagination";
import CustomDataTable from "@/components/Common/CustomDataTable";
import { MATTERS_DATA } from "@/mock/mock";
import { MATTERS_HEADER } from "@/utils/constants";
import TableStatusCell from "@/components/Matters/TableStatusCell";
import FilterDropdown from "@/components/Common/FilterDropdown/FilterDropdown";
import IconButton from "@/components/Common/IconButton";
import { MatterTableData } from "@/utils/types";

const Matter: React.FC = () => {
  const [tableData, setTableData] = useState<MatterTableData[]>(MATTERS_DATA);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const pageCount = 8;

  useEffect(() => {
    setTotalPages(Math.ceil(MATTERS_DATA.length / pageCount));
  }, []);

  useEffect(() => {
    setTableData(
      MATTERS_DATA.slice((currentPage - 1) * pageCount, currentPage * pageCount)
    );
  }, [currentPage]);

  return (
    <div className="flex flex-col w-full bg-black-light-base md:bg-black-light-50 p-0 gap-7.5 md:py-10 md:px-7.5 rounded-2xl">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
        <button className="bg-primary-base p-2.5 rounded-sm md:hidden">
          <span className="text-md font-sans font-semibold text-black-light-base leading-5">
            + Create New Hold
          </span>
        </button>
        <div className="flex md:flex-row gap-8 items-center">
          <h4 className="text-white font-medium text-2xl font-poppins hidden md:flex">
            Matters
          </h4>
          <FilterDropdown
            title="Filter"
            iconURL="/assets/img/Filter.svg"
            filterItems={["Matter", "Hold", "Custodian", "Source"]}
          />
          <FilterDropdown
            title="Public"
            iconURL="/assets/img/expand_more.svg"
            filterItems={["Public"]}
          />
        </div>
        <button className="bg-primary-base p-2.5 rounded-sm hidden md:flex">
          <span className="text-md font-sans font-semibold text-black-light-base leading-5">
            + Create New Hold
          </span>
        </button>
      </div>
      <CustomDataTable
        columns={MATTERS_HEADER}
        data={tableData}
        rowCustomize={[
          { rownum: 4, component: TableStatusCell as React.FC },
          { rownum: 9, component: () => <>• • •</> },
        ]}
        isLoading={false}
      />
      <div className="flex md:flex-row flex-col gap-5 md:gap-0 md:justify-between items-center">
        <div className="flex">
          <IconButton icon="/assets/img/export.svg" title="Export" />
        </div>
        <CoustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Matter;
