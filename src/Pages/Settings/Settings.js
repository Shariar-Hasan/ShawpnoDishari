import React, { useContext, useState } from "react";
import SettingsDashBoard from "../../Components/SettingsDashBoard/SettingsDashBoard";

import { Routes, Route } from "react-router-dom";
import ChangePass from "../../Components/ChangePass/ChangePass";
import Sidenav from "../../Components/Sidenav/Sidenav";
import { userDetails } from "../../Assets/Values/PreDefinedValues";
import { UserContext } from "./../../App";
import SetPrivacy from "../../Components/SetPrivacy/SetPrivacy";
import SettingsInstruction from "../../Components/SettingsInstruction/SettingsInstruction";
import VerifyUser from "../../Components/VerifyUser/VerifyUser";

const Settings = () => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  return (
    <div className="container">
      {Object.keys(loginuser).length && <Sidenav loginuser={loginuser} />}
      <div className="row my-3 ">
        <div className="col-md-3 ">
          <SettingsDashBoard />
        </div>
        <div className="col-md-9 ">
          <Routes>
            <Route path="/" element={<SettingsInstruction />} />
            <Route path="/change-pass" element={<ChangePass />} />
            <Route path="/set-privacy" element={<SetPrivacy />} />
            <Route path="/verify-user" element={<VerifyUser />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Settings;
