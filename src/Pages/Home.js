import React from "react";
import { useState } from "react";
import { getUserToken } from "../Auth";

const Home = () => {
  const [secretMessage, setSecretMessage] = useState("");
  const validatedUser = getUserToken();

  const requestSecretMessage = async () => {
    const url = `${process.env.REACT_APP_URL_ENDPOINT}/auth/validate-token`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        [process.env.REACT_APP_TOKEN_HEADER_KEY]: getUserToken(),
      },
    });
    const responseJSON = await response.json();
    setSecretMessage(responseJSON.message);
    return responseJSON;
  };

  return (
    <div>
     <p>hello</p>
    </div>
  );
};

export default Home;