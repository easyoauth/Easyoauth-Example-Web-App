import React from 'react';

const Content = ({ accessToken }) => (
    <div>
        {
            !accessToken ?
                <a href={process.env.REDIRECT_URI}>Login with an OAuth Provider</a> :
                <div>
                    <p>You have successfully logged in using your OAuth provider</p>
                    <p>Your OAuth access token is: <code>{accessToken}</code></p>
                    <p>Use this access token to authorize requests to the OAuth providers API!</p>
                </div>
        }
    </div>
);

export default Content;