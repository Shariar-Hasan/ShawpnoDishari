import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";

const SetPrivacy = () => {
  const { register, handleSubmit, reset } = useForm();
  const [privacyData, setPrivacyData] = useState();
  const [loginuser, setLoginuser] = useContext(UserContext);
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    setPrivacyData({
      phone: loginuser?.userPrivacy.phone,
      birthDate: loginuser?.userPrivacy.birthDate,
      d_info: loginuser?.userPrivacy.d_info,
    });
  }, []);
  useEffect(() => {
    reset(privacyData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [privacyData]);
  return (
    <div className="container bg-white shadow rounded">
      <div className="row">
        <div className="wholepageCenterChild">
          <div className="col-md-8 px-4 py-5 border rounded">
            <h3 className="text-brand text-center">Set your Account Privacy</h3>
            <div style={hrStyle}></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="h6">Who can see your Birth Date ?</td>
                      <td>
                        <select
                          defaultValue={false}
                          className="form-select"
                          {...register("birthDate", { required: true })}
                        >
                          <option value={false}>Anyone</option>
                          <option value={true}>Only me</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="h6">Who can see your Phone ?</td>
                      <td>
                        <select
                          defaultValue={false}
                          className="form-select"
                          {...register("phone", { required: true })}
                        >
                          <option value={false}>Anyone</option>
                          <option value={true}>Only me</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="h6">Who can see your Donation Info ?</td>
                      <td>
                        <select
                          defaultValue={false}
                          className="form-select"
                          {...register("d_info", { required: true })}
                        >
                          <option value={false}>Anyone</option>
                          <option value={true}>Only me</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                <i className="fa fa-paper-plane pr-3" aria-hidden="true"></i> Save
                info
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPrivacy;
