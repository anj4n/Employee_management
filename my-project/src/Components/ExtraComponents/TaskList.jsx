import React from "react";
import AcceptTask from "../Tasks/AcceptTask";
import CompletedTask from "../Tasks/CompletedTask";
import FailedTask from "../Tasks/FailedTask";
import NewTask from "../Tasks/NewTask";

const TaskList = ({ data }) => {
  console.log({ data });
  return (
    <div
      id="tasklist"
      className="   mt-10 mx-10  flex justify-start gap-5 items-center  overflow-x-auto flex-nowrap py-5 "
    >
      {data.tasks.map((task, id) => {
        if (task.active) {
          return <AcceptTask key={id} />;
        }
        if (task.completed) {
          return <CompletedTask key={id} />;
        }
        if (task.failed) {
          return <FailedTask key={id} />;
        }
        if (task.newTask) {
          return <NewTask key={id} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
