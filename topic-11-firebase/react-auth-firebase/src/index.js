import { AuthProvider } from "./AuthProvider"; // import AuthProvider from AuthProvider.js
import React from "react";
import ReactDOM from "react-dom/client"; // import ReactDOM from react-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"; // import BrowserRouter, Routes, Route from react-router-dom

import App from "./App";
import Login from "./firebase_setup/Signin";
import Signup from "./firebase_setup/Signup";
import Profile from "./firebase_setup/Profile";

// ReactDOM.render() method is not compatible with new version of React, replaced with createRoot() method
// get root element from the DOM
const rootElement = document.getElementById("root");
// create root element
const root = ReactDOM.createRoot(rootElement);


// render the app component to the root element, add paths to pages
  // wrap routes in AuthProvider to allow access to user object
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="Profile" element={<Profile />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
  


