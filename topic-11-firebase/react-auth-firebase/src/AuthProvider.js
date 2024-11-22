// allows components to use AuthContext to access the user object

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { app } from "./firebase_setup/firebase";

const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
