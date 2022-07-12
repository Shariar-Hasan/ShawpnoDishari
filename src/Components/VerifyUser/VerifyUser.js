import React, { useContext } from "react";
import { UserContext } from "../../App";
import { verifyEmail } from "../../Assets/Funtions/FirebaseAuth";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";
import { toast } from "react-hot-toast";

const VerifyUser = () => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  const handleVerifyEmail = () => {
    verifyEmail(loginuser?.sd_id)
      .then((res) => {
        console.log(res);
        toast.success("Email sent successfully! Check you mail spambox");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container bg-white shadow rounded">
      <div className="row">
        <div className="wholepageCenterChild">
          <div className="col-md-8 px-4 py-5 border rounded my-3">
            <h3 className="text-brand text-center">Verify your Email</h3>
            <div style={hrStyle}></div>
            <div className="div text-center">
              {!loginuser?.accountInfo.verified ? (
                <>
                  <p className="lead">{loginuser?.personalInfo.email}</p>
                  <p className="lead">Your account is not verified</p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={handleVerifyEmail}
                  >
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
