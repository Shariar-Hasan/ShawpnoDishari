import React, { useContext } from "react";
import { UserContext } from "../../App";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";

const SettingsInstruction = () => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  return (
    <div className="container bg-white shadow rounded">
      <div className="row">
        <div className="wholepageCenterChild">
          <div className="col-md-8 px-4 py-5 border rounded">
            <h3 className="text-brand text-center">
              Hello, {loginuser?.personalInfo.name || "User"}
            </h3>
            <div style={hrStyle}></div>
            <p className="lead">welcome to settings option</p>
            <ul>
              <li>
                <p className="lead">You can change your account privacy from here,</p>
              </li>
              <li>
                <p className="lead">You can change your password from here,</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsInstruction;
