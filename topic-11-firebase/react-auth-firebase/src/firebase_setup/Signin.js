// sign-in form 
// - simialr to sign-up form, but calls signIn function from firebase.js

import { useState } from "react";
import { signIn } from "./firebase"; // import sign in function from firebase.js


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const res = await signIn(email, password);
    if (res.error) seterror(res.error);
  };

  // form to take email + password
  return (
    <>
      {error ? <div>{error}</div> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Login;
