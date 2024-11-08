import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block h-[100vh] w-[300px]">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[1140px] overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;