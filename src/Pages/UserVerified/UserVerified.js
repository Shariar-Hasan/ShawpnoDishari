import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { toast } from "react-hot-toast";
import { UserContext } from "../../App";
import { makeUserVerified } from "../../Assets/Funtions/FireStore";
const UserVerified = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loginuser, setLoginuser] = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (searchParams.get("email") === loginuser?.personalInfo?.email) {
      if (loginuser?.accountInfo?.verified) {
        toast.success("Your account is already verified");
      } else {
        makeUserVerified(loginuser?.sd_id)
          .then((res) => {
            toast.success("Your account is verified");
            navigate("/dashboard");
          })
          .catch((err) => {
            toast.error("Something went wrong");
            navigate("/settings/verify-user");
          });
      }
    }
  }, []);
  return <div></div>;
};

export default UserVerified;
