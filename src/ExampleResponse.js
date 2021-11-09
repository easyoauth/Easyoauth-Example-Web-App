import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';

const ExampleResponse = ({ token }) => {

    const [exampleData, updateExampleData] = useState(null);
    
    useEffect(() => {
        fetch(process.env.REQUEST_PROXY_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                url: process.env.OAUTH_TEST_ENDPOINT,
                method: 'get'
            }),
        })
        .then(response => response.json())
        .then((response) => updateExampleData(response))
        .catch((error) => alert(error));
    }, []);

    return (
        <>
            {
                exampleData ? (
                    <div className="example">
                        <h2>OAuth Example Response</h2>
                        <ReactJson src={exampleData} />
                    </div>
                ) : 'Loading example data...'
            }
        </>
    )

};

export default ExampleResponse;