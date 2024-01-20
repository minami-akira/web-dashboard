import Image from "next/image";
import React from "react";
import HoldCard from "./HoldCard";

const Overview = () => {
  return (
    <div className="w-full h-full px-7.5 pt-7.5 md:pb-0 pb-7.5 text-white rounded-[20px] bg-black-light-100">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="text-xl leading-8 font-semibold">Holds Overview</p>
          <p className="text-base font-normal text-black-300">Holds Summery</p>
        </div>
        <button className="px-4 py-3 flex flex-row items-center gap-2 border border-solid border-blue-sky rounded-lg">
          <Image
            src="/assets/img/export.svg"
            alt="export"
            width={16}
            height={16}
          />
          <p className="text-sm font-medium leading-5 text-white">Export</p>
        </button>
      </div>
      <div className="mt-7.5 w-full grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2">
        <HoldCard
          bgColor="bg-secondary bg-opacity-10"
          iconBg="bg-secondary"
          value={343}
          desc="Number of Active Holds"
          imgURL="/assets/img/activeholds.svg"
        />
        <HoldCard
          bgColor="bg-primary-base bg-opacity-10"
          iconBg="bg-primary-base"
          value={300}
          desc="Number of Active Custodians"
          imgURL="/assets/img/activecustodians.svg"
        />
        <HoldCard
          bgColor="bg-secondary bg-opacity-10"
          iconBg="bg-yellow-green"
          value={5}
          desc="Acknowledgement Rate"
          imgURL="/assets/img/acknowrate.svg"
        />
        <HoldCard
          bgColor="bg-deep-violet bg-opacity-10"
          iconBg="bg-deep-violet"
          value={8}
          desc="Number of assets with preservation"
          imgURL="/assets/img/assetsnumber.svg"
        />
        <HoldCard
          bgColor="bg-deep-navy bg-opacity-10"
          iconBg="bg-deep-navy"
          value={8}
          desc="Number of assets"
          imgURL="/assets/img/assetsnumber.svg"
        />
      </div>
    </div>
  );
};

export default Overview;
