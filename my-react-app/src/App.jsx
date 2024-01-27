import React from "react";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";
import Auth from "./Components/Auth";
import { RecoilRoot } from "recoil";

const App = () => {
  const localStorageValue = localStorage.getItem("token");

  return (
    <RecoilRoot>
      {localStorageValue ? (
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      ) : (
        <div>
          <Auth />;
        </div>
      )}
    </RecoilRoot>
  );
};

export default App;
