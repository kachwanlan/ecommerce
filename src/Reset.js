import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { a } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "./firebase";
import Login from "./Login";
import "./Reset.css";


function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
      if (loading) {
          return;
    };
      if (user) {
          return <Login />;
    };
  }, [user, loading]);
  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={() => sendPasswordResetEmail(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <a href="/register">Register</a> now.
        </div>
      </div>
    </div>
  );
}
export default Reset;