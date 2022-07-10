import React, { useContext } from "react";
import logoWeb from "./../../Assets/Images/logo/sd_logo_web.png";
import "./../../Assets/Css/Home.css";
import { Link } from "react-router-dom";
import {
  linkStyle,
  userDetails,
  userDetails2,
} from "../../Assets/Values/PreDefinedValues";
import { UserContext } from "../../App";
const Home = () => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  return (
    <div>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-6 mx-auto text-center my-5">
            <img
              className="web-logo my-3"
              src={logoWeb}
              alt={"created by logomakr.com"}
            />
            <p className="lead">
              Are you a member?{" "}
              <Link style={linkStyle} to={"/login"}>
                Click Here
              </Link>
            </p>

            <p className="text-muted">
              This is temporary {" "}
              <Link style={linkStyle} to={"/dashboard"}>
                dashboard link.{" "}
              </Link>
              it will be removed after the development process ends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
