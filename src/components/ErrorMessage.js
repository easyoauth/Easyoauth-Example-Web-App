import React from "react";

const ErrorMessage = ({ message }) => (
    <div className="content-inner">
        <h1>An error has occured</h1>
        <p>{message}</p>
        <a href="/">Reload</a>
    </div>
)

export default ErrorMessage;