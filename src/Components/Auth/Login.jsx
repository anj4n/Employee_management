import React, { useState } from "react";

const Login = ({HandleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (event) => {
    event.preventDefault();
    HandleLogin(email,password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="bg-black flex items-center justify-center h-screen ">
      <div className="mt-10   flex justify-center border-2 border-red-600 p-30 rounded-xl ">
        <form
          onSubmit={(event) => SubmitHandler(event)}
          className="flex flex-col text-xl  "
        >
          <input
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="Enter Your Email"
            className=" bg-transparent text-white p-3 m-3 rounded-3xl border-2 outline-none border-red-600 "
          />
          <input
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="Enter Your password"
            className="bg-transparent text-white rounded-3xl m-3 border-2  p-3 outline-none  border-red-600"
          />
          <button className="bg-red-600  rounded-full p-3  mt-5 text-white ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
