import React from "react";
import Image from "next/image";

interface IconButtonProps {
  icon: string;
  title: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, title }) => {
  return (
    <button className="px-4 py-2.5 flex flex-row items-center gap-2 border border-solid border-blue-sky rounded-lg">
      <Image src={icon} alt={icon} width={16} height={16} />
      <p className="text-sm font-medium leading-5 text-white">{title}</p>
    </button>
  );
};

export default IconButton;
