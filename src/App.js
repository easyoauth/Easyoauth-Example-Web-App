import React, { useState } from 'react';
import Auth from './Auth';
import Content from './Content';

import { Router } from '@reach/router';

const App = () => {

    const [accessToken, updateAccessToken] = useState(null); 

    return (
        <Router className="full-height">
            <Content path="/" accessToken={accessToken} />
            <Auth path="authenticate" accessToken={accessToken} updateAccessToken={updateAccessToken} />
        </Router>
    );
}

export default App;