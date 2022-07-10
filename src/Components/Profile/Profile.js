import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakeUserlist } from "../../Assets/Values/PreDefinedValues";
import Seachbar from "../Searchbar/Seachbar";
import NothingAvailable from "./../NothingAvailable/NothingAvailable";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const profileOfUser = fakeUserlist.find((user) => user.sd_id === id);
    console.log(profileOfUser);
    setProfile(profileOfUser);
  }, []);
  const handleSearch = (option, string) => {
    console.log(option, string);
    if (!string) setProfile(undefined);
    else {
      if (option !== "sd_id") {
        const profileOfFoundUser = fakeUserlist.find((user) =>
          user.personalInfo[option].toLowerCase().includes(string.toLowerCase())
        );
        setProfile(profileOfFoundUser);
      } else {
        const profileOfFoundUser = fakeUserlist.find((user) =>
          user[option].toLowerCase().includes(string.toLowerCase())
        );
        setProfile(profileOfFoundUser);
      }
    }
  };
  return (
    <div className="container-fluid">
      <Seachbar handleSearch={handleSearch} />
      <div className="row my-4">
        {profile ? (
          <div className="col-md-12 py-5 border-radious-10 shadow">
            <div className="avater">
              <img
                src={profile?.personalInfo?.avater}
                alt={profile?.personalInfo?.name}
              />
            </div>
            <div className="profile-info">
              <div className="row">
                <div className="col-sm-6 mx-auto">
                  <table className="table table-inverse border  overflow-scroll">
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          {" "}
                          <h5 className="text-center">User Info</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>SD ID : </td>
                        <td>{profile?.sd_id}</td>
                      </tr>
                      <tr>
                        <td>Name : </td>
                        <td>{profile?.personalInfo?.name}</td>
                      </tr>
                      <tr>
                        <td>Email : </td>
                        <td>{profile?.userPrivacy?.email
                            ? <span className="text-danger">Email Hidden by User</span>
                            : profile?.personalInfo?.phone}</td>
                      </tr>
                      <tr>
                        <td>Phone : </td>
                        <td>
                          {profile?.userPrivacy?.phone
                            ? <span className="text-danger">Phone Number Hidden by User</span>
                            : profile?.personalInfo?.email}
                        </td>
                      </tr>
                      <tr>
                        <td>Birth Date : </td>
                        <td>{profile?.userPrivacy?.birthDate
                            ? <span className="text-danger">Birth Date Hidden by User</span>
                            : profile?.personalInfo?.birthDate}</td>
                      </tr>

                      <tr>
                        <td colSpan={2}>
                          <h5 className="text-center">Donation Info</h5>
                        </td>
                      </tr>
                      <tr>
                        <td> Total Donated : </td>
                        <td>
                          {profile?.donationInfo?.reduce(
                            (total, don) => total + +don.amount,
                            0
                          )}{" "}
                          TK
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-md-8 mx-auto my-5">
            <NothingAvailable
              data={"No User Found. Use Searchbar to search user"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
