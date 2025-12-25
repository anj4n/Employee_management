import React from "react";
import Header from "../ExtraComponents/Header";
import TaskListNo from "../ExtraComponents/TaskListNo";
import TaskList from "../ExtraComponents/TaskList";

const EmployeeDashboard = ({data}) => {
  return (
    <div>
      <Header data={data} />
      <TaskListNo data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
