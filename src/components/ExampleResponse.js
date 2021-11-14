import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';

const axios = require('axios');

const ExampleResponse = ({ easyoauthToken }) => {

    const [response, updateResponse] = useState(null);
    
    useEffect(() => {

        const headers = {
            'Authorization': easyoauthToken
        }

        const proxyPayload = {
            url: process.env.OAUTH_TEST_ENDPOINT,
            method: 'get',
        }

        /**
         * Sending a request to your Oauth providers API
         * via the Easyoauth Request Proxy endpoint.
         */
        axios.post(process.env.REQUEST_PROXY_ENDPOINT, proxyPayload, { headers })
        .then(({ data }) => updateResponse(data))
        .catch((error) => alert(error.request.responseText));
    }, []);

    return (
        <>
            {response ? (
                <div className="example-response">
                    <h2>OAuth Example Response</h2>
                    <ReactJson src={response} />
                </div>
            ) : 'Loading example response...'}
        </>
    )

};

export default ExampleResponse;