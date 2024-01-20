import React from "react";
import Image from "next/image";

interface HoldCardProp {
  bgColor: string;
  iconBg: string;
  value: number;
  desc: string;
  imgURL: string;
}

const HoldCard = (props: HoldCardProp) => {
  return (
    <div
      className={`w-full p-4 flex flex-col gap-4 rounded-2xl text-white ${props.bgColor}`}
    >
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full ${props.iconBg}`}
      >
        <Image src={props.imgURL} alt="hold" width={24} height={24} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-semibold leading-8">{props.value}</p>
        <p className="text-sm font-medium text-black-300 break-words">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default HoldCard;
