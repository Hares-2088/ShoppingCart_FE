import React, { useState } from "react";
import axios from "axios"; // npm i axios
import OAuthLoginButton from "../Components/OAuthLoginButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement API call to authenticate user
    axios
      .post(`http://localhost:8000/api/ext/loginUser`, { username, password })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          let userString = JSON.stringify(response.data[0]);
          sessionStorage.setItem("user", userString);
          onLoginSuccess(); // Call onLoginSuccess when login is successful
        } else if (response.status === 204) {
          alert(`Invalid credentials`);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card bg-light">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    <FontAwesomeIcon icon={faUser} /> Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    placeholder="Enter your username"
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <FontAwesomeIcon icon={faLock} /> Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mt-3">
            <OAuthLoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
