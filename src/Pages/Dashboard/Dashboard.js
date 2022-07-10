import React, { useContext } from "react";
import DashboardLeft from "../../Components/DashboardLeft/DashboardLeft";
import { Routes, Route } from "react-router-dom";
import DashboardRight from "../../Components/DashboardRight/DashboardRight";
import { UserContext } from "../../App";
import Userlist from "../../Components/Userlist/Userlist";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Profile from "../../Components/Profile/Profile";
import NothingAvailable from "../../Components/NothingAvailable/NothingAvailable";
import AddNotice from "../../Components/AddNotice/AddNotice";

const Dashboard = () => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  return (
    <div>
      {Object.keys(loginuser).length !== 0 && <Sidenav loginuser={loginuser} />}
      <div className="container dashboard">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="row">
                <div className="col-md-4 mx-auto">
                  <DashboardLeft userdetails={loginuser} />
                </div>
                <div className="col-md-8 mx-auto">
                  <DashboardRight userdetails={loginuser} />
                </div>
              </div>
            }
          />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-notice" element={<AddNotice />} />
          <Route
            path="*"
            element={
              <div className="row">
                <div className="col-md-6 mx-auto my-5">
                  <NothingAvailable data={"Nothing Available till now"} />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
