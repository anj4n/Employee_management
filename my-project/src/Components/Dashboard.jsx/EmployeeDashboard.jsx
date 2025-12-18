import React from "react";
import Header from "../ExtraComponents/Header";
import TaskListNo from "../ExtraComponents/TaskListNo";
import TaskList from "../ExtraComponents/TaskList";

const EmployeeDashboard = () => {
  return (
    <div>
      <Header />
      <TaskListNo />
      <TaskList/>
    </div>
  );
};

export default EmployeeDashboard;
