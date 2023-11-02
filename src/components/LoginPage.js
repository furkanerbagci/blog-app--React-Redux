import React from "react";
import {login} from '../actions/auth'
import '../styles/index.css'

export const LoginPage = () =>(
    <div className="login_page">
        <div className="login_container">
            <h3 className="text-center pb-3 mb-3 border-bottom border-2">Welcome to Blog-App</h3>
            <button onClick={login} className="btn btn-primary login_button">Login</button>
        </div>
    </div>
)

export default LoginPage;