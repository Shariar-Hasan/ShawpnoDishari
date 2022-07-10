import React from "react";
import { hrStyle } from "../../Assets/Values/PreDefinedValues";
import TextEditor from "../TextEditor/TextEditor";

const AddNotice = () => {
  return (
    <div className="container bg-white shadow rounded">
      <div className="row">
        <div className="wholepageCenterChild">
          <div className="col-md-8 px-4 py-5 border rounded">
            <h3 className="text-brand text-center">Post Notice</h3>
            <div style={hrStyle}></div>
            <div className="div text-center">
              {/* <TextEditor /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotice;
