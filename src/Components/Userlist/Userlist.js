import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fakeUserlist } from "../../Assets/Values/PreDefinedValues";
import { linkStyle } from "../../Assets/Values/PreDefinedValues";
import Actionmodal from "../Actionmodal/Actionmodal";
import NothingAvailable from "../NothingAvailable/NothingAvailable";
import Seachbar from "../Searchbar/Seachbar";
import { UserContext } from "./../../App";

const Userlist = () => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  const [userlist, setUserlist] = useState([]);
  const [actionProfile, setActionProfile] = useState(null);
  useEffect(() => {
    setUserlist(fakeUserlist);
  }, []);
  const handleSearch = (option, string) => {
    console.log(option, string);
    if (!string) setUserlist(undefined);
    else {
      if (option !== "sd_id") {
        const profileOfFoundUser = fakeUserlist.filter((user) =>
          user.personalInfo[option].toLowerCase().includes(string.toLowerCase())
        );
        setUserlist(profileOfFoundUser);
      } else {
        const profileOfFoundUser = fakeUserlist.filter((user) =>
          user[option].toLowerCase().includes(string.toLowerCase())
        );
        setUserlist(profileOfFoundUser);
      }
    }
  };
  const history = useNavigate();
  const handleViewProfile = (id) => {
    history(`/dashboard/profile/${id}`);
  };
  return (
    <div className="container my-5">
      <Seachbar handleSearch={handleSearch} />
      <Actionmodal actionProfile={actionProfile} />
      <div className="row">
        <div className="col-md-10 bg-white mx-auto py-5 my-5 border-radious-10 shadow  overflow-scroll">
          <table className="table user-table  border table-inverse table-responsive">
            <thead>
              <tr>
                <th>SD_ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>
                  {loginuser?.accountInfo.admin ? "Options" : "View Profile"}
                </th>
                {/* <th>{loginuser?.accountInfo.admin ? "Account Action" : "Account Status"}</th> */}
              </tr>
            </thead>
            <tbody className="">
              {userlist?.length === 0 || userlist === undefined ? (
                <tr>
                  <td colSpan={5}>
                    <NothingAvailable data={"No user available"} />
                  </td>
                </tr>
              ) : (
                userlist.map((user, i) => (
                  <tr key={i}>
                    <td>{user.sd_id}</td>
                    <td>
                      {user.personalInfo?.name || "N/A"}{" "}
                      <sup>
                        {user.accountInfo?.admin && (
                          <span className="text-brand">Admin</span>
                        )}
                      </sup>
                    </td>
                    <td>{user.personalInfo?.email || "N/A"}</td>
                    <td>
                      {
                        true ? 
                        <div className="btn-group dropup">
                        <button
                          type="button"
                          className="btn dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Options
                        </button>
                        <div className="dropdown-menu">
                          <button className="btn  dropdown-item">
                            Add as Admin
                          </button>
                          <button
                            className="btn  dropdown-item"
                            onClick={() => handleViewProfile(user.sd_id)}
                          >
                            View Profile
                          </button>
                          <button className="btn  dropdown-item">
                            Edit Profile
                          </button>
                          <button className="btn  dropdown-item">
                            Send Notification
                          </button>
                          <button className="btn  dropdown-item">
                            Add Donation
                          </button>
                        </div>
                      </div>
                      :
                      <Link style={linkStyle} to={`/dashboard/profile/${user.sd_id}`}>View Profile</Link>
                      }
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
