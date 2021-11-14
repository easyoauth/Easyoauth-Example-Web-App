import React from 'react';
import Login from './components/Login';
import Content from './components/Content';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import useEasyoauth from './useEasyoauth';

import './css/styles.css';

const App = () => {

    const {
        easyoauthToken,
        error,
        isLoading
    } = useEasyoauth();

    if (error) {
        return <ErrorMessage message={error} />
    }

    if (isLoading) {
        return <Loader />
    }

    if (easyoauthToken) {
        return <Content easyoauthToken={easyoauthToken} />
    }

    return <Login />
}

export default App;