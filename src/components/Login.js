import React from "react";

const Login = () => (
    <div className="content-inner login">
        <h1>Easyoauth Example App</h1>
        <p>A simple React SPA that connects to an Easyoauth project</p>
        <a href={process.env.LOGIN_ENDPOINT}>Login with an OAuth Provider</a>
    </div>
)

export default Login;