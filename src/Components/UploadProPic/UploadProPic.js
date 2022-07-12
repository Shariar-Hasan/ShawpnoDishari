import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { LoadingContext, UserContext } from "../../App";
import { clg } from "../../Assets/Funtions/functions";
import { sourceChanger } from "../../Assets/Funtions/Storage";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";

import toast from "react-hot-toast";
import { updatePersonalInfo } from "../../Assets/Funtions/FireStore";
const UploadProPic = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loginuser, setLoginuser] = useContext(UserContext);
  const [loadingPage, setLoadingpage] = useContext(LoadingContext);
  const onSubmit = (data) => {
    // setLoadingpage(true);
    data.name = loginuser?.personalInfo.name;
    data.email = loginuser?.personalInfo.email;
    data.birthDate = loginuser?.personalInfo.birthDate;
    data.phone = loginuser?.personalInfo.phone;
    clg(data);
    clg(loginuser);
    sourceChanger(data.avater[0], "avaters")
      .then((res) => {
        data.avater = res;
        reset();
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
      })
      .catch((err) => {
        clg(err);
        toast.error();
      });
  };
  return (
    <div className="container bg-white shadow rounded">
      <div className="row">
        <div className="wholepageCenterChild">
          <div className="col-md-8 px-4 py-5 border rounded my-3">
            <h3 className="text-brand text-center">Change Your Avater</h3>
            <div style={hrStyle}></div>
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group my-2">
                  <label htmlFor="propic">Upload Profile Picture</label>
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .gif, .webp"
                    className="form-control form-control-lg"
                    id="propic"
                    {...register("avater", { required: true })}
                  />
                </div>
                <div className="form-group my-2 ">
                  <button className="btn btn-lg btn-block w-100 btn-outline-primary">
                    <i className="fa fa-save" aria-hidden="true"></i> Change
                    Avater
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProPic;
