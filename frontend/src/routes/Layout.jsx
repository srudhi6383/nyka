import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex flex-row bg-secondary h-screen w-screen overflow-hidden">
      <Sidebar />

      <div className="px-6 py-3 w-full overflow-scroll bg-gray-100">
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
