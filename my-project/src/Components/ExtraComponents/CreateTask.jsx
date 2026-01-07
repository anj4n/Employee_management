import React, { useState } from "react";






const CreateTask = () => { 
 const [taskTitle, setTaskTitle] = useState('');
 const [taskDescription, setTaskDescription] = useState('')
 const [taskdate, setTaskDate] = useState('')
 const [assignTo, setAssignTo] = useState('')
 const [taskCategory, setTaskCategory] = useState('')


  const submithandler = (e)=>{
  e.preventDefault();
  console.log("done");
  

}





  return (
    <div className="bg-black">
      <div className="bg-neutral-900  m-10    p-7 pb-20 ">
        <form onSubmit={(e)=>{submithandler(e)}} className="flex gap-7 mr-10 ">
          <div className="flex-1 flex flex-col   ">
            <h1 onChange={(e)=>{setTaskTitle(e.target.value)}} value={taskTitle} className="text-xl m-3  ">Task Title</h1>
            <input
              type="text"
              className="border-2 border-white rounded-xl p-2 w-[80%]  outline-black"
              placeholder=" Enter the Title"
            />

            <h1  onChange={(e)=>{setTaskDate(e.target.value)}} value={taskdate} className="text-xl m-3  ">Date</h1>
            <input
              type="date"
              className="border-2 border-white rounded-xl p-2 w-[80%]"
            />

            <h1  onChange={(e)=>{setAssignTo(e.target.value)}} value={assignTo} className="text-xl m-3  ">Assign to</h1>
            <input
              type="text"
              className="border-2 border-white rounded-xl p-2 w-[80%]"
              placeholder="Employee Name"
            />

            <h1  onChange={(e)=>{setTaskCategory(e.target.value)}} value={taskCategory} className="text-xl m-3  ">Category</h1>
            <input
              type="text"
              className="border-2 border-white rounded-xl p-2 w-[80%]"
            />
          </div>

          <div className="flex-1 flex flex-col ">
            <h1  onChange={(e)=>{setTaskDescription(e.target.value)}} value={taskDescription} className="text-xl m-3  ">Description</h1>
            <textarea className="border-2 border-white rounded-xl p-2  h-72 " />
            <button className=" ml-0 bg-gray-600 p-4 rounded-2xl m-5 w-full ">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
