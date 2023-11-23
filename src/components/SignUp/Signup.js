// Importing necessary modules
import React, { useState } from 'react';
import { createUserWithEmailAndPassword , updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link , useNavigate  } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './Signup.module.css'

// Defining the Signup component
function Signup() {
  // Defining state variables using the useState hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const[submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  // Defining the handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validating form fields
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      setSubmitButtonDisabled(true);

      // Creating user with email and password using Firebase auth API
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          setSubmitButtonDisabled(false);
          const user = response.user;

          // Updating user profile with display name
          updateProfile(user, { displayName: name })
          console.log(user);
          navigate('/login');
        })
        .catch((error) => {
          setSubmitButtonDisabled(false);
          console.error('Error registering user:', error);
          setError('Error registering user. Please try again.');
        });
    }
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
        setError('Error signing in with Google. Please try again.');
      });
  };

  // Rendering the Signup component
  return (
    <div>
      <div id="container">
        <div id="row">
          <div id="col-md-6">
            <div id="card">
              <form onSubmit={handleSubmit} id="box">
                <h1>Register</h1>
                <p id="text-muted">Please enter your details below!</p>

                {/* Form fields */}
                <input type="text" id="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
                <input type="email" id="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <input type="password" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <input type="password" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />

                {/* Submit button */}
                <input type="submit" value="Register" />

                {/* Error message */}
                {error && <p id="text-danger">{error}</p>}
              </form>
              <div>
                <form onSubmit={handleSubmit}>
                  {/* Form fields */}
                  <button type="submit">Sign up</button>
                </form>
                <button onClick={handleGoogleSignIn}>Sign up with Google</button>
              </div>
              {/* Login link */}
              <p id="text-muted mt-3">Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporting the Signup component
export default Signup;