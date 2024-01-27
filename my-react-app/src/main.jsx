import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Components/Error.jsx";
import DashBoard from "./Components/DashBoard.jsx";
import QuizAnalysis from "./Components/QuizAnalysis.jsx";
import CreateQuiz from "./Components/CreateQuiz.jsx";
import Home from "./Components/Home.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "analysis",
        element: <QuizAnalysis />,
      },
      {
        path: "createQuiz",
        element: <CreateQuiz />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
