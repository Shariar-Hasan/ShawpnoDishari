import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import NotAvailable from "./Pages/NotAvailable/NotAvailable";
import Loadingpage from "./Components/Loadingpage/Loadingpage";
import { createContext, useEffect, useState } from "react";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Settings from "./Pages/Settings/Settings";
import { getLocalStorage } from "./Assets/Funtions/functions";
import UserVerified from "./Pages/UserVerified/UserVerified";
import UserRoutes from "./Components/PrivateRoutes/UserRoutes";
import { loginViaUid } from "./Assets/Funtions/FirebaseAuth";
// context
export const UserContext = createContext();
export const LoadingContext = createContext();
function App() {
  const loggedInuser = getLocalStorage("loginuser") || {};
  const [loginuser, setLoginuser] = useState(loggedInuser);
  const [loadingpage, setLoadingpage] = useState(false);
  // useEffect(() => {
  //   if(getLocalStorage("uid")){
  //     loginViaUid(getLocalStorage("uid"));
  //   }
  //   }
  //   , [getLocalStorage("uid")])
  return (
    <UserContext.Provider value={[loginuser, setLoginuser]}>
      <LoadingContext.Provider value={[loadingpage, setLoadingpage]}>
        <BrowserRouter>
          {loadingpage && <Loadingpage />}
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 3000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/settings/*"
              element={
                <UserRoutes>
                  <Settings />
                </UserRoutes>
              }
            />
            <Route
              path="/dashboard/*"
              element={
                <UserRoutes>
                  <Dashboard />
                </UserRoutes>
              }
            />

            <Route
              path="/_auth/action/userVerified"
              element={<UserVerified />}
            />
            <Route path="*" element={<NotAvailable />} />
          </Routes>
        </BrowserRouter>
      </LoadingContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
