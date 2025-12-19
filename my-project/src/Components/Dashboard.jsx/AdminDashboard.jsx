import React from "react";
import Header from "../ExtraComponents/Header";
import CreateTask from "../ExtraComponents/CreateTask";
import AllTasks from "../ExtraComponents/AllTasks";

const AdminDashboard = () => {
  return (
    <div h-screen w-full>
      <Header />
      <CreateTask />
      <AllTasks/>
    </div>
  );
};

export default AdminDashboard;
