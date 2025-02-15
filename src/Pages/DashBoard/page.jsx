import React from "react";
import ToDo from "./DashboardComponent.jsx/ToDo";
import TaskCard from "./DashboardComponent.jsx/taskCard";
const DashBoardPage = () => {
    return (
        <div className="flex flex-row gap-10">
            <div className="flex-1">
                <ToDo />
            </div>
            
        </div>
    );
};

export default DashBoardPage;
