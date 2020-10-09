import React from "react";
import "./register.css";

export const Register = () => {
  return (
    <div>
      <form>
        <h2>Sign up</h2>
        <label for="email">email</label>
        <input type="text" name="email" required />
        <div className="email error"></div>
        <label for="password">password</label>
        <input type="password" name="password" required />
        <div className="password error"></div>
        <button>Sign up</button>
      </form>
    </div>
  );
};
