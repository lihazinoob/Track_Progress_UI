import React from "react";
import { X } from "lucide-react";
import { TrendingDown } from "lucide-react";
import { UserSearch ,User,CalendarDays } from "lucide-react";
const ViewTaskPopUp = ({ task, onClose }) => {
    // State to save which tab is active
    const [activeTab,setActiveTab] = React.useState("description");

    // Function to get the Status Badge
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
                            <CalendarDays size={22} />
                            <span className="font-semibold">Due Date:</span>
                        </div>

                        {task.due_date}
                        {/* <strong>Title:</strong> {task.title} */}
                    </div>

                    {/* Tabs Section */}
                    <div className="mt-4">
                        <div className="flex border-b">
                            <button 
                                className={`w-1/2 py-2 ${activeTab === "description" ? "border-b-2 dark:border-slate-300 border-slate-700 dark:text-amber-50 text-slate-700 font-semibold" : "text-gray-600"}`}
                                onClick={() => setActiveTab("description")}
                            >
                                Description
                            </button>
                            <button 
                                className={`w-1/2 py-2 ${activeTab === "subtasks" ? "border-b-2 border-slate-300 text-amber-50 font-semibold" : "text-gray-600"}`}
                                onClick={() => setActiveTab("subtasks")}
                            >
                                Subtasks
                            </button>
                        </div>

                        {/* Content Based on Active Tab */}
                        <div className="mt-4">
                            {activeTab === "description" ? (
                                <p className="text-gray-700 dark:text-gray-300">{task.description || "No description available."}</p>
                            ) : (
                                <ul className="list-disc pl-5">
                                    {task.subtasks && task.subtasks.length > 0 ? (
                                        task.subtasks.map((subtask, index) => (
                                            <li key={index} className="text-gray-700 dark:text-gray-300">{subtask}</li>
                                        ))
                                    ) : (
                                        <p className="text-gray-500">No subtasks available.</p>
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>


                    
                </div>
            </div>
        </div>
    );
};

export default ViewTaskPopUp;
