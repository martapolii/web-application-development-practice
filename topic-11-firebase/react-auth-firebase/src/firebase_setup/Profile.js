// create Profile page to redirect users to after sucesfull authentication/login

import { useContext } from "react";
import AuthContext from "../AuthContext";
import { Navigate } from "react-router-dom";
import { signOut } from "./firebase"; //import signOut function from firebase.js

const Profile = () => {
  const { user } = useContext(AuthContext); {/*ensuring user is authenticated and can access this page*/}
  const handleLogout = async () => {
    await signOut();
  };
  if (!user) { {/*if user is not authenticated, redirect to login page */}
        return <Navigate replace to="/login" />;
      }
    
  return (
    <>
      <h1>Profile</h1>
      <button onClick={handleLogout}>Logout</button> {/*profile heading + logout button */}
    </>
  );
};

export default Profile;
