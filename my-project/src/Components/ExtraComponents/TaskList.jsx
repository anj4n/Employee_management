import React from "react";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="   mt-10 mx-10  flex justify-start gap-5 items-center  overflow-x-auto flex-nowrap py-5 "
    >
      <div className="bg-gray-900 h-full w-[400px] flex flex-col shrink-0 rounded-3xl p-5  items-start ">
        <div className="flex justify-between items-center w-full m-3">
          <h2 className="bg-red-600 text-xl w-20 rounded-xl flex justify-center items-center ">
            High
          </h2>
          <h3 className="text-xl ">18 december 2025</h3>
        </div>

        <h2 className="font-semibold text-3xl mt-5">{data.tasks.taskTitle}</h2>
        <p className="mt-5 text-sm wrap-break-word ">{data.tasks.taskDescription}
         
        </p>
      </div>

      <div className="bg-gray-900 h-full w-[400px] flex flex-col shrink-0 rounded-3xl p-5  items-start ">
        <div className="flex justify-between items-center w-full m-3">
          <h2 className="bg-red-600 text-xl w-20 rounded-xl flex justify-center items-center ">
            High
          </h2>
          <h3 className="text-xl ">18 december 2025</h3>
        </div>

        <h2 className="font-semibold text-3xl mt-5">Complete the project</h2>
        <p className="mt-5 text-sm wrap-break-word ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          accusamus omnis, recusandae praesentium perferendis velit harum iusto
          quis animi neque et cupiditate eveniet dolores officiis nemo debitis
          non molestias soluta fugiat alias nisi obcaecati! Aut accusantium est
          dolorem? Iure, architecto id? Iure quae minima provident ab ipsa
          voluptatibus animi natus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo sequi unde eum. Est cupiditate reiciendis minus
          quae magnam illo corporis possimus. Consequatur adipisci quidem
          facilis Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Inventore, ipsa Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Architecto reprehenderit Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Explicabo architecto accusamus, accusantium mollitia
          eos laudantium voluptatum possimus delectus quo impedit.{" "}
        </p>
      </div>

      <div className="bg-gray-900 h-full w-[400px] flex flex-col shrink-0 rounded-3xl p-5  items-start ">
        <div className="flex justify-between items-center w-full m-3">
          <h2 className="bg-red-600 text-xl w-20 rounded-xl flex justify-center items-center ">
            High
          </h2>
          <h3 className="text-xl ">18 december 2025</h3>
        </div>

        <h2 className="font-semibold text-3xl mt-5">Complete the project</h2>
        <p className="mt-5 text-sm wrap-break-word ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          accusamus omnis, recusandae praesentium perferendis velit harum iusto
          quis animi neque et cupiditate eveniet dolores officiis nemo debitis
          non molestias soluta fugiat alias nisi obcaecati! Aut accusantium est
          dolorem? Iure, architecto id? Iure quae minima provident ab ipsa
          voluptatibus animi natus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo sequi unde eum. Est cupiditate reiciendis minus
          quae magnam illo corporis possimus. Consequatur adipisci quidem
          facilis Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Inventore, ipsa Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Architecto reprehenderit Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Explicabo architecto accusamus, accusantium mollitia
          eos laudantium voluptatum possimus delectus quo impedit.{" "}
        </p>
      </div>

      <div className="bg-gray-900 h-full w-[400px] flex flex-col shrink-0 rounded-3xl p-5  items-start ">
        <div className="flex justify-between items-center w-full m-3">
          <h2 className="bg-red-600 text-xl w-20 rounded-xl flex justify-center items-center ">
            High
          </h2>
          <h3 className="text-xl ">18 december 2025</h3>
        </div>

        <h2 className="font-semibold text-3xl mt-5">Complete the project</h2>
        <p className="mt-5 text-sm wrap-break-word ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          accusamus omnis, recusandae praesentium perferendis velit harum iusto
          quis animi neque et cupiditate eveniet dolores officiis nemo debitis
          non molestias soluta fugiat alias nisi obcaecati! Aut accusantium est
          dolorem? Iure, architecto id? Iure quae minima provident ab ipsa
          voluptatibus animi natus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo sequi unde eum. Est cupiditate reiciendis minus
          quae magnam illo corporis possimus. Consequatur adipisci quidem
          facilis Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Inventore, ipsa Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Architecto reprehenderit Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Explicabo architecto accusamus, accusantium mollitia
          eos laudantium voluptatum possimus delectus quo impedit.{" "}
        </p>
      </div>
      <div className="bg-gray-900 h-full w-[400px] flex flex-col shrink-0 rounded-3xl p-5  items-start ">
        <div className="flex justify-between items-center w-full m-3">
          <h2 className="bg-red-600 text-xl w-20 rounded-xl flex justify-center items-center ">
            High
          </h2>
          <h3 className="text-xl ">18 december 2025</h3>
        </div>

        <h2 className="font-semibold text-3xl mt-5">Complete the project</h2>
        <p className="mt-5 text-sm wrap-break-word ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          accusamus omnis, recusandae praesentium perferendis velit harum iusto
          quis animi neque et cupiditate eveniet dolores officiis nemo debitis
          non molestias soluta fugiat alias nisi obcaecati! Aut accusantium est
          dolorem? Iure, architecto id? Iure quae minima provident ab ipsa
          voluptatibus animi natus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo sequi unde eum. Est cupiditate reiciendis minus
          quae magnam illo corporis possimus. Consequatur adipisci quidem
          facilis Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Inventore, ipsa Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Architecto reprehenderit Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Explicabo architecto accusamus, accusantium mollitia
          eos laudantium voluptatum possimus delectus quo impedit.{" "}
        </p>
      </div>
    </div>
  );
};

export default TaskList;
