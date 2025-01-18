import React from "react";
import { Plus } from "lucide-react";
import cn from "../../../utils/cn";
import PopUpToDo from "./popUpToDo";


const ToDo = () => {

  const [isPopUpOpen,setIsPopUpOpen] = React.useState(false);

  // To open the pop up we implement the following function

  const openPopUp = () =>
  {
    setIsPopUpOpen(true);
  }

  const closePopUp = ()=>
  {
    setIsPopUpOpen(false);
  }

  const handleSaveTask = (todoInfo)=>
  {

    // console.log("Task is Saved, ",todoInfo);
    closePopUp();
  }



    return (
        <div>
            <div className={cn("rounded-lg bg-slate-100 px-4 py-2 shadow-md transition-colors dark:bg-slate-900")}>
                <div className="flex flex-col">
                    <div className="mb-2 flex flex-row items-center justify-between gap-5">
                        <div className="px-4 text-2xl">TO DO LIST</div>
                        <div className={cn(" text-sm cursor-pointer flex flex-row items-center gap-3 rounded-xl bg-slate-200 px-4 py-2 dark:bg-slate-950")}
                        onClick={openPopUp}
                        >
                            New Task
                            <div className="rounded-full p-0.5 dark:bg-slate-800">
                                <Plus size={20} />
                            </div>
                        </div>
                    </div>

                    <hr className="w-full border-slate-900 py-2 dark:border-slate-100" />

                    {/* Render the Pop Up component */}

                    <PopUpToDo isOpen = {isPopUpOpen} onClose = {closePopUp} onSave={handleSaveTask}/>
                </div>
            </div>
        </div>
    );
};

export default ToDo;
