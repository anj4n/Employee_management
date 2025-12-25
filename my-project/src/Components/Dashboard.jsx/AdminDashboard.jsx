import React from "react";
import Header from "../ExtraComponents/Header";
import CreateTask from "../ExtraComponents/CreateTask";
import AllTasks from "../ExtraComponents/AllTasks";

const AdminDashboard = ({data}) => {
  return (
    <div>
      <Header data={data} />
      <CreateTask  />
      <AllTasks/>
    </div>
  );
};

export default AdminDashboard;
