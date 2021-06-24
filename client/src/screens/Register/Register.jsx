import React, { useState } from "react";

function Register(props) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  const { username, email, first_name, last_name, password } = formData;
  // const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   handleRegister(formData);
      // }}
      >
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={first_name}
          onChange={handleChange}
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={last_name}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={handleChange} />
        <br />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br />

        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
