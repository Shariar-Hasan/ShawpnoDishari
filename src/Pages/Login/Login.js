import React, { useContext, useEffect, useState } from "react";
import { LoadingContext, UserContext } from "./../../App";
import { useForm } from "react-hook-form";
import logoWeb from "./../../Assets/Images/logo/sd_logo_web.png";
import { linkStyle } from "../../Assets/Values/PreDefinedValues";
import toast from "react-hot-toast";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";
import {
  googleSignIn,
  signInEmailPass,
  signUpEmailPass,
} from "../../Assets/Funtions/FirebaseAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  clg,
  createUser,
  setLocalStorage,
} from "../../Assets/Funtions/functions";
import {
  createANewUser,
  getUserProfile,
} from "../../Assets/Funtions/FireStore";

var customId = require("custom-id");
const Login = () => {
  const { register, handleSubmit } = useForm();
  const [isLoginFrom, setIsLoginForm] = useState(true);
  const [loginuser, setLoginuser] = useContext(UserContext);
  const [loadingpage, setLoadingpage] = useContext(LoadingContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginuser.sd_id) {
      navigate("/dashboard");
    }
  }, [loginuser]);
  const onSubmit = (data) => {
    setLoginuser({});
    setLoadingpage(true);
    if (data.password !== data.confirmPassword && !isLoginFrom) {
      toast.error("Password are not matching");
      setLoadingpage(false);
      return;
    }
    if (isLoginFrom) {
      signInEmailPass(data.email, data.password)
        .then((res) => {
          getUserProfile(data.email)
            .then((res) => {
              setLoginuser(res);
              setLocalStorage("loginuser", res);
              setLoadingpage(false);
              toast.success("Successfully logged in");
              navigate("/dashboard");
            })
            .catch((err) => {
              setLoadingpage(false);
              toast.error(err.code);
            });
        })
        .catch((err) => {
          setLoadingpage(false);
          toast.error(err.code.split("/")[1]);
        });
    } else {
      signUpEmailPass(data.email, data.password)
        .then((res) => {
          const newUser = createUser(
            customId({
              randomLength: 4,
            }),
            data.name,
            "",
            data.email,
            "",
            "",
            res.emailVerified
          );
          createANewUser(newUser)
            .then((data) => {
              setLoginuser(data);
              setLoadingpage(false);
              toast.success("Successfully registered");
              navigate("/dashboard");
            })
            .catch((err) => {
              setLoadingpage(false);
              toast.error("Error : " + err.code);
            });
        })
        .catch((err) => {
          setLoadingpage(false);
          toast.error(err.code);
        });
    }
  };
  return (
    <div className="container">
      <div className="row ">
        <div className="wholepageCenterChild">
          <div className="col-md-6 p-4 bg-white shadow rounded">
            <div className="logoPlate text-center">
              <img src={logoWeb} alt="Web Logo" />
            </div>

            <h3 className="text-brand text-center">
              {isLoginFrom ? "Login" : "Register"} Form
            </h3>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              {isLoginFrom || (
                <div className="form-group mb-2">
                  <h5>Full Name :</h5>
                  <input
                    type={"text"}
                    className="form-control form-control-lg"
                    {...register("name", { required: true })}
                    placeholder="Enter Your Name"
                  />
                </div>
              )}
              <div className="form-group my-2">
                <h5>Email :</h5>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  autoComplete={"off"}
                />
              </div>

              <div className="form-group my-2">
                <h5>Password :</h5>
                <input
                  type={showPass ? "text" : "password"}
                  className="form-control form-control-lg"
                  {...register("password", { required: true })}
                  placeholder="Enter Your Password"
                  autoComplete={"off"}
                />
                <div className="form-check">
                  <p>
                    <label className="cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-check-input "
                        defaultValue={showPass}
                        onChange={() => setShowPass(!showPass)}
                        autoComplete={"off"}
                      />
                      Show Password
                    </label>
                  </p>
                </div>
              </div>
              {isLoginFrom || (
                <div className="form-group mb-2">
                  <h5>Confirm Password :</h5>
                  <input
                    type={showPass ? "text" : "password"}
                    className="form-control form-control-lg"
                    {...register("confirmPassword", { required: true })}
                    placeholder="Confirm Your Password"
                  />
                </div>
              )}

              <button
                className="form-control mt-2 form-control-lg btn btn-outline-primary"
                type="submit"
              >
                {isLoginFrom ? "LOGIN" : "REGISTER"}
              </button>
            </form>
            <hr />
            <p className="text-center mt-2">
              {isLoginFrom ? "New User" : "Already have account"} ?{" "}
              <span
                className="cursor-pointer"
                style={linkStyle}
                onClick={() => setIsLoginForm(!isLoginFrom)}
              >
                {isLoginFrom ? "Register Here" : "Login Here"}
              </span>
            </p>
            <p className="text-center mt-2">
              Forgot Password ? {"      "}
              <Link to={"/reset-password"} style={linkStyle}>
                <span
                  className="cursor-pointer"
                  style={linkStyle}
                  onClick={() => setIsLoginForm(!isLoginFrom)}
                >
                  Click here
                </span>
              </Link>
            </p>
          </div>
          {/* <div className="or-section">
            <span>OR</span>
          </div>
          <div className="col-md-6 mx-auto p-4  mb-3 text-center">
            <button
              className="google-sign-in click-effect cursor-pointer"
              onClick={handleGoogleSignIn}
            >
              <i className="fab text-danger fa-google" aria-hidden="true"></i>{" "}
              Sign In with Google
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
