import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import NotAvailable from "./Pages/NotAvailable/NotAvailable";
import Loadingpage from "./Components/Loadingpage/Loadingpage";
import { createContext, useState } from "react";
import { userDetails } from "./Assets/Values/PreDefinedValues";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Settings from "./Pages/Settings/Settings";

// context
export const UserContext = createContext();
export const LoadingContext = createContext();
function App() {
  const [loginuser, setLoginuser] = useState(userDetails);
  const [loadingpage, setLoadingpage] = useState(false);

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
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="*" element={<NotAvailable />} />
          </Routes>
        </BrowserRouter>
      </LoadingContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
