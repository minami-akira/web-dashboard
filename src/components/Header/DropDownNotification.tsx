
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

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
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        className="flex h-15 w-15 items-center justify-center rounded-full bg-[#fffaf1] bg-opacity-10"
        href="#"
      >
        <div>
          <Image
            src={"/assets/img/clarity_notification-line.svg"}
            width={30}
            height={30}
            alt=""
          />
          <div className="bg-primary-base rounded-full w-[6.5px] h-[6.5px] absolute right-[15px] top-[11px] animate-pulse"></div>
        </div>
      </Link>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border-white border border-opacity-20 bg-[#0C0A1B] text-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div>
          <div className="text-xs font-semibold text-white  uppercase pt-1.5 pb-2 px-4">
            Notification
          </div>
          <ul>
            <li className="border-b border-white border-opacity-20 last:border-0">
              <Link className="block py-2 px-4 hover:bg-[#1a1a1d]" href="/#0">
                <span className="block text-sm mb-2">
                  📣{" "}
                  <span className="font-medium text-white">
                    Edit your information in a swipe
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </span>
                <span className="block text-xs font-medium text-slate-400">
                  Feb 12, 2021
                </span>
              </Link>
            </li>
            <li className="border-b border-white border-opacity-20  last:border-0">
              <Link className="block py-2 px-4 hover:bg-[#1a1a1d]" href="/#0">
                <span className="block text-sm mb-2">
                  📣{" "}
                  <span className="font-medium text-white">
                    Edit your information in a swipe
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </span>
                <span className="block text-xs font-medium text-slate-400">
                  Feb 9, 2021
                </span>
              </Link>
            </li>
            <li className="border-b border-white border-opacity-20  last:border-0">
              <Link className="block py-2 px-4 hover:bg-[#1a1a1d]" href="/#0">
                <span className="block text-sm mb-2">
                  🚀
                  <span className="font-medium text-white">
                    Say goodbye to paper receipts!
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </span>
                <span className="block text-xs font-medium text-slate-400">
                  Jan 24, 2020
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownNotification;

