import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";
import { LoadingContext, UserContext } from "../../App";
import NothingAvailable from "../NothingAvailable/NothingAvailable";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { clg } from "../../Assets/Funtions/functions";
import { updatePersonalInfo } from "../../Assets/Funtions/FireStore";
import toast from "react-hot-toast";
const DashboardRight = ({}) => {
  const { register, handleSubmit, reset } = useForm();
  const [loadingpage, setLoadingpage] = useContext(LoadingContext);
  const [loginuser, setLoginuser] = useContext(UserContext);
  const [readonly, setReadonly] = useState(true);

  useEffect(() => {
    reset({
      sd_id: loginuser?.sd_id,
      name: loginuser?.personalInfo?.name,
      email: loginuser?.personalInfo?.email,
      phone: loginuser?.personalInfo?.phone,
      birthDate: loginuser?.personalInfo?.birthDate,
    });
  }, []);

  const onSubmit = (data) => {
    data.avater = loginuser?.personalInfo?.avater;
    if (data.birthDate) {
      data.birthDate = moment(data.birthDate).format("DD/MM/YYYY");
    }
    clg(data);
    updatePersonalInfo(data, loginuser?.sd_id)
      .then(() => {
        toast.success("Profile  Updated");
        setLoadingpage(false);
      })
      .catch((error) => {
        clg(error);
        toast.error(error.message);
        toast.error("Profile not Updated");
        setLoadingpage(false);
      });
  };
  const navigate = useNavigate();
  const fontSize = { fontSize: "18px" };

  const { donationInfo } = loginuser;
  return (
    <div className="row  dashboard-right mx-auto my-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" personalinfo my-2 border-radious-10 col-md-12 bg-white p-5 shadow">
          {!loginuser?.accountInfo.verified && (
            <div className="blur-body">
              <button
                className="btn btn-outline-primary mx-auto"
                onClick={() => navigate("/settings/verify-user")}
              >
                Verify Account to continue
              </button>
            </div>
          )}
          <button
            type="button"
            title={"Edit Info"}
            className="edit-btn click-effect"
            onClick={() => setReadonly(!readonly)}
          >
            <i className="fa fa-edit" aria-hidden="true"></i>
          </button>
          <h3 className="text-brand">Personal Info</h3>

          <div style={hrStyle}></div>
          <div>
            <div className="row my-3">
              <div className="col-md-2" style={fontSize}>
                SD_ID :
              </div>
              <div className="col-md-10">
                <div
                  className="form-group"
                  onClick={() => toast.error("You can never edit this")}
                >
                  <input
                    type="text"
                    className={`form-control bg-white  border-${
                      readonly ? 0 : 1
                    }`}
                    placeholder={
                      readonly ? "Not Available" : "Enter Your Email"
                    }
                    disabled={true}
                    {...register("sd_id", { required: true })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="row my-3">
              <div className="col-md-2" style={fontSize}>
                Name :
              </div>
              <div className="col-md-10">
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control bg-white  border-${
                      readonly ? 0 : 1
                    }`}
                    placeholder={readonly ? "Not Available" : "Enter Your Name"}
                    disabled={readonly}
                    {...register("name", { required: true })}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* email section */}
          <div>
            <div className="row my-3">
              <div className="col-md-2" style={fontSize}>
                Email :
              </div>
              <div className="col-md-10">
                <div
                  className="form-group"
                  onClick={() => toast.error("You cant change email from here")}
                >
                  <input
                    type="text"
                    className={`form-control bg-white  border-${
                      readonly ? 0 : 1
                    }`}
                    placeholder={
                      readonly ? "Not Available" : "Enter Your Email"
                    }
                    disabled={true}
                    {...register("email", { required: true })}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* phone section */}
          <div>
            <div className="row my-3">
              <div className="col-md-2" style={fontSize}>
                Phone :
              </div>
              <div className="col-md-10">
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control bg-white  border-${
                      readonly ? 0 : 1
                    }`}
                    placeholder={
                      readonly ? "Not Available" : "Enter Your Phone"
                    }
                    disabled={readonly}
                    {...register("phone", { required: true })}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* birthdate section */}
          <div>
            <div className="row my-3">
              <div className="col-md-2" style={fontSize}>
                Birth Date :
              </div>
              <div className="col-md-10">
                <div className="form-group">
                  {!readonly ? (
                    <input
                      type="date"
                      className={`form-control bg-white  border-${
                        readonly ? 0 : 1
                      }`}
                      disabled={readonly}
                      defaultValue={loginuser?.personalInfo?.birthDate}
                      placeholder="Input Your Birth Date"
                      {...register("birthDate", { required: true })}
                    />
                  ) : (
                    <input
                      type="text"
                      className={`form-control bg-white  border-${0}`}
                      disabled={readonly}
                      value={loginuser?.personalInfo?.birthDate}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {!readonly && (
            <button className="mx-auto btn btn-outline-primary btn-lg click-effect btn-block w-100">
              Save Info
            </button>
          )}
        </div>
      </form>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="personalinfo border-radious-10 bg-white col-md-12 p-5 my-4 shadow">
          {!loginuser?.accountInfo.verified && (
            <div className="blur-body">
              <button
                className="btn btn-outline-primary mx-auto"
                onClick={() => navigate("/settings/verify-user")}
              >
                Verify Account to continue
              </button>
            </div>
          )}
          <h3 className="text-brand">Donation Info</h3>
          <div style={hrStyle}></div>
          {donationInfo?.length === 0 ? (
            <NothingAvailable data={"Not Donated yet"} />
          ) : (
            <div id="accordion1">
              {donationInfo.map((don, i) => (
                <div className="card" key={i}>
                  <div className="card-header" id={`idDonation${i}`}>
                    <h5
                      className="mb-0 cursor-pointer"
                      data-toggle="collapse"
                      data-target={"#collapseDonation" + i}
                      aria-controls={"#collapseDonation" + i}
                    >
                      <button className="btn">
                        {`Donation in ${moment(don.date, "DD/MM/YYYY").format(
                          "MMMM"
                        )}, ${moment(don.date, "DD/MM/YYYY").format("YYYY")}`}
                      </button>
                    </h5>
                  </div>

                  <div
                    id={"collapseDonation" + i}
                    className="collapse "
                    aria-labelledby={`idDonation${i}`}
                    data-parent="#accordion1"
                  >
                    <div className="card-body">
                      <table className="table  border">
                        <tbody>
                          <tr>
                            <td className="text-bold">Donation Date : </td>
                            <td>{don.date}</td>
                          </tr>
                          <tr>
                            <td className="text-bold">Amount of donation :</td>
                            <td>{don.amount} TK</td>
                          </tr>
                          <tr>
                            <td className="text-bold">Payment Method :</td>
                            <td>{don.paymentMethod}</td>
                          </tr>
                          <tr>
                            <td className="text-bold">Collected by(SD_ID) :</td>
                            <td>{don.collectedBy}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default DashboardRight;
