import React, { useState } from "react";

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState({
    firstname: "",
    lastname: "",
    role: "",
    email: "",
    username: "",
    password: "",
  });

  const handleRegisterFormDataChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };
  console.log(registerFormData)


  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://bumblebeat.onrender.com/register", {
      method: "POST",
      body: JSON.stringify(registerFormData),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  return (
    <main>
      <div className="register">
        <div className="register-left">
          <h1>Register</h1>
          <img src="/public/images/bumblebeat-logo.png" />
        </div>
        <div className="register-right">
          <form
            id="register"
            className="register-form"
            onSubmit={handleFormSubmit}
          >
            <label>First Name*</label>
            <br />
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              value={registerFormData.firstname}
              onChange={handleRegisterFormDataChange}
              required
            />
            <br />
            <label>Last Name</label>
            <br />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              value={registerFormData.lastname}
              onChange={handleRegisterFormDataChange}
              required
            />
            <br />
            <label>Listener or Artist*</label>
            <br />
            <div>
              <input
                type="radio"
                id="listener"
                name="role"
                value="listener"
                onChange={handleRegisterFormDataChange}
              />
              <label htmlFor="listener">Listener</label>
            </div>
            <br />
            <div>
              <input type="radio" 
              id="artist" 
              name="role" 
              value="artist"
              onChange={handleRegisterFormDataChange}
              />
              <label htmlFor="artist">Artist</label>
            </div>
            <br />
            <br />
            <label>Email*</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail"
              value={registerFormData.email}
              onChange={handleRegisterFormDataChange}
              required
            />
            <br />
            <label>Username*</label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={registerFormData.username}
              onChange={handleRegisterFormDataChange}
              required
            />
            <br />
            <br />
            <label>Password*</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={registerFormData.password}
              onChange={handleRegisterFormDataChange}
              required
            />

            <br />
            <br />
            <button type="submit" value="Sign Up!">
              Sign Up!
            </button>
          </form>
        </div>
        <div className="google-login">
          <a href="/auth/google">
            <button>Sign up with Google</button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Register;
