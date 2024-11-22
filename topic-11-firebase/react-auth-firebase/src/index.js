import { AuthProvider } from "./AuthProvider"; // import AuthProvider from AuthProvider.js
import React from "react";
import ReactDOM from "react-dom/client"; // import ReactDOM from react-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"; // import BrowserRouter, Routes, Route from react-router-dom

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Login from "./firebase_setup/Signin";
import Signup from "./firebase_setup/Signup";
import Profile from "./firebase_setup/Profile";

// render the app component to the root element, add paths to pages
  // wrap routes in AuthProvider to allow access to user object
ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<App />} />,
            <Route path="login" element={<Login />} />,
            <Route path="Signup" element={<Signup />} />,
            <Route path="Profile" element={<Profile />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>,
    </React.StrictMode>,
    document.getElementById("root")
  );
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
