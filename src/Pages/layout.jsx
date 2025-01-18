import React, { useRef, useState, useEffect } from "react";
import SideBar from "../Layouts/sidebar.jsx";
import Header from "../Layouts/Header.jsx";
import { Outlet } from "react-router-dom";
import cn from "../utils/cn.js";
import { useMediaQuery } from "@uidotdev/usehooks";

const Layout = () => {
  const isDesktopDevice = useMediaQuery("(min-width: 768px)");
  const [collapsed, setCollapsed] = useState(!isDesktopDevice);

  const sidebarRef = useRef(null);

  // Automatically handle collapsing in mobile view
  useEffect(() => {
    setCollapsed(!isDesktopDevice);
  }, [isDesktopDevice]);

  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
      
      
      <SideBar
        ref={sidebarRef}
        collapsed={collapsed}
        
      />
      <div
        className={cn(
          "transition-[margin] duration-300",
          collapsed ? "ml-[70px]" : "ml-[240px]"
        )}
      >
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          // isDesktopDevice = {isDesktopDevice}
        />
        <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6  text-slate-900 transition-colors dark:text-slate-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
