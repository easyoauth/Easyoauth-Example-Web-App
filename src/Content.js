import React from 'react';

const Content = ({ accessToken }) => (
    <div className="content">
        {
            !process.env.REDIRECT_URI ? (
                <div className="success">
                    <h1>Oops!</h1>
                    <p>Looks like you have either made a spelling mistake in your .env file or forgotton it completely.</p>
                    <p>You must include the values: <code>REDIRECT_URI</code> and <code>OAUTH_CLIENT_URL</code>.</p>
                </div>
            ) : 
            <>
                {
                    !accessToken ?
                        <div className="content-inner login">
                            <h1>Easyoauth Example App</h1>
                            <p>A simple React SPA that connects to an Easyoauth project</p>
                            <a href={process.env.REDIRECT_URI}>Login with an OAuth Provider</a>
                        </div> :
                        <div className="content-inner">
                            <h1>Congratulations!</h1>
                            <p>You have successfully logged in using your OAuth provider.</p>
                            <p>Your OAuth access token is: <code>{accessToken}</code></p>
                            <p>Use this access token to authorize requests to the OAuth providers API.</p>
                        </div>
                }
            </>
        }
    </div>
);

export default Content;