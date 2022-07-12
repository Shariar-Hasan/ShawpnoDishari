// Import the functions you need from the SDKs you need

import {
  sendEmailVerification,
  updatePassword,
} from "firebase/auth";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { app } from "./Firebase.config";



export const signUpEmailPass = (email, pass) => {
  return new Promise((res, err) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        return res(userCredential.user);
      })
      .catch((error) => {
        return err(error);
      });
  });
};
export const signInEmailPass = (email, pass) => {
  return new Promise((res, err) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        return res(userCredential.user);
      })
      .catch((error) => {
        return err(error);
      });
  });
};
// export const loginViaUid = (uid) => {
//   return new Promise((res, err) => {
//     const auth = getAuth(app);
//     signInWithEmailAndPassword(auth, uid)
//       .then((userCredential) => {
//         return res(userCredential.user);
//       })
//       .catch((error) => {
//         return err(error);
//       });
//   });
// };
export const changePassword = (newPass) => {
  return new Promise((res, err) => {
    const auth = getAuth(app);

    const user = auth.currentUser;
    updatePassword(user, newPass)
      .then((data) => {
        return res(data);
      })
      .catch((error) => {
        return err(error);
      });
  });
};
export const verifyEmail = (sd_id) => {
  return new Promise((res, err) => {
    const auth = getAuth(app);
    sendEmailVerification(auth.currentUser)
      .then(() => {
        return res("Email sent! Check your email to verify your account.");
      })
      .catch((error) => {
        return err(error);
      });
  });
};
export const resetPassword = (email) => {
  const auth = getAuth(app);
  sendPasswordResetEmail(auth, email);
};

export const verifyUser = () => {
  const auth = getAuth(app);
  sendEmailVerification(auth.currentUser);
};

export const signOutUser = () => {
  const auth = getAuth(app);
  auth.signOut()
};










// var actionCodeSettings = {
//   url: `http://localhost:3001/userVerified?email=${
//     getAuth(app).currentUser.email
//   }&sd_id=${sd_id}`,

//   handleCodeInApp: true,
// };
// getAuth()
//   .currentUser.sendEmailVerification(actionCodeSettings)
//   .then(function () {
//     return res("Email sent! Check your email to verify your account.");
//   })
//   .catch(function (error) {
//     return err(error);
//   });
