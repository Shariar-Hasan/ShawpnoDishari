import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { settingNavlist } from "../../Assets/Values/settings";

const SettingsDashBoard = () => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  return (
    <div className="settings-dashboard mx-auto p-4 w-100 bg-white shadow rounded">
      <fieldset>
        <legend>Settings</legend>
        <hr />
        <ul className="settings-list">
          {settingNavlist.map((setting, index) => (
            <Link
              key={index}
              to={setting.link}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <li className="d-flex justify-content-between">
                <i className={setting.icon}></i>
                <span className="pl-2">{setting.name}</span>
                {setting.link === "/settings/verify-user" &&
                  !loginuser?.accountInfo.verified && (
                    <sup className="text-danger border rounded px-2 bg-danger text-white">
                      {"!"}
                    </sup>
                  )}
              </li>
            </Link>
          ))}
          {/* <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/settings/change-pass"}
          >
            <li>Change Password</li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/settings/set-privacy"}
          >
            <li>Privacy Settings</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/settings/verify-user"}
          >
            <li>Verify Email</li>
          </Link> */}
        </ul>
      </fieldset>
    </div>
  );
};

export default SettingsDashBoard;
