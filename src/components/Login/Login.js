// Import necessary modules and components
import React, { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import './Login.module.css';

// Define the Login component
function Login() {
    // Define state variables for email, password, error message, and submit button status
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
    // Define a navigate function using the useNavigate hook from react-router-dom
    const navigate = useNavigate();

    // Define a function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if email and password fields are filled out
        if (!email || !password) {
            setError('Please fill in all fields');
        } else {
            setError('');
            setSubmitButtonDisabled(true);

            // Use Firebase's signInWithEmailAndPassword function to sign in the user
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setSubmitButtonDisabled(false);
                    // Navigate to the home page upon successful login
                    navigate('/resume-it');
                })
                .catch((error) => {
                    setSubmitButtonDisabled(false);
                    console.error('Error logging in:', error);
                    setError('Invalid email or password. Please try again.');
                });
        }
    };

    // Define a function to handle forgot password form submission
    const handleForgotPassword = (event) => {
        event.preventDefault();

        // Check if email field is filled out
        if (!email) {
            setError('Please enter your email');
        } else {
            setError('');
            setSubmitButtonDisabled(true);

            // Use Firebase's sendPasswordResetEmail function to send a password reset email to the user
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    setSubmitButtonDisabled(false);
                    setError('Password reset email sent. Please check your inbox.');
                })
                .catch((error) => {
                    setSubmitButtonDisabled(false);
                    console.error('Error sending password reset email:', error);
                    setError('Invalid email. Please try again.');
                });
        }
    };

    // Render the Login component
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        {forgotPassword ? (
                            <form onSubmit={handleForgotPassword} className="box">
                                <h1>Forgot Password</h1>
                                {error && <p className="text-danger">{error}</p>}
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <input
                                    type="submit"
                                    name=""
                                    value="Send Password Reset Email"
                                    disabled={submitButtonDisabled}
                                />
                                <p className="text-muted">
                                    Remembered your password? <button onClick={() => setForgotPassword(false)}>Login</button>
                                </p>
                            </form>
                        ) : (
                            <form onSubmit={handleSubmit} className="box">
                                <h1>Login</h1>
                                {error && <p className="text-danger">{error}</p>}
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <input
                                    type="submit"
                                    name=""
                                    value="Login"
                                    disabled={submitButtonDisabled}
                                />
                                <p className="text-muted">
                                    Don't have an account? <Link to="/signup">Sign up</Link>
                                </p>
                                <p className="text-muted">
                                    Forgot your password? <button onClick={() => setForgotPassword(true)}>Reset Password</button>
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the Login component as the default export of this module
export default Login;
