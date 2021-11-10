import React from 'react';
import ExampleResponse from './ExampleResponse';

const Content = ({ access_key, refresh_key, id }) => (
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
                    !access_key ?
                        <div className="content-inner login">
                            <h1>Easyoauth Example App</h1>
                            <p>A simple React SPA that connects to an Easyoauth project</p>
                            <a href={process.env.AUTHORIZATION_ENDPOINT}>Login with an OAuth Provider</a>
                        </div> :
                        <div className="content-inner">
                            <h1>Congratulations!</h1>
                            <p>You have successfully logged in using your OAuth provider.</p>
                            <p>Your authorization keys are now available in application state.</p>
                            <p>Use these keys to authorize requests to the OAuth providers API via Easyoauths proxy request endpoint.</p>
                            {process.env.OAUTH_TEST_ENDPOINT ? <ExampleResponse access_key={access_key} refresh_key={refresh_key} id={id} /> : null}
                        </div>
                }
            </>
        }
    </div>
);

export default Content;