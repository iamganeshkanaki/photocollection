import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from "../../Static/Images/mainLogo.svg";
import "../SignUp/SignUp.css";

function SignIn() {
    return (
        <>
            <div className="top-border"></div>
            <div className="container">
                <img src={mainLogo} className='mlogo' alt="Main Logo" />
                <form className="signin-form" method='post'>
                    <h2 className='title'>Sign-In</h2>
                    {/* <div className="form-group">
                    <input type="text" placeholder='Username' name="username" id="username" />
                </div> */}
                    <div className="form-group">
                        <input type="email" placeholder='Email' name="email" id="email" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder='Password' name="password" id="password" />
                    </div>
                    <button type="submit">Get-In</button>
                </form>
                <div className="signup-link">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </>
    );
}

export default SignIn;
