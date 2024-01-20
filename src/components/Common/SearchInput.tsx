import React, { ChangeEvent } from "react";
import Image from "next/image";

interface SearchInputProps {
  keyword: string;
  onChange?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ keyword, onChange }) => {
  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="hidden xl:flex flex-row rounded-full w-[512px] bg-black-light-50 border border-solid border-black-1000 h-15 pl-6 pr-8 py-0.5 items-center gap-2">
      <Image
        src={"/assets/img/search-primary.svg"}
        width={24}
        height={24}
        alt=""
      />
      <input
        className="bg-transparent w-full text-white focus:outline-none"
        placeholder="Search here..."
        value={keyword}
        onChange={handleChangeKeyword}
      ></input>
    </div>
  );
};

export default SearchInput;
