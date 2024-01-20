import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./FilterDropdown.module.css";

interface FilterDropdownProps {
  iconURL: string;
  title: string;
  filterItems: string[];
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  iconURL,
  title,
  filterItems,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCheckboxChange = (item: string) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [item]: !prevCheckedItems[item],
    }));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="rounded-sm border-white border border-opacity-20 px-4 py-2.5 bg-white bg-opacity-10 text-[15px] text-white flex items-center w-[120px] justify-between"
        type="button"
        onClick={toggleDropdown}
      >
        {title}
        <Image src={iconURL} alt="filter icon" width={24} height={24} />
      </button>
      <div
        id="dropdown"
        className={`z-10 ${
          dropdownOpen ? "block" : "hidden"
        } rounded-[10px] p-5 bg-black-light-50 absolute top-14 border-white border border-opacity-20 min-w-52`}
      >
        <div className="flex justify-between items-center text-white gap-12">
          <h6 className="text-base font-medium">Filter By</h6>
          <div
            onClick={toggleDropdown}
            className="text-[#A0A4AD] text-xs cursor-pointer"
          >
            Close
          </div>
        </div>
        <hr className="mt-[10px] mb-5 border-opacity-20 border-white" />
        <ul
          className="space-y-2 text-sm text-white"
          aria-labelledby="dropdownDefault"
        >
          {filterItems.length &&
            filterItems.map((item, idx) => (
              <li className="flex items-center" key={idx}>
                <label className={`${styles.container}`}>
                  {item}
                  <input
                    type="checkbox"
                    checked={checkedItems[item] || false}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  <span className={`${styles.checkmark}`} />
                </label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterDropdown;
