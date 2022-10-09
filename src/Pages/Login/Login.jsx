import React from 'react';
import './Login.css';
import LoginImage from '../../images/login.png';

const Login = () => {
    return (
        <div className="Login-content">
            <div className="Login">
                <div className="left-side">
                    <h1 className="title-register">Parent Login</h1>
                    <img src={LoginImage} alt="" />
                </div>
                <div className="right-side">
                    <form>
                        <h1>Username</h1>
                        <input type="text" required placeholder="Username" />
                        <h1>Password</h1>
                        <input type="text" required placeholder="Password" />
                        <button type="submit" class="send">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
