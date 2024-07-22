import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loader from "../assets/Position.gif";

function Signin() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  let navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    // console.log(username, password);
    axios
      .post("https://ancient-tales-backend.onrender.com/user/signin", {
        username: username,
        password: password,
      })
      .then((res) => {
        // console.log(res);
        // console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  };
  return (
    <>
      {isLoading && (
        <div>
          <img src={loader} alt="" className="pre-loader-img"/>
        </div>
      )}
      {!isLoading && (
        <div className="signup-container">
          <h1 className="signup-title">Log in</h1>
          <div className="signup-box">
            <form onSubmit={submitHandler} className="form-details">
              <input
                type="text"
                placeholder="Enter Username..."
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter Password..."
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn-signup">
                SignIn
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Signin;
