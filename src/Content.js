import React from 'react';

const Content = ({ accessToken }) => {
    
    let oauthLoginUrl = process.env.REDIRECT_URI;
    
    return (
        <div className="app-wrapper full-height">
            {
                !accessToken ?
                    <a href={oauthLoginUrl}>Login with an OAuth Provider</a> :
                    <div>
                        <p>You have successfully logged in using your OAuth provider</p>
                        <p>Your OAuth access token is: <code>{accessToken}</code></p>
                        <p>Use this access token to authorize requests to the OAuth providers API!</p>
                    </div>
            }
        </div>
    );
}

export default Content;