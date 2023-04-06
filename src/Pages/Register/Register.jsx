import React, { useRef, useState } from "react";
import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const emailRef = useRef();
  const passRef = useRef();
  const handleSubmit = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = (e) =>{
    e.preventDefault();
    setPassword(passRef.current.value);
  }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
            className="logo"
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              name=""
              placeholder="email address"
              ref={emailRef}
            />
            <button className="registerButton" onClick={handleSubmit}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              name=""
              placeholder="password"
              ref={passRef}
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
