import React from "react";
import { X } from "lucide-react";

const ViewTaskPopUp = ({ task, onClose }) => {
    if (!task) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-[90%] max-w-md bg-white p-5 rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Task Details</h2>
                    <X className="cursor-pointer" onClick={onClose} />
                </div>
                <hr className="my-3" />
                <p><strong>Title:</strong> {task.title}</p>
                <p><strong>Assigned By:</strong> {task.assigned_by}</p>
                <p><strong>Assigned To:</strong> {task.assigned_to}</p>
                <p><strong>Description:</strong> {task.description || "-"}</p>
                <p><strong>Due Date:</strong> {task.due_date}</p>
                <p><strong>Status:</strong> {task.status ? "Completed" : "Pending"}</p>
                <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ViewTaskPopUp;
