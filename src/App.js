import React, { useEffect, useState } from 'react';
import ExampleResponse from './ExampleResponse';
import Cookies from 'js-cookie';

import './css/styles.css';

const App = () => {

    const [easyoauthToken, updateEasyoauthToken] = useState(null);

    useEffect(() => {
        const token = Cookies.get('easyoauth_token')
        if (token) {
            updateEasyoauthToken(token)
        }
    }, [])

    return (
        <div className="content">
        {
            !process.env.LOGIN_ENDPOINT ? (
                <div className="success">
                    <h1>Oops!</h1>
                    <p>Looks like you have either made a spelling mistake in your .env file or forgotton it completely.</p>
                    <p>You must include the value: <code>LOGIN_ENDPOINT</code>.</p>
                </div>
            ) : 
            <>
                {
                    !easyoauthToken ?
                        <div className="content-inner login">
                            <h1>Easyoauth Example App</h1>
                            <p>A simple React SPA that connects to an Easyoauth project</p>
                            <a href={process.env.LOGIN_ENDPOINT}>Login with an OAuth Provider</a>
                        </div> :
                        <div className="content-inner">
                            <h1>Congratulations!</h1>
                            <p>You have successfully logged in using your OAuth provider.</p>
                            <p>Your authorization token is now available in application state.</p>
                            <p>Use this token to authorize requests to the OAuth providers API via Easyoauths proxy request endpoint.</p>
                            {process.env.OAUTH_TEST_ENDPOINT ? <ExampleResponse token={easyoauthToken} /> : null}
                        </div>
                }
            </>
        }
    </div>
    );
}

export default App;