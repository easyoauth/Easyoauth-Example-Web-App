import React from 'react';
import Profile from './Profile';

const Content = ({ accessToken }) => (
    <div className="content">
        {
            !process.env.AUTHORIZATION_ENDPOINT ? (
                <div className="success">
                    <h1>Oops!</h1>
                    <p>Looks like you have either made a spelling mistake in your .env file or forgotton it completely.</p>
                    <p>You must include the values: <code>AUTHORIZATION_ENDPOINT</code> and <code>ACCESS_TOKEN_ENDPOINT</code>.</p>
                </div>
            ) : 
            <>
                {
                    !accessToken ?
                        <div className="content-inner login">
                            <h1>Easyoauth Example App</h1>
                            <p>A simple React SPA that connects to an Easyoauth project</p>
                            <a href={process.env.AUTHORIZATION_ENDPOINT}>Login with an OAuth Provider</a>
                        </div> :
                        <div className="content-inner">
                            <h1>Congratulations!</h1>
                            <p>You have successfully logged in using your OAuth provider.</p>
                            <p>Your OAuth access token is now available in application state.</p>
                            <p>Use this access token to authorize requests to the OAuth providers API.</p>
                            {process.env.OAUTH_PROFILE_ENDPOINT ? <Profile accessToken={accessToken} /> : null}
                        </div>
                }
            </>
        }
    </div>
);

export default Content;