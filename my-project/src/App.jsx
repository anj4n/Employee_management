import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard.jsx/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard.jsx/AdminDashboard";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggeduser, setLoggeduser] = useState(null)

  const HandleLogin = (email, password) => {
   const admin = authData.admin.find(
        (e) => email === e.email && password === e.password
      );
    if (admin) {
      setUser("admin");
      setLoggeduser(admin)
      localStorage.setItem("loggedInUser", JSON.stringify({role:'admin'}));
    } else if (authData && authData.employees) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      );
      
      if (employee) {
        setUser("employees");
        setLoggeduser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role:'employees', data: employee}));
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user && <Login HandleLogin={HandleLogin} />}
      {user === "admin" && <AdminDashboard data={loggeduser} />}
      {user === "employees" && <EmployeeDashboard data={loggeduser} />}
    </>
  );
};

export default App;