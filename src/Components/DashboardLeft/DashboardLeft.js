import React, { useContext } from "react";
import { UserContext } from "../../App";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
const DashboardLeft = () => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const {
    sd_id,
    personalInfo: { avater, email },
    accountInfo: { verified },
    donationInfo,
  } = loginuser;

  const lastDonationDate = donationInfo[0]?.date || "N/A";
  const lastDonated = donationInfo[0]?.amount || "0";
  const totalDonated =
    donationInfo?.reduce((total, donation) => total + +donation?.amount, 0) ||
    "0";
  return (
    <div className="row dashboard-left mx-auto my-3 border-radious-10">
      <div className="info border-radious-10 bg-white mx-auto  col-md-12 p-5  rounded shadow  mt-2">
        <div className=" text-center">
          <div className="h5 text-brand text-center">Profile Info</div>

          <div style={hrStyle}></div>
          <div
            className="avater cursor-pointer"
            onClick={() =>
              swal({
                title: "Change Avater?",
                text: "Do you want to change your avater?",
                icon: "info",
                buttons: true,
              }).then((willChange) => {
                if (willChange) {
                  navigate("/settings/change-avater");
                }
              })
            }
          >
            {!avater?.src && (
              <span className="upload-icon">
                <i className="fa fa-upload" aria-hidden="true"></i>
              </span>
            )}
            <img src={avater?.src} alt="No avater Uploaded" />
          </div>
          <div className="info-data">
            <h6 className="">SD_ID : {sd_id}</h6>
            <h6 className="">{email}</h6>
          </div>
          <div className="verified">
            {verified ? (
              <span className="text-success">User Verified</span>
            ) : (
              <span className="text-danger">User not Verified</span>
            )}
          </div>
        </div>
        <div style={hrStyle}></div>
        <div>
          <div className="h5 text-brand text-center">Donation Info</div>

          <div style={hrStyle}></div>
          <table className="table">
            <tbody>
              <tr className="">
                <td className="h6 text-left">Total Donated</td>
                <td className="">:</td>
                <td>{totalDonated} TK</td>
              </tr>
              <tr className="">
                <td className="h6 text-left">Last donated</td>
                <td className="">:</td>
                <td>{lastDonated} TK</td>
              </tr>
              <tr className="">
                <td className="h6 text-left">Last Donation Date</td>
                <td className="">:</td>
                <td>{lastDonationDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeft;
