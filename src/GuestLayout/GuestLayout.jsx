import React from "react";
import { useUserInfoContext } from "../context/user_info_context";
import { Navigate, Outlet } from "react-router-dom";

const GuestLayout = () => {
    const { token } = useUserInfoContext();
    if (token) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <>
            
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default GuestLayout;
