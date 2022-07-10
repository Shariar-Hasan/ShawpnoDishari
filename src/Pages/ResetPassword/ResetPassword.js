import React from "react";
import { useForm } from "react-hook-form";
import { resetPassword } from "../../Assets/Funtions/Firebase";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";
const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    resetPassword(data.email)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="wholepageCenterChild">
          <div className="col-md-5 p-4 bg-white shadow rounded">
            <h3 className="text-brand text-center">Reset your password</h3>
            <div style={hrStyle }></div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group my-2">
                <h5>Enter your E-mail :</h5>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  autoComplete={"off"}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">Send Reset link</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
