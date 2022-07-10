import React from "react";
import { Link } from "react-router-dom";

const SettingsDashBoard = () => {
  return (
    <div className="settings-dashboard mx-auto my-3 p-4 w-100 bg-white shadow rounded">
      <fieldset>
        <legend>Settings</legend>
        <hr />
        <ul className="settings-list">
          <Link
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
            <li>
              Verify Email<sup></sup>
            </li>
          </Link>
        </ul>
      </fieldset>
    </div>
  );
};

export default SettingsDashBoard;
