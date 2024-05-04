import React from 'react';

const OAuthLoginButton = () => {
  const handleLogin = () => {
    // Redirect the user to Google's OAuth authentication endpoint
    window.location.href = 'http://localhost:8000/auth/google'; // Update the URL with your server's OAuth route
  };

  return (
    <button onClick={handleLogin} className="oauth-button">
      Login with Google
    </button>
  );
};

export default OAuthLoginButton;
