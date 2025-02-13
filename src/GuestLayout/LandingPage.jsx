import React from "react";
import TopMenuBar from "../Layouts/LandingPage/TopMenuBar";
import LandingPageBody from "../Layouts/LandingPage/LandingPageBody";
import cn from "../utils/cn";
const LandingPage = () => {
    return (
        <>
            <div className="min-h-screen  transition-colors bg-slate-100 dark:bg-slate-950">
                <div className="mx-12 ">
                    <TopMenuBar />
                </div>
                <div className={cn("mx-12 my-12 rounded-lg  text-center")}>
                    <LandingPageBody />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
