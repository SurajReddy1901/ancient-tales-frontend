import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loader from "../assets/Position.gif";
function Signup() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setLoading] = useState(false);
  let navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://ancient-tales-backend.onrender.com/user/signup", {
        username: username,
        email: email,
        password: password,
        phone: phone,
      })
      .then((res) => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const submitHandler2 = (event) => {
    event.preventDefault();
    setLoading(true);
    navigate("/signin");
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
          <h1 className="signup-title">Create Account</h1>
          <div className="signup-box">
            <form onSubmit={submitHandler} className="form-details">
              <input
                type="text"
                placeholder="Enter Username..."
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Enter Your Email..."
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter New Password..."
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Enter Your Phone No..."
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button type="submit" className="btn-signup">
                SignUp
              </button>
            </form>
            <form onSubmit={submitHandler2} className="form-details">
              <p>Already SignedUp??</p>
              <button className="btn-signup">SignIn</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
