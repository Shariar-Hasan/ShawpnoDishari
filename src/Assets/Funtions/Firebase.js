// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCdovY9uD1rby1vLqht5uFxiUzSRnMo5Us",
  authDomain: "shawpnodishari.firebaseapp.com",
  projectId: "shawpnodishari",
  storageBucket: "shawpnodishari.appspot.com",
  messagingSenderId: "376704117930",
  appId: "1:376704117930:web:c0ece2694f18fc31e074d3",
  measurementId: "G-HPS331VKNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const consol = () => {
//   console.log(auth);
// };

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
export const googleSignIn = (newPass) => {
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
export const changePassword = () => {
  return new Promise((res, err) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        return res(result.user);
        // ...
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
