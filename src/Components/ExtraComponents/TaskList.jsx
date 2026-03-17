import React from "react";
import AcceptTask from "../Tasks/AcceptTask";
import CompletedTask from "../Tasks/CompletedTask";
import FailedTask from "../Tasks/FailedTask";
import NewTask from "../Tasks/NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="   mt-10 mx-10  flex justify-start gap-5 items-center  overflow-x-auto flex-nowrap py-5 "
    >
      {data.tasks.map((task, index) => {
        const key = task.id || index;
        if (task.active) {
          return <AcceptTask key={key} data={task} />;
        }
        if (task.completed) {
          return <CompletedTask key={key} data={task} />;
        }
        if (task.failed) {
          return <FailedTask key={key} data={task} />;
        }
        if (task.newTask) {
          return <NewTask key={key} data={task} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
