import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuIconProp {
  imgURL: string,
  width: number,
  height: number,
  url?: string,
  onClick?: () => void,
}

const MenuIcon = (props: MenuIconProp) => {
  const path = usePathname();
  
  return (
    <Link href={props.url ?? ""}>
      <div className={`w-15 h-15 flex items-center justify-center rounded-full bg-white ${ props.url == path ? "bg-opacity-10" : "opacity-50 bg-opacity-0 hover:bg-opacity-10" }`}>
        <Image src={props.imgURL} alt="menu" width={props.width} height={props.height} />
      </div>
    </Link>
  )
}

export default MenuIcon;