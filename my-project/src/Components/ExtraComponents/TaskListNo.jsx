import React from "react";

const TaskListNo = ({data}) => {
  return (
    <div className="flex justify-between gap-10 w-scren  mt-20 m-10 ">
      <div className="bg-indigo-100 h-40 w-[45%] rounded-xl p-7 text-black">
        <h1 className="text-3xl flex mt-3 ml-5 font-semibold">{data.taskCounts.newTask}</h1>
        <h1 className="text-3xl mt-2  ml-5 font-semibold">New Task</h1>
      </div>

      <div className="bg-green-500 h-40 w-[45%] rounded-xl p-7">
        <h1 className="text-3xl flex mt-3 ml-5 font-semibold ">{data.taskCounts.completed}</h1>
        <h1 className="text-3xl mt-2  ml-5 font-semibold">Task Completed</h1>
      </div>

      <div className="bg-blue-700 h-40 w-[45%]  rounded-xl  p-7">
        <h1 className="text-3xl flex mt-3 ml-5 font-semibold">{data.taskCounts.active}</h1>
        <h1 className="text-3xl mt-2  ml-5 font-semibold">Task Accepted</h1>
      </div>
      <div className="bg-red-500 h-40 w-[45%]  rounded-xl  p-7">
        <h1 className="text-3xl flex mt-3 ml-5 font-semibold">{data.taskCounts.failed}</h1>
        <h1 className="text-3xl mt-2  ml-5 font-semibold">Task Failed</h1>
      </div>
    </div>
  );
};

export default TaskListNo;
