import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { app } from "./Firebase.config";

const db = getFirestore(app);
// creating data section
export const createANewUser = (user) => {
  return new Promise((res, err) => {
    setDoc(doc(db, "users", user.sd_id), user);
    getDoc(doc(db, "users", user.sd_id))
      .then((data) => {
        return res(data.data());
      })
      .catch((err) => {
        return err(err);
      });
  });
};

// reading data section
export const getUserProfile = (email) => {
  return new Promise((res, err) => {
    getDocs(
      query(collection(db, "users"), where("personalInfo.email", "==", email))
    ).then((data) => {
      data.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        return res(doc.data());
      });
      //
    });
  });
};
export const getUserList = () => {
  return new Promise((res, err) => {
    let userList = [];
    getDocs(collection(db, "users"))
      .then((data) => {
        data.forEach((doc) => {
          userList.push(doc.data());
        });
        return res(userList);
      })
      .catch((err) => {
        return err(err);
      });
  });
};

// update data section
export const makeUserVerified = (sd_id) => {
  return new Promise((res, err) => {
    updateDoc(doc(db, "users", sd_id), {
      "accountInfo.verified": true,
    })
      .then((data) => {
        return res(data);
      })
      .catch((error) => {
        return err(error);
      });
  });
};

export const updatePersonalInfo = (data, sd_id) => {
  return new Promise((res, err) => {
    updateDoc(doc(db, "users", sd_id), {
      personalInfo: data,
    })
      .then((data) => {
        return res(data);
      })
      .catch((error) => {
        return err(error);
      });
  });
};
export const singleUpdates = (path, pathValue, sd_id) => {
  return new Promise((res, err) => {
    updateDoc(doc(db, "users", sd_id), {
      path: pathValue,
    })
      .then((data) => {
        return res(data);
      })
      .catch((error) => {
        return err(error);
      });
  });
};
