import { useState } from "react";

const Login = () => {
  // useState for Email
  const [email, setEmail] = useState("");
  // useState for Password
  const [password, setPassword] = useState("");

  // Btn Click Handler
  const btnClick = async () => {
    // login data
    const loginData = {
      email: email,
      password: password,
    };
    // Url For Backend Fetching
    const link = "http://localhost:3000/admin/login/";
    // Options For BAckend
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };

    // Fetch Function
    fetch(link, options)
      .then((response) => {
        // Response Converting To Json
        return response.json();
      })
      .then((data) => {
        // If Token Is Within response
        if (data.token) {
          // Setting LocalStorage
          localStorage.setItem("token", data.token);
          // Alert Message As Response
          alert(JSON.stringify(data.mes));
          window.location.reload();
          //window.location = "/dashboard";
        } else {
          // If Token Is not Within Response
          alert(JSON.stringify(data.mes));
        }
      });
  };

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
