import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const btnHandler = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };
  return (
    <div className="bg-white text-white h-screen w-1/4 p-4">
      <h1 className="text-black text-5xl font-extrabold">Quizzie</h1>
      <div className="my-72">
        <ul>
          <li className="mb-7 text-black font-bold">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="mb-7 text-black font-bold">
            <Link to="/analysis">Analysis</Link>
          </li>
          <li className="mb-7 text-black font-bold">
            <Link to="/createquiz">Create Quiz</Link>
          </li>
        </ul>
      </div>
      <hr className="w-40 " />

      <button className="text-black font-bold" onClick={btnHandler}>
        LogOut
      </button>
    </div>
  );
};

export default Sidebar;
