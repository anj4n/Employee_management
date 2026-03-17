import React from "react";
import Header from "../ExtraComponents/Header";
import TaskListNo from "../ExtraComponents/TaskListNo";
import TaskList from "../ExtraComponents/TaskList";

const EmployeeDashboard = ({data,changeUser}) => {
  return (
    <div>
      <Header data={data} changeUser={changeUser} />
      <TaskListNo data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
