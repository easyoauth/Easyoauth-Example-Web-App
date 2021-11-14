import React from 'react';
import ExampleResponse from './ExampleResponse';

const Content = ({ easyoauthToken }) => (
    <div className="content-inner">
        <h1>Congratulations!</h1>
        <p>You have successfully logged in using your OAuth provider.</p>
        <p>Your Easyoauth token is now available in application state.</p>
        <p>Use this token to authorize requests to your OAuth providers API via Easyoauths proxy request endpoint.</p>
        {process.env.OAUTH_TEST_ENDPOINT ? <ExampleResponse easyoauthToken={easyoauthToken} /> : null}
    </div>
);

export default Content;