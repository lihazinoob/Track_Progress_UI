import React from "react";
import { X } from "lucide-react";
import { TrendingDown } from "lucide-react";
import { UserSearch ,User,CalendarDays } from "lucide-react";
const ViewTaskPopUp = ({ task, onClose }) => {
    const getStatusBadge = (status) => (
        <span className={`rounded-full px-2 py-1 text-xs ${status ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
            {status ? "Completed" : "Pending"}
        </span>
    );
    if (!task) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50">
            <div className="mt-28 flex items-start justify-center">
                <div className="w-[90%] max-w-md rounded-lg bg-white p-5 shadow-lg dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Task Details</h2>
                        <X
                            className="cursor-pointer"
                            onClick={onClose}
                        />
                    </div>
                    <hr className="my-3" />
                    <div className="flex gap-4 mt-2">
                        <div className="flex gap-2">
                            <TrendingDown size={22} />
                            <span className="font-semibold">Status:</span>
                        </div>

                        {getStatusBadge(task.status)}
                        {/* <strong>Title:</strong> {task.title} */}
                    </div>
                    <div className="flex gap-4 mt-2">
                        <div className="flex gap-2">
                            <UserSearch size={22} />
                            <span className="font-semibold">Assigned By:</span>
                        </div>

                        {task.assigned_by}
                        {/* <strong>Title:</strong> {task.title} */}
                    </div>
                    <div className="flex gap-4 mt-2">
                        <div className="flex gap-2">
                            <User size={22} />
                            <span className="font-semibold">Assigned To:</span>
                        </div>

                        {task.assigned_to}
                        {/* <strong>Title:</strong> {task.title} */}
                    </div>
                    <div className="flex gap-4 mt-2">
                        <div className="flex gap-2">
                            <UserSearch size={22} />
                            <span className="font-semibold">Description:</span>
                        </div>

                        {task.description}
                        {/* <strong>Title:</strong> {task.title} */}
                    </div>
                    <div className="flex gap-4 mt-2">
                        <div className="flex gap-2">
                            <CalendarDays size={22} />
                            <span className="font-semibold">Due Date:</span>
                        </div>

                        {task.due_date}
                        {/* <strong>Title:</strong> {task.title} */}
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default ViewTaskPopUp;
