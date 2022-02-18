import { useState, useEffect } from "react";
import { Form, Input, Divider, Checkbox } from "antd";
import Style from "./Log.module.scss";

import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";
const Log = () => {
  const [type, setType] = useState("signin");
  return (
    <div>
      <div>{type === "signin" ? <SignIn /> : <Register />}</div>
      <Divider dashed={true}></Divider>
      <Divider>or</Divider>
      <button
        onClick={() => {
          setType(type === "signin" ? "register" : "signin");
        }}
        style={{ fontSize: "1em", width: "100%" }}
        className="white-button"
      >
        {type === "register" ? "Sign in" : "Create an account"}
      </button>
    </div>
  );
};

export default Log;
