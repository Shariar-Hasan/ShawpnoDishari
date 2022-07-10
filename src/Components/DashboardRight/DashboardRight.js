import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";
import manAvater from "./../../Assets/Images/other/man.png";
import womanAvater from "./../../Assets/Images/other/woman.png";
import nullAvater from "./../../Assets/Images/other/user.png";
import { LoadingContext } from "../../App";
import NothingAvailable from "../NothingAvailable/NothingAvailable";
import moment from "moment";
const DashboardRight = ({ userdetails }) => {
  const { register, handleSubmit } = useForm();
  const [loadingpage, setLoadingpage] = useContext(LoadingContext);
  const onSubmit = (data) => {
    setLoadingpage(true);
    console.log(data);
    setLoadingpage(false);
  };

  const fontSize = { fontSize: "18px" };

  //   user info
  const {
    sd_id,
    personalInfo: { name, avater, email, phone, birthDate },
    donationInfo,
    institutionalInfo,
  } = userdetails;
  return (
    <div className="row  dashboard-right mx-auto my-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="personalinfo my-2 border-radious-10 col-md-12 bg-white p-5 shadow">
          <h3 className="text-brand">Personal Info</h3>
          <div style={hrStyle}></div>
          <div>
            <div className="row my-3">
              <div className="col-md-2" style={fontSize}>
                Name :
              </div>
              <div className="col-md-10">
                {name ? (
                  <p>{name}</p>
                ) : (
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control"
                      placeholder="Enter Your name"
                      {...register("name", { required: true })}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* avater section */}
          {!avater && (
            <div>
              <div className="row my-3">
                <div className="col-2" style={fontSize}>
                  Avater :
                </div>
                <div className="col-md-10">
                  <div className="form-group">
                    <label>
                      <input
                        type="radio"
                        value="./../../Assets/Images/other/man.png"
                        className="form-radio p-3"
                        {...register("avater", { required: true })}
                      />
                      <img
                        className="mx-2 "
                        src={manAvater}
                        style={{ width: "50px" }}
                        alt="man"
                      />
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="./../../Assets/Images/other/woman.png"
                        className="form-radio "
                        {...register("avater", { required: true })}
                      />
                      <img
                        className="mx-2 "
                        src={womanAvater}
                        style={{ width: "50px" }}
                        alt="woman"
                      />
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="./../../Assets/Images/other/woman.png"
                        className="form-radio "
                        {...register("avater", { required: true })}
                      />
                      <img
                        className="mx-2 "
                        src={nullAvater}
                        style={{ width: "50px" }}
                        alt="null"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* email section */}
          <div>
            <div className="row my-3">
              <div className="col-md-2" style={fontSize}>
                Email :
              </div>
              <div className="col-md-10">
                <p>{email}</p>
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
                {phone ? (
                  <p>{phone}</p>
                ) : (
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control"
                      placeholder="Enter Your Phone No"
                      {...register("phone", { required: true })}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* birthdate section */}
          <div>
            <div className="row my-3">
              <div className="col-md-2" style={fontSize}>
                Birthdate :
              </div>
              <div className="col-md-10">
                {birthDate ? (
                  <p>{birthDate}</p>
                ) : (
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control"
                      {...register("birthDate", { required: true })}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {(!name || !email || !phone || !birthDate || !avater) && (
            <button className="mx-auto btn btn-outline-primary btn-block w-100">
              Save Info
            </button>
          )}
        </div>
      </form>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="personalinfo border-radious-10 bg-white col-md-12 p-5 my-4 shadow">
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
                      <button
                        className="btn"
                      >
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
