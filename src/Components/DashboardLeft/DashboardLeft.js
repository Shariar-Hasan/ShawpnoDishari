import React from "react";
import { hrStyle, listStyle } from "../../Assets/Values/PreDefinedValues";

import avater2 from "./../../Assets/Images/other/man.png";
const DashboardLeft = ({ userdetails }) => {
  const {
    sd_id,
    personalInfo: { avater, email },
    accountInfo: { verified },
    donationInfo,
  } = userdetails;
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
          <div className="avater">
            <img src={avater2} alt="avater" />
          </div>
          <div className="info-data">
            <h6 className="">SD_ID : {sd_id}</h6>
            <h6 className="">{email}</h6>
          </div>
          <div className="verified">
            {verified ? (
              <span className="text-success">User Verified</span>
            ) : (
              <span className="text-danger">
                User not Verified
                <br />
                <button className="btn btn-primary click-effect">
                  Send verification mail
                </button>
              </span>
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
