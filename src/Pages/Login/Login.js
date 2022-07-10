import React, { useState } from "react";

import { useForm } from "react-hook-form";

import logoWeb from "./../../Assets/Images/logo/sd_logo_web.png";
import { linkStyle } from "../../Assets/Values/PreDefinedValues";
import toast from "react-hot-toast";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";
import {
  googleSignIn,
  signInEmailPass,
  signUpEmailPass,
} from "../../Assets/Funtions/Firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const [isLoginFrom, setIsLoginForm] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate()
  const onSubmit = (data) => {
    navigate("/dashboard")
    // if (data.password !== data.confirmPassword && !isLoginFrom) {
    //   toast.error("Password are not matching");
    //   return;
    // }
    // if (isLoginFrom) {
    //   signInEmailPass(data.email, data.password)
    //     .then((data) => console.log(data))
    //     .catch((err) => console.log(err));
    // } else {
    //   signUpEmailPass(data.email, data.password)
    //     .then((data) => console.log(data))
    //     .catch((err) => console.log(err));
    // }
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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
          <div className="or-section">
            <span>OR</span>
          </div>
          <div className="col-md-6 mx-auto p-4  mb-3 text-center">
            <button
              className="google-sign-in click-effect cursor-pointer"
              onClick={handleGoogleSignIn}
            >
              <i class="fab text-danger fa-google" aria-hidden="true"></i> Sign
              In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
