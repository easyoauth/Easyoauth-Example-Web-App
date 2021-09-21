import React, { useEffect, useState } from 'react';

const Profile = ({ accessToken }) => {

    const [profile, updateProfile] = useState(null);
    
    useEffect(() => {
        fetch(process.env.OAUTH_PROFILE_ENDPOINT, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${process.env.AUTH_HEADER_PREFIX || ''} ${accessToken}`
            },
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
                        <h2>OAuth Provider Profile</h2>
                        <ul>{Object.keys(profile).filter((key) => typeof profile[key] !== 'object').map((key) => <li key={key}><strong>{key}: </strong>{profile[key]}</li>)}</ul>
                    </div>
                ) : 'Loading profile...'
            }
        </>
    )

};

export default Profile;