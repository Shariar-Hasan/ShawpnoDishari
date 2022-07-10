import React from "react";
import { useForm } from "react-hook-form";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";

const SetPrivacy = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      console.log(data)
    };
  return (
    <div className="container bg-white shadow rounded">
      <div className="row">
        <div className="wholepageCenterChild">
          <div className="col-md-8 px-4 py-5 border rounded">
            <h3 className="text-brand text-center">Set your Account Privacy</h3>
            <div style={hrStyle}></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <table class="table">
                    <tbody>
                        <tr>
                            <td className="h6">Who can see your Birth Date ?</td>
                            <td>
                                <select defaultValue={false} className="form-select">
                                    <option value={false}>Anyone</option>
                                    <option value={true}>Only me</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="h6">Who can see your Phone ?</td>
                            <td>
                                <select defaultValue={false} className="form-select">
                                    <option value={false}>Anyone</option>
                                    <option value={true}>Only me</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="h6">Who can see your Donation Info ?</td>
                            <td>
                                <select defaultValue={false} className="form-select">
                                    <option value={false}>Anyone</option>
                                    <option value={true}>Only me</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                <i class="fa fa-paper-plane pr-3" aria-hidden="true"></i> Save info
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPrivacy;
