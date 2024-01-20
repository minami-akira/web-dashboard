import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { USER_INFO } from "@/mock/mock";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <div className="flex flex-row gap-5 items-center">
          <Image
            width={60}
            height={60}
            src={"/assets/img/user_01.png"}
            alt="User"
          />
					<div className="flex flex-col gap-1 items-center">
						<div className="flex flex-row w-full justify-between gap-4">
							<span className="text-white text-paragraph2 hidden lg:block">{USER_INFO.name}</span>
							<Image src={"/assets/img/arrow-down.svg"} width={16} height={16} alt="" className="hidden lg:block"/>
						</div>
						<div className="w-full text-black-300 hidden lg:block">{USER_INFO.role}</div>
					</div>
        </div>
      </Link>
    </div>
  );
};

export default DropdownUser;
