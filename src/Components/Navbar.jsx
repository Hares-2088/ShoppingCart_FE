import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the desired icons

const Navbar = () => {
  // Parse user information from URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  let pictureUrl = urlParams.get('picture');
  let name = urlParams.get('name');

  // If URL parameters are not present, retrieve user information from session storage
  if (!pictureUrl || !name) {
    const userString = sessionStorage.getItem("user");
    let user = null;
    
    try {
      user = userString ? JSON.parse(userString) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
    
    // Check if user exists before accessing its properties
    if (user && user.name) {
      name = user.name;
    }
    
    // Check if email exists and is a string before using it
    if (user && typeof user.email === "string") {
      pictureUrl = user.email.replace(/^"(.*)"$/, '$1');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SwiftCart</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" /> {/* Use the shopping cart icon */}
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/login">
                <FontAwesomeIcon icon={faUser} size="2x" /> {/* Use the user icon */}
              </Link>
            </li>
          </ul>
        </div>
        {name && (
          <div className="user-profile ml-3 d-flex align-items-center">
            <span className="ml-2 me-3">{name}</span>
            <img src={pictureUrl} alt="Profile" className="rounded-circle" style={{ width: '40px', height: '40px' }} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
