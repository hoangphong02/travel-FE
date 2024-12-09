import React from "react";
import { HeaderAdmin } from "./components";
import { SideBar } from "./components/SideBar";
import { Route } from "react-router-dom";

export const AdminLayout = (props) => {
  const render = () => {
    // if (isLoading) return <LoadingPage />;
    return (
      <div className={`admin-layout`}>
        <HeaderAdmin />
        <div className="d-flex ">
          <SideBar />
          <main>
            <div className="container-fluid">
              <Route {...props} />
            </div>
          </main>
        </div>
      </div>
    );
  };

  return render();
};
