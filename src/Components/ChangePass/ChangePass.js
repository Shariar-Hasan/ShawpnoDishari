import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { changePassword } from "../../Assets/Funtions/FirebaseAuth";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";
const ChangePass = () => {
  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);
  const onSubmit = (data) => {
    changePassword(data.email)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container bg-white shadow rounded">
      <div className="row">
        <div className="wholepageCenterChild">
          <div className="col-md-8 px-4 py-5 border rounded">
            <h3 className="text-brand text-center">Change Your Password</h3>
            <div style={hrStyle}></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group my-2">
                <h5>Enter New Password :</h5>
                <input
                  type={showPass ? "text" : "password"}
                  className="form-control form-control-lg"
                  {...register("pass", { required: true })}
                  placeholder="Password"
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
              <div className="form-group my-2">
                <h5>Repeat Password :</h5>
                <input
                  type={showPass ? "text" : "password"}
                  className="form-control form-control-lg"
                  {...register("rePass", { required: true })}
                  placeholder="Repeat Password"
                  autoComplete={"off"}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
