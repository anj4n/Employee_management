import React from "react";

const CreateTask = () => {
  return (
    <div className="bg-black">
      <div className="bg-neutral-900  m-10    p-7 pb-20 ">
        <form className="flex gap-7 mr-10 ">
          <div className="flex-1 flex flex-col   ">
            <h1 className="text-xl m-3  ">Task Title</h1>
            <input
              type="text"
              className="border-2 border-white rounded-xl p-2 w-[80%]  outline-black"
              placeholder=" Enter the Title"
            />

            <h1 className="text-xl m-3  ">Date</h1>
            <input
              type="date"
              className="border-2 border-white rounded-xl p-2 w-[80%]"
            />

            <h1 className="text-xl m-3  ">Assign to</h1>
            <input
              type="text"
              className="border-2 border-white rounded-xl p-2 w-[80%]"
              placeholder="Employee Name"
            />

            <h1 className="text-xl m-3  ">Category</h1>
            <input
              type="text"
              className="border-2 border-white rounded-xl p-2 w-[80%]"
            />
          </div>

          <div className="flex-1 flex flex-col ">
            <h1 className="text-xl m-3  ">Description</h1>
            <textarea className="border-2 border-white rounded-xl p-2  h-72 " />
            <button className="bg-gray-600 p-4 rounded-2xl m-5 ">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
