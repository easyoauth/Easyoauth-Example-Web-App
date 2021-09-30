import React, { useState } from 'react';
import Auth from './Auth';
import Content from './Content';

import { Router } from '@reach/router';

import './css/styles.css';

const App = () => {

    const [connectionCredentials, updateConnectionCredentials] = useState(null); 

    return (
        <Router className="full-height">
            <Content path="/" {...connectionCredentials} />
            <Auth path="authenticate" connectionCredentials={connectionCredentials} updateConnectionCredentials={updateConnectionCredentials} />
        </Router>
    );
}

export default App;