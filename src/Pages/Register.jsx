import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const RegisterPage = ({ history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Verify connection and get CSRF token
            await axios.get("http://localhost:8001/api/sanctum/csrf-cookie");

            // Register the user
            const response = await axios.post('http://localhost:8001/api/ext/setUser', {
                name: username,
                password: password,
                email: email
            });

            window.location.href = "/login"
        
        } catch (error) {
            // Handle error
            console.error('Error registering user:', error);
            setError('Error registering user. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-4">Register</h1>
                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
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
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        placeholder="Enter your email"
                                        onChange={(event) => setEmail(event.target.value)}
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
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                    <p className="mt-3 text-center">Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
