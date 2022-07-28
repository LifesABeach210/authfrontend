
import React, { useState } from "react";
import { registerUser, loginUser } from "../Auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = ({ authLoading, setIsAuthLoading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h2>Registration Page</h2>
      <label>Username: </label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
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
          console.log("username: ", username, " password: ", password);
          const isUserRegistered = await registerUser(username, password);
          console.log("after register user call");
          if (isUserRegistered) {
  
            const isUserLoggedIn = await loginUser(username, password);

            if (isUserLoggedIn) {

              setIsAuthLoading(false);
              navigate("/");
            }
          }
        }}
      >
        Signup
      </button>
    </div>
  );
};

export default RegistrationPage;