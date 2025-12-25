import React from "react";

const Header = ({data}) => {
  return (
    <div className=" flex justify-between items-end text-white  text-3xl m-10 mt-7">
      <h1 className="text-2xl font-semibold">
        Hello, <br /> <span className="text-2xl">{data.firstName}🙋‍♂️ </span>
      </h1>
      <span className="bg-red-600 rounded-2xl p-3 text-2xl">Log Out</span>
    </div>
  );
};

export default Header;
