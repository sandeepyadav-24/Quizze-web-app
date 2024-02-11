import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import UserId from "../Atom/UserId";
import { toast } from "react-toastify";

const Login = () => {
  // useState for Email
  const [email, setEmail] = useState("");
  // useState for Password
  const [password, setPassword] = useState("");

  const [userAtom, setUserAtom] = useState("");

  // Using useSetRecoilState to SEt UserID to Atom
  //const setUserId = useSetRecoilState(UserId);

  // Btn Click Handler
  const btnClick = async () => {
    // login data
    const loginData = {
      email: email,
      password: password,
    };
    // Url For Backend Fetching
    const url = "http://localhost:3000/admin/login/";
    // Options For BAckend
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };

    // Fetch Function
    const response = await fetch(url, options);
    // Response Converting To Json
    const data = await response.json();

    // If Token Is Within response
    if (data.token) {
      // Setting LocalStorage
      localStorage.setItem("token", data.token);

      //setUserAtom(data.userId);

      // Setting User Id to Atom As it Comes From Backend
      //await setUserId(data.userId);

      // Redirect to the dashboard
      window.location = "/dashboard";

      // Alert Message As Response
      //alert(JSON.stringify(data.mes));
    } else {
      // If Token Is not Within Response
      toast.success(JSON.stringify(data.mes), {
        position: "top-right",
        autoClose: 2000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
      });
    }
  };

  // useEffect to handle side effects after setting the user ID
  //useEffect(() => {
  // You can add any side effects or additional logic here
  //console.log("User ID has been updated:", userAtom);
  //setUserId(userAtom);
  //}, [userAtom]);

  return (
    <div className="px-40 py-10 ">
      <div className="flex flex-row my-5">
        <h1 className="mx-5">Email </h1>{" "}
        <input
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex flex-row my-">
        <h1 className="mx-5">Password</h1>{" "}
        <input
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <button
        className="bg-[#A9BCFF] px-20 py-2 my-5 mx-40 rounded-lg font-bold"
        onClick={btnClick}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
