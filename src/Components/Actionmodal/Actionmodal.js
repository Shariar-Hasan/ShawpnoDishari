import React from "react";
import { useNavigate } from "react-router-dom";

const Actionmodal = ({ actionProfile }) => {
  const history = useNavigate();
  const handleViewProfile = (id) => {
    document.getElementById("action-modal-close-btn").click();
    history(`/dashboard/profile/${id}`);
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Apply Action to {actionProfile?.personalInfo.name}(
              {actionProfile?.sd_id})
            </h5>
            <button
              id="action-modal-close-btn"
              type="button"
              className="close btn btn-outline-primary"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                {" "}
                <i className="fa fa-times" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="modal-body">
            <button className="btn btn-outline-primary">Add as Admin</button>
            <button
              className="btn btn-outline-primary"
              onClick={() => handleViewProfile(actionProfile?.sd_id)}
            >
              View Profile
            </button>
            <button className="btn btn-outline-primary">Edit Profile</button>
            <button className="btn btn-outline-primary">
              Send Notification
            </button>
            <button className="btn btn-outline-primary">Add Donation</button>
          </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Actionmodal;
