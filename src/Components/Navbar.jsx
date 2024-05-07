import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the desired icons

const Navbar = () => {
  // Parse user information from URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const pictureUrl = urlParams.get('picture');
  const name  = urlParams.get('name')

  return (
    <nav className="navbar navbar-expand-lg bg-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SwiftCart</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} /> {/* Use the shopping cart icon */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <FontAwesomeIcon icon={faUser} /> {/* Use the user icon */}
              </Link>
            </li>
          </ul>
        </div>
        {pictureUrl && (
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
