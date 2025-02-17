import React, { useRef, useState, useEffect } from "react";
import SideBar from "../Layouts/sidebar.jsx";
import Header from "../Layouts/Header.jsx";
import {  Outlet } from "react-router-dom";
import cn from "../utils/cn.js";
import axiosClient from "../axios_client.js";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useUserInfoContext } from "../context/user_info_context.jsx";

const DashBoardLayout = () => {
    const isDesktopDevice = useMediaQuery("(min-width: 768px)");
    const [collapsed, setCollapsed] = useState(!isDesktopDevice);
    const {user,token,setUser,setToken} = useUserInfoContext();
    const sidebarRef = useRef(null);

    // logout function implemented here
    const handleLogOutFunctionality = () => {
        
        axiosClient
            .post(
                "/logout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            .then((res) => {
                console.log("response is" ,res);
                setUser(null);
                setToken(null);
                localStorage.removeItem("token");
                window.location.href = "/landing";
                
            })
            .catch((error) => {
                console.error(error.response?.data);
            });
    };

    // Automatically handle collapsing in mobile view
    useEffect(() => {
        setCollapsed(!isDesktopDevice);
    }, [isDesktopDevice]);

    return (
        <div className="min-h-screen bg-slate-100 font-montserrat transition-colors dark:bg-slate-950">
            <SideBar
                ref={sidebarRef}
                collapsed={collapsed}
                handlelogout={handleLogOutFunctionality}
            />
            <div className={cn("transition-[margin] duration-300", collapsed ? "ml-[70px]" : "ml-[240px]")}>
                <Header
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    // isDesktopDevice = {isDesktopDevice}
                />
                <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6 text-slate-900 transition-colors dark:text-slate-50">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;
