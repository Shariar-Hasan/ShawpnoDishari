import React, { useState, useContext } from "react";
import {
  hrStyle,
  linkStyle,
  menudata,
} from "../../Assets/Values/PreDefinedValues";
import "./../../Assets/Css/Sidenav.css";
import defaultAvater from "./../../Assets/Images/logo/sd_logo_web.png";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { signOutUser } from "../../Assets/Funtions/FirebaseAuth.js";
import {
  clearLocalStorage,
  setLocalStorage,
} from "../../Assets/Funtions/functions";
const Sidenav = () => {
  const [menuOpen, setMenuOpen] = useState("");
  const [menuItems, setMenuItems] = useState(menudata);

  const [loginuser, setLoginuser] = useContext(UserContext);
  const history = useNavigate();
  const {
    sd_id,
    personalInfo: { email, name, avater },
    accountInfo: { verified },
  } = loginuser;
  const settingsError = !verified;
  const handleSignOut = () => {
    signOutUser();
    setLoginuser({});
    clearLocalStorage();
    setLocalStorage("loginuser", { sd_id: "2eu9" });
    history("/login");
    toast.success(" Successfully Signed Out");
  };
  return (
    <div className="sidenav-bg">
      <div
        className={`sidenav-bg-black ${menuOpen}`}
        onClick={() => setMenuOpen(menuOpen !== "open" ? "open" : "")}
      ></div>
      <div className={`sidenav-inside ${menuOpen} `}>
        <span
          className="toggler"
          onClick={() => setMenuOpen(menuOpen !== "open" ? "open" : "")}
        >
          Side Navigation
        </span>
        {/* {loginuser?.notifications?.length !== 0 && (
          <span className="notification-button">
            <i className="far fa-bell text-primary" aria-hidden="true"></i>
          </span>
        )} */}
        <div className="sidenav-top">
          <img
            className="avater"
            src={avater?.src || defaultAvater}
            alt={"user avater"}
          />
          <span>{name || email}</span>
          <span>{sd_id}</span>
          <span className="text-success">
            Active Now{" "}
            <i className="fa fa-circle fa-sm text-green" aria-hidden="true"></i>
          </span>
          <hr style={{ ...hrStyle, margin: "5px 0" }} />
          <div className="btn-group">
            <button
              className="btn btn-outline-dark border-0 text-small"
              title="Log Out "
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              onClick={() => history("/settings", { replace: true })}
            >
              <i className="fa fa-gear"></i> Settings{" "}
              <span className="badge badge-warning bg-danger text-white">
                {settingsError && "!"}
              </span>
            </button>
            <button
              className="btn btn-outline-dark border-0  text-small"
              title="Log Out "
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              onClick={handleSignOut}
            >
              <i className="fas fa-right"></i> Logout
            </button>
          </div>
        </div>
        <div className="sidenav-menu">
          <div id="accordion2">
            {menuItems.map((menu, i) => (
              <div key={i}>
                {(loginuser?.accountInfo.admin === menu.onlyForAdmin ||
                  loginuser?.accountInfo.admin) && (
                  <div className="card" key={i}>
                    <div
                      className="card-header menu-card-header"
                      id={"headingNav" + i}
                    >
                      <h5
                        className="d-block d-flex justify-content-between h6 text-black cursor-pointer py-2"
                        data-toggle="collapse"
                        data-target={"#collapseNav" + i}
                        aria-controls={"#collapseNav" + i}
                      >
                        <span>{menu.name}</span>{" "}
                        <i className="fa fa-sort-down" aria-hidden="true"></i>
                      </h5>
                    </div>

                    <div
                      id={"collapseNav" + i}
                      className="collapse"
                      aria-labelledby={"headingNav" + i}
                      data-parent="#accordion2"
                    >
                      {menu?.dashboardData.map((data, i) => (
                        <div key={i}>
                          {(loginuser?.accountInfo.admin === data.private ||
                            loginuser?.accountInfo.admin) && (
                            <div className="card-body item-of-menu" key={i}>
                              <Link
                                to={data.path}
                                style={{ ...linkStyle, color: "black" }}
                              >
                                <li className="menu-item ">
                                  <i
                                    className={data.icon}
                                    style={{ padding: "0 10px" }}
                                    aria-hidden="true"
                                  ></i>
                                  {data.navName}
                                </li>
                              </Link>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="sidenav-bottom ">
          <span>
            &copy;Copyright({new Date().getFullYear()}) reserved by <br />{" "}
            <b>Shawpno Dishari</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
