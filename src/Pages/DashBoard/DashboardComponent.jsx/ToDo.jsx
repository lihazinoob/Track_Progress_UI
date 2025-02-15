import React, { useState } from "react";
import { Plus } from "lucide-react";
import PopUpToDo from "./popUpToDo";
import ViewTaskPopUp from "./ViewTaskPopUp"; // New pop-up for viewing task details

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

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const openPopUp = () => setIsPopUpOpen(true);
    const closePopUp = () => setIsPopUpOpen(false);

    const handleSaveTask = (todoInfo) => {
        closePopUp();
    };

    const [isViewTaskOpen, setIsViewTaskOpen] = useState(false);

    const handleViewTask = (task) => {
        setSelectedTask(task);
        setIsViewTaskOpen(true);
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
                                    <th className="px-4 py-3">Assigned By</th>
                                    <th className="px-4 py-3">Assigned To</th>
                                    <th className="px-4 py-3">Title</th>
                                    <th className="px-4 py-3">Description</th>
                                    <th className="px-4 py-3">Due Date</th>
                                    <th className="px-4 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.id} className="border-b hover:bg-slate-700 dark:border-slate-800">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <img src={task.assigned_by_image} alt={task.assigned_by} className="h-8 w-8 rounded-full" />
                                                {task.assigned_by}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <img src={task.assigned_to_image} alt={task.assigned_to} className="h-8 w-8 rounded-full" />
                                                {task.assigned_to}
                                            </div>
                                        </td>
                                        <td
                                            className="px-4 py-3 font-medium  cursor-pointer "
                                            onClick={() => handleViewTask(task)}
                                        >
                                            {task.title}
                                        </td>
                                        <td className="px-4 py-3">{task.description || "-"}</td>
                                        <td className="px-4 py-3">{task.due_date}</td>
                                        <td className="px-4 py-3">{getStatusBadge(task.status)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <PopUpToDo isOpen={isPopUpOpen} onClose={closePopUp} onSave={handleSaveTask} />

                    {/* View Task Modal */}
                    {isViewTaskOpen && <ViewTaskPopUp task={selectedTask} onClose={() => setIsViewTaskOpen(false)} />}
                </div>
            </div>
        </div>
    );
};

export default ToDo;
