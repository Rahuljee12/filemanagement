import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import "../../App.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div className="title">Sign Up</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          type="email"
          value={email}
          placeholder="Username"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#FAD8FF",
            color: "red",
            fontWeight: "bold",
            width: "10vw",
          }}
        >
          Register
        </Button>
      </div>
      <div className="footer1">
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </div>
    </div>
  );
}
