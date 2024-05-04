const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const axios = require('axios');

const app = express();

// Configure express-session middleware
app.use(session({
  secret: 'your-secret-key', // Replace with your own secret key
  resave: false,
  saveUninitialized: false
}));

// Configure Passport.js with Google OAuth 2.0 Strategy
passport.use(new GoogleStrategy({
    clientID: "1016838417199-t3pbnpq1um01oj5ubn6f2e31rdvf032m.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    // Use accessToken to fetch user data from Google API
    try {
      const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`);
      const userData = response.data;
      return done(null, userData);
    } catch (error) {
      return done(error);
    }
  }
));

// Define route handler for the homepage
app.get('/', (req, res) => {
  // Send a response or render a view here
  res.send('Welcome to the homepage');
});

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// OAuth Routes...

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/login' }),
(req, res) => {
  // Log user information to console
  console.log(req.user);

  // Retrieve user information from the authenticated request
  const { name, email, picture } = req.user;

  // Pass user information to frontend
  res.redirect(`http://localhost:3000/?name=${encodeURIComponent(name)}&email=${email}&picture=${picture}`);
}
);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
