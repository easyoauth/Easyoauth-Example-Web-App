import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';

const ExampleResponse = ({ access_key, refresh_key, id }) => {

    const [profile, updateProfile] = useState(null);
    
    useEffect(() => {
        fetch(process.env.REQUEST_PROXY_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                access_key,
                refresh_key,
                id,
                url: process.env.OAUTH_TEST_ENDPOINT,
                method: 'get'
            }),
        })
        .then(response => response.json())
        .then((response) => updateProfile(response))
        .catch((error) => alert(error));
    }, []);

    return (
        <>
            {
                profile ? (
                    <div className="profile">
                        <h2>OAuth Example Response</h2>
                        <ReactJson src={profile} />
                    </div>
                ) : 'Loading profile...'
            }
        </>
    )

};

export default ExampleResponse;