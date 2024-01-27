import { useState } from "react";
const Signup = () => {
  // useState of Name
  const [name, setName] = useState("");
  // useSate of Email
  const [email, setEmail] = useState("");
  // useState of Password
  const [password, setPassword] = useState("");

  // Btn CLick Handler
  const btnClick = () => {
    // Sign Up Data
    const data = {
      name: name,
      email: email,
      password: password,
    };

    // Url For Backend
    const link = "http://localhost:3000/admin/signup/";

    // Option For Fetch Data
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(data),
    };

    //Fetch Function
    fetch(link, options)
      .then((response) => {
        // Handling response and converting into Json
        return response.json();
      })
      .then((data) => {
        // Displaying Message
        alert(JSON.stringify(data.mes));
      });
  };
  return (
    <div className="px-40 py-10">
      <div className="flex flex-row my-5">
        <h1 className="mx-5">Name</h1>
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-row my-5">
        <h1 className="mx-5">Email </h1>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-row my-5">
        <h1 className="mx-5">Password</h1>
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>

      <button
        className="bg-[#A9BCFF] px-20 py-2 rounded-lg mx-40 font-bold "
        onClick={btnClick}
      >
        Submit
      </button>
    </div>
  );
};
export default Signup;
