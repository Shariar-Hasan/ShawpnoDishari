import React, { useContext } from "react";
import { UserContext } from "../../App";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";

const VerifyUser = () => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  return (
    <div className="container bg-white shadow rounded">
      <div className="row">
        <div className="wholepageCenterChild">
          <div className="col-md-8 px-4 py-5 border rounded">
            <h3 className="text-brand text-center">Verify your Email</h3>
            <div style={hrStyle}></div>
            <div className="div text-center">
              {!loginuser?.accountInfo.verified ? (
                <>
                  <p className="lead">Your account is not verified</p>
                  <button className="btn btn-outline-primary">
                    Send Verification mail
                  </button>
                </>
              ) : (
                <p className="text-success">Your account is verified</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyUser;
