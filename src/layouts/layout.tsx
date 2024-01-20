import { ReactNode, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);

  return (
    <div className="flex flex-row bg-black-light-base ">
      <div className={`md:block ${ isMobileSidebar ? "block" : "hidden" }`}>
        <Sidebar sidebarOpen={isMobileSidebar} setShowMobileSideBar={() => setIsMobileSidebar(false)} />
      </div>
      <div className="w-full h-screen overflow-auto">
        <div className="w-full max-w-[1440px] mx-auto">
          <Header setShowMobileMenu={() => setIsMobileSidebar(!isMobileSidebar)} />
          <main className="mx-auto p-2 md:p-8 mt-5 md:mt-0">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
