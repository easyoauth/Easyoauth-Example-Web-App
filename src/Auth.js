import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

const Auth = ({ accessToken, updateAccessToken }) => {
    useEffect(() => {
        const url = new URL(window.location);
        const code = url.searchParams.get('code');

        fetch(process.env.OAUTH_CLIENT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
        })
        .then(response => response.json())
        .then(({ access_token }) => updateAccessToken(access_token))
        .catch((error) => console.error('Error:', error));
    }, []);

    if (accessToken) {
        navigate ('/');
    }

    return (
        <div>Authenticating...</div>
    );
}

export default Auth;