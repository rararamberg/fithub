import { useState } from "react";
import "./Register.css";
import Button from 'react-bootstrap/Button'

function Register(props) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  const { username, email, first_name, last_name, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="register-div">
      <h2>Create Account</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <label>
          <p>First Name</p>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          <p>Last Name</p>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          <p>Email</p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          <p>Username</p>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        

        <Button variant="dark" type="submit">Sign Up</Button >
      </form>
    </div>
  );
}

export default Register;
