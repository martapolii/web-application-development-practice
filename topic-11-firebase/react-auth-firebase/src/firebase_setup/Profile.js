// create Profile page to redirect users to after sucesfull authentication/login

import { useContext } from "react";
import AuthContext from "../AuthContext";
import { Navigate } from "react-router-dom";
import { signOut } from "./firebase"; //import signOut function from firebase.js

// ensuring user is authenticated and can access this page
// - if user is not authenticated, redirect to login page 
// - contains profile heading + logout button
const Profile = () => {
  const { user } = useContext(AuthContext); 
  const handleLogout = async () => {
    await signOut();
  };
  if (!user) { {/**/}
        return <Navigate replace to="/login" />;
      }
    
  return (
    <>
      <h1>Profile</h1>
      <button onClick={handleLogout}>Logout</button> 
    </>
  );
};

export default Profile;




