import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Button from 'react-bootstrap/Button';

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login-div">
      <h2>Welcome</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <label>
          <p>Username</p>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className="register-link-login-button-div">
          <Link to="/register">need to register?</Link>
          <Button variant="dark" type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
