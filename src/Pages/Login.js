import React, { useState } from "react";
import { loginUser } from "../Auth";
import { useNavigate } from "react-router-dom";

const Login = ({ authLoading, setIsAuthLoading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidMssg, setInvalidMss] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login Page</h2>
      <label>Username: </label>
      <input
        type="text"
        value={username}//input pre state 
        onChange={(e) => {
          setUsername(e.target.value);//set state var 
        }}
      ></input>
      <br />
      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={async () => {
          setIsAuthLoading(true);
          const isUserLoggedIn = await loginUser(username, password);
          setIsAuthLoading(false);
         console.log(isUserLoggedIn);
          if (isUserLoggedIn) {
           
           
            navigate("/");
          }
          setInvalidMss(
            "Your username and/or password is incorrect. Please try again."
          );
        }}
      >
        Login
      </button>
      <br />

    </div>
  );
};

export default Login;