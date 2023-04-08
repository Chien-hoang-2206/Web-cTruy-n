import React, { useState } from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import { Nomal } from "../../../components/TextField/TestComponents";
function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        
        <div className="Boxinput">
          <Icon icon="ic:baseline-email" />
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
        </div>
        <label htmlFor="password">Password</label>

        <div className="Boxinput">
        <Icon icon="mdi:password" />
          <input
            className="input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
        </div>

        <button className="Sunmit" type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>

      <div className="link-orther">
        <div className="OR">
          <Nomal>OR</Nomal>
        </div>
        <div className="icon-link">
        <i class="fa-brands fa-facebook" style={{color: "#075ced" }}></i>
        <i class="fa-brands fa-google-plus" style={{color: "#ff0505", marginLeft: "5vh"}}></i>
        </div>
      </div>
    </>
  );
}

export default Login;
