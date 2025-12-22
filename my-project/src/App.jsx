import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard.jsx/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard.jsx/AdminDashboard";
import { SetLocalStorage } from "./utils/LocalStorage";
import { GetLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  useEffect(() => {
    SetLocalStorage();
    GetLocalStorage();
  }, []);

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);

  const HandleLogin = (email, password) => {
    if (email === "a@a.com" && password === "123") {
      setUser("admin");
    } else if (
      authData &&
      authData.employees &&
      authData.employees.find(
        (e) => email === e.email && password === e.password
      )
    ) {
      setUser("employees");
    } else {
      alert("Invalid credentials");
      
    }
  };

  return (
    <>
      {!user && <Login HandleLogin={HandleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employees" && <EmployeeDashboard />}
    </>
  );
};

export default App;