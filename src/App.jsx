import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard.jsx/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard.jsx/AdminDashboard";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggeduser, setLoggeduser] = useState(null);
  const [loggedIdentity, setLoggedIdentity] = useState(null); // { role, email }

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setUser(parsedUser.role);
      // Prefer identity-based storage so we always show latest employee/admin data.
      if (parsedUser?.email) {
        setLoggedIdentity({ role: parsedUser.role, email: parsedUser.email });
      } else if (parsedUser?.data?.email) {
        // backward compatibility with older stored format
        setLoggedIdentity({ role: parsedUser.role, email: parsedUser.data.email });
      } else {
        setLoggeduser(parsedUser.data);
      }
    }
  }, []);

  useEffect(() => {
    if (!loggedIdentity?.role || !loggedIdentity?.email || !authData) return;

    if (loggedIdentity.role === "admin") {
      const admin = authData.admin?.find((a) => a.email === loggedIdentity.email);
      if (admin) setLoggeduser(admin);
    } else if (loggedIdentity.role === "employees") {
      const employee = authData.employees?.find((e) => e.email === loggedIdentity.email);
      if (employee) setLoggeduser(employee);
    }
  }, [authData, loggedIdentity]);



  const HandleLogin = (email, password) => {
   const admin = authData.admin.find(
        (e) => email === e.email && password === e.password
      );
    if (admin) {
      setUser("admin");
      setLoggeduser(admin);
      setLoggedIdentity({ role: "admin", email: admin.email });
      localStorage.setItem("loggedInUser", JSON.stringify({ role:'admin', email: admin.email }));
    } else if (authData && authData.employees) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      );
      
      if (employee) {
        setUser("employees");
        setLoggeduser(employee);
        setLoggedIdentity({ role: "employees", email: employee.email });
        localStorage.setItem("loggedInUser", JSON.stringify({ role:'employees', email: employee.email }));
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
      {user === "admin" && <AdminDashboard data={loggeduser} changeUser={setUser} />}
      {user === "employees" && <EmployeeDashboard data={loggeduser} changeUser={setUser} />}
    </>
  );
};

export default App;