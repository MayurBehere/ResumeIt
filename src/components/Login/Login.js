// Import necessary modules and components
import React, { useState } from "react";
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./login.css";

// Define the Login component
function Login() {
    // Define state variables for email, password, error message, and submit button status
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
    const [emailAuthSuccess, setEmailAuthSuccess] = useState(false);
    const [googleAuthSuccess, setGoogleAuthSuccess] = useState(false);
    // Define a navigate function using the useNavigate hook from react-router-dom
    const navigate = useNavigate();

    const handleGoBack = () => {
        // Handle the back button click event here`
        window.history.back();
    };

    // Define a function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if email and password fields are filled out
        if (!email || !password) {
            setError("Please fill in all fields");
        } else {
            setError("");
            setSubmitButtonDisabled(true);

            // Use Firebase's signInWithEmailAndPassword function to sign in the user
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    setEmailAuthSuccess(true);
                    if (googleAuthSuccess) {
                        navigate("/Resume-it");
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Error signing in:", error);
                    setError("Invalid email or password. Please try again.");
                    setSubmitButtonDisabled(false);
                });
        }
    };

    // Define a function to handle Google sign in
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setGoogleAuthSuccess(true);
                if (emailAuthSuccess) {
                    navigate("/Resume-it");
                } else {
                    navigate("/Resume-it");
                }
            })
            .catch((error) => {
                console.error("Error signing in with Google:", error);
                setError("Error signing in with Google. Please try again.");
            });
    };

    // Define a function to handle forgot password link click
    const handleForgotPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Password reset email sent");
                setForgotPassword(false);
                setError("Password reset email sent. Please check your inbox.");
            })
            .catch((error) => {
                console.error("Error sending password reset email:", error);
                setError("Error sending password reset email. Please try again.");
            });
    };

    return (
        <div className="login-container" > 
         <div className='Aboutus'>
            <button onClick={handleGoBack} className='bt1' style={{ position: 'absolute', top: '10px', left: '10px',padding:'10px 20px' }}>Back</button>
        </div>
            <form onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <br />
                <button
                    className="bt2"
                    type="submit"
                    disabled={submitButtonDisabled}
                >
                    Log in
                </button>
            </form>
            <p
                style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
            >
                <Link to="/signup">Don't have an account? Sign up</Link>
            </p>
            <p
                style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
            >
                <div className="aloo">
                    <button onClick={() => setForgotPassword(true)} className="bt1">
                        Forgot password?
                    </button>

                    <button onClick={handleGoogleSignIn} className="bt1">
                        Log in with Google
                    </button>
                </div>
            </p>
            {forgotPassword && (
                <div>
                    <p>Enter your email address to reset your password:</p>
                    <form onSubmit={handleForgotPassword} className="forgot">
                        <label>
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </label>
                        <br />
                        <button type="submit">Reset password</button>
                    </form>
                </div>
            )}

            {error && <p>{error}</p>}
        </div>
    );
}

export default Login;
