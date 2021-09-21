import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

const Auth = ({ accessToken, updateAccessToken }) => {
    useEffect(() => {
        const url = new URL(window.location);
        const code = url.searchParams.get('code');

        fetch(process.env.ACCESS_TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
        })
        .then(response => response.json())
        .then((response) => {
            if (!response.access_token) {
                throw Error (response);
            }
            updateAccessToken(response.access_token);
        })
        .catch((error) => alert(error));
    }, []);

    if (accessToken) {
        navigate ('/');
    }

    return (
        <div className="content">
            <div className="content-inner">
                <p>Trying to retrieve your access token...</p>
                <a href={process.env.REDIRECT_URI}>Try Again</a>
            </div>
        </div>
    );
}

export default Auth;