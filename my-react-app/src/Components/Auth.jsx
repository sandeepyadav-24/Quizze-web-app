import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
const Auth = () => {
  const [isLoginView, setIsLoginView] = useState(false);
  const btnClick = () => {
    setIsLoginView((prev) => !prev);
  };
  return (
    <div className="bg-[#F2F2F2] h-screen p-40 ">
      <div className=" bg-white  rounded-xl  p-20">
        <h1 className="font-bold text-5xl mx-96 my-3 ">Quizzee</h1>
        <div className="btndiv mx-72 my-5 ">
          <button
            className="px-10 py-1 mx-5 rounded-lg border-yellow-200 border-2"
            onClick={btnClick}
          >
            Sign Up
          </button>
          <button
            className="px-10 py-1 mx-5 rounded-lg border-yellow-200 border-2"
            onClick={btnClick}
          >
            Log In
          </button>
        </div>
        {isLoginView ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default Auth;
