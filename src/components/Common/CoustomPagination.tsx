import React from "react";
import {
  Pagination,
  PaginationItemType,
  PaginationItemRenderProps,
} from "@nextui-org/react";
import classnames from "classnames";
import Image from "next/image";
import { cursorTo } from "readline";

interface CoustomPaginationProps {
  totalPages: number;
  currentPage: number;
  onChange: (value: number) => void;
}

const CoustomPagination: React.FC<CoustomPaginationProps> = ({
  totalPages,
  currentPage,
  onChange,
}) => {
  const renderItem = (props: PaginationItemRenderProps) => {
    const {
      key,
      value,
      onNext,
      className,
      onPrevious,
      isActive,
      setPage,
      isFirst,
    } = props;
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={classnames(
            "text-gray-300 bg-bluish-button flex items-center w-8 h-8 justify-center border-solid border-bluish-border border-2 rounded-none"
          )}
          onClick={onNext}
        >
          <Image
            src={"/assets/img/Right.png"}
            width={10}
            height={10}
            className=""
            alt="right"
          />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={classnames(
            "flex items-center w-8 h-8 justify-center text-gray-300 bg-bluish-button border-solid border-bluish-border border-2 rounded-none"
          )}
          onClick={onPrevious}
        >
          <Image
            src={"/assets/img/Right.png"}
            width={10}
            height={10}
            className="rotate-180"
            alt="left"
          />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={"text-gray-300 bg-[#000000] rounded-none"}>
          • • •
        </button>
      );
    }

    return (
      <button
        key={key}
        className={classnames(
          "flex items-center w-8 h-8 justify-center bg-bluish-button border-solid border-bluish-border border-2 rounded-none",
          isActive &&
            "text-yellow-700 border-yellow-700 border-solid border-2 font-bold",
          !isActive && "text-gray-300"
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };
  return (
    <div className="flex text-sm font-normal">
      <div>
        <Pagination
          showControls
          showShadow
          total={totalPages}
          page={currentPage}
          initialPage={1}
          className="gap-4"
          renderItem={renderItem}
          variant="flat"
          siblings={1}
          boundaries={1}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CoustomPagination;
