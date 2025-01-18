import React from "react";
import cn from "../../../utils/cn";
import { ClipboardList } from "lucide-react";

const TaskCard = () => {
    return (
        <div className="flex flex-row items-center gap-5 justify-between">
            <div className={cn("flex-1 rounded-lg bg-white px-4 py-4 shadow-md transition-colors dark:bg-slate-900")}>
                <ClipboardList size={30} />
                <hr className={cn("my-2")} />
                <div className="flex flex-col">
                    <div className={cn("my-4 items-center text-3xl font-bold tracking-widest")}>100</div>
                    <div>TOTAL ASSIGNED TASK</div>
                </div>
            </div>
            <div className={cn("flex-1 rounded-lg bg-white px-4 py-4 shadow-md transition-colors dark:bg-slate-900")}>
                <ClipboardList size={30} />
                <hr className={cn("my-2")} />
                <div className="flex flex-col">
                    <div className={cn("my-4 items-center text-3xl font-bold tracking-widest")}>100</div>
                    <div>TOTAL ASSIGNED TASK</div>
                </div>
            </div>
            <div className={cn("flex-1 rounded-lg bg-white px-4 py-4 shadow-md transition-colors dark:bg-slate-900")}>
                <ClipboardList size={30} />
                <hr className={cn("my-2")} />
                <div className="flex flex-col">
                    <div className={cn("my-4 items-center text-3xl font-bold tracking-widest")}>100</div>
                    <div>TOTAL ASSIGNED TASK</div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
