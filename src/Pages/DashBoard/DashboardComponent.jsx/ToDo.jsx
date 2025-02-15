import React from "react";
import { Plus } from "lucide-react";
import cn from "../../../utils/cn";
import PopUpToDo from "./popUpToDo";

const ToDo = () => {
    const tasks = [
        {
            id: 1,
            assigned_by: "Manager",
            assigned_by_image: "https://via.placeholder.com/40",
            assigned_to: "Developer",
            assigned_to_image: "https://via.placeholder.com/40",
            title: "Implement Auth",
            description: "Create authentication system",
            due_date: "2024-02-15",
            status: false,
        },
        {
            id: 2,
            assigned_by: "CTO",
            assigned_by_image: "https://via.placeholder.com/40",
            assigned_to: "Designer",
            assigned_to_image: "https://via.placeholder.com/40",
            title: "Redesign Dashboard",
            description: "Update dashboard UI/UX",
            due_date: "2024-03-01",
            status: true,
        },
        {
            id: 3,
            assigned_by: "Team Lead",
            assigned_by_image: "https://via.placeholder.com/40",
            assigned_to: "QA Engineer",
            assigned_to_image: "https://via.placeholder.com/40",
            title: "Test New Features",
            description: "Perform end-to-end testing",
            due_date: "2024-02-20",
            status: false,
        },
    ];

    const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);

    const openPopUp = () => setIsPopUpOpen(true);
    const closePopUp = () => setIsPopUpOpen(false);

    const handleSaveTask = (todoInfo) => {
        closePopUp();
    };

    const getStatusBadge = (status) => (
        <span className={`rounded-full px-2 py-1 text-xs ${status ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
            {status ? "Completed" : "Pending"}
        </span>
    );

    return (
        <div className="p-4 sm:p-6">
            <div className="rounded-lg bg-slate-100 px-4 py-2 shadow-md transition-colors dark:bg-slate-900">
                <div className="flex flex-col">
                    {/* Header */}
                    <div className="mb-2 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5">
                        <div className="text-xl sm:text-2xl">TO DO LIST</div>
                        <div
                            className="flex flex-row sm:flex-row items-center gap-3 cursor-pointer rounded-xl bg-slate-200 px-4 py-2 text-sm dark:bg-slate-950"
                            onClick={openPopUp}
                        >
                            <span>New Task</span>
                            <div className="rounded-full p-0.5 dark:bg-slate-800">
                                <Plus size={20} />
                            </div>
                        </div>
                    </div>

                    <hr className="w-full border-slate-900 py-2 dark:border-slate-100" />

                    {/* Table (Hidden on Small Screens) */}
                    <div className="overflow-x-auto hidden sm:block">
                        <table className="w-full min-w-[600px]">
                            <thead>
                                <tr className="border-b text-left dark:border-slate-700">
                                    <th className="px-1 py-1 sm:px-4 sm:py-3">Assigned By</th>
                                    <th className="px-1 py-1 sm:px-4 sm:py-3">Assigned To</th>
                                    <th className="px-1 py-1 sm:px-4 sm:py-3">Title</th>
                                    <th className="px-1 py-1 sm:px-4 sm:py-3">Description</th>
                                    <th className="px-1 py-1 sm:px-4 sm:py-3">Due Date</th>
                                    <th className="px-1 py-1 sm:px-4 sm:py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.id} className="border-b hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
                                        <td className="px-1 py-1 sm:px-4 sm:py-3">
                                            <div className="flex items-center gap-2">
                                                <img src={task.assigned_by_image} alt={task.assigned_by} className="h-6 w-6 rounded-full sm:h-8 sm:w-8" />
                                                <span className="text-sm sm:text-base">{task.assigned_by}</span>
                                            </div>
                                        </td>
                                        <td className="px-1 py-1 sm:px-4 sm:py-3">
                                            <div className="flex items-center gap-2">
                                                <img src={task.assigned_to_image} alt={task.assigned_to} className="h-6 w-6 rounded-full sm:h-8 sm:w-8" />
                                                <span className="text-sm sm:text-base">{task.assigned_to}</span>
                                            </div>
                                        </td>
                                        <td className="px-1 py-1 font-medium sm:px-4 sm:py-3">
                                            <span className="text-sm sm:text-base">{task.title}</span>
                                        </td>
                                        <td className="px-1 py-1 text-slate-600 dark:text-slate-400 sm:px-4 sm:py-3">
                                            <span className="text-sm sm:text-base">{task.description || "-"}</span>
                                        </td>
                                        <td className="px-1 py-1 sm:px-4 sm:py-3">
                                            <span className="text-sm sm:text-base">{task.due_date}</span>
                                        </td>
                                        <td className="px-1 py-1 sm:px-4 sm:py-3">{getStatusBadge(task.status)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Stacked Layout for Mobile */}
                    <div className="block sm:hidden">
                        {tasks.map((task) => (
                            <div key={task.id} className="border rounded-lg py-4 mb-2 bg-white shadow-sm dark:bg-slate-800">
                                <div className="flex items-center gap-2 mb-2">
                                    <img src={task.assigned_by_image} alt={task.assigned_by} className="h-6 w-6 rounded-full" />
                                    <span className="text-sm font-medium">{task.assigned_by}</span>
                                    <span className="text-xs text-gray-500">→</span>
                                    <img src={task.assigned_to_image} alt={task.assigned_to} className="h-6 w-6 rounded-full" />
                                    <span className="text-sm font-medium">{task.assigned_to}</span>
                                </div>
                                <p className="text-sm font-semibold">{task.title}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{task.description || "-"}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xs text-gray-500">Due: {task.due_date}</span>
                                    {getStatusBadge(task.status)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <PopUpToDo isOpen={isPopUpOpen} onClose={closePopUp} onSave={handleSaveTask} />
                </div>
            </div>
        </div>
    );
};

export default ToDo;
