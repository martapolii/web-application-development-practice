// create Profile page to redirect users to after sucesfull authentication/login

import { signOut } from "./firebase"; //import signOut function from firebase.js

const Profile = () => {

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <>
      <h1>Profile</h1><button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
