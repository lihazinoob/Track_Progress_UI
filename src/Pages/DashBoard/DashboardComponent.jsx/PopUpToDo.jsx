import React from "react";

const PopUpToDo = ({ isOpen, onClose ,onSave }) => {
    // Using useRef hook so that the input info is collected without unnecessary rerender
    const todoNameRef = React.useRef("");
    const todoDateRef = React.useRef("");

    if (!isOpen) {
        return null;
    }

    const handleSave = () =>
    {
      if(!todoNameRef.current.value || !todoDateRef.current.value)
      {
        alert("You must specify task name and task date");
        return;

      }
      onSave(
        {
          todo_name:todoNameRef.current.value,
          todo_date:todoDateRef.current.value
        }
      );

    }


    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                <div className="w-1/3 translate-y-[-30%] rounded-lg bg-white p-6 shadow-lg dark:bg-slate-900">
                    <h2 className="mb-4 text-xl font-semibold">Add New Task</h2>

                    {/* Input Field for task name */}
                    <div className="mb-4">
                        <label className="mb-2 block font-medium">Task Name</label>
                        <input
                            ref={todoNameRef}
                            type="text"
                            placeholder="Enter task name"
                            className="w-full rounded-lg border px-3 py-2 dark:bg-slate-600"
                        />
                    </div>

                    {/* Input Field for task date */}

                    <div className="mb-4">
                        <label className="mb-2 block font-medium">Task Date</label>
                        <input
                            ref={todoDateRef}
                            type="date"
                            className="w-full rounded-lg border px-3 py-2 dark:bg-slate-600"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-2">
                        {/* Button for cancelling */}
                        <button
                            onClick={onClose}
                            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                        >
                            Cancel
                        </button>

                        {/* Button for Saving */}
                        <button
                            onClick={handleSave}
                            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUpToDo;
