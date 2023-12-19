import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css";
import "../../App.css";
import { Button } from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    let item = { email, password };
    try {
      const response = await fetch(
        "https://filemanagementsystem-aa3l.onrender.com/dms/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      if (result.status === "success") {
        navigate("./home");
      }
      // setData(result);
    } catch (error) {
      //  setError(error.message);
    } finally {
      //setLoading(false);
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div className="title">Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          type="email"
          value={email}
          placeholder="Email/Username"
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
          Log in
        </Button>
      </div>
      <div className="footer1">
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
      </div>
    </div>
  );
}
