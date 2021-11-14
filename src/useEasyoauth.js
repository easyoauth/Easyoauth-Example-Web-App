import { useEffect, useState } from "react";

const axios = require('axios');

/**
 * A custom hook that makes a request to Easyoauth's authorization endpoint.
 * @returns An Easyoauth token, any error messages and a boolean to indicate the status on the token retrieval 
 */
const useEasyoauth = () => {
    const [ easyoauthToken, updateEasyoauthToken ] = useState(null);
    const [ error, updateError ] = useState(null);
    const [ isLoading, updateLoader ] = useState(true);

    useEffect(() => {

        if (!process.env.LOGIN_ENDPOINT || !process.env.AUTHORIZATION_ENDPOINT) {
            updateError(
                'Looks like you have either made a spelling mistake in your .env file or forgotton it completely.'  +  '\n' + 
                'You must include the values: LOGIN_ENDPOINT and AUTHORIZATION_ENDPOINT.'
            );
        }

        /**
         * If an Oauth provider has redirected the browser here
         * then there should be a "code" query parameter in the URL
         * (as per the access code flow defined in the Oauth2 spec),
         * the value of which is a short-lived access code
         * that Easyoauth will use to generate an Easyoauth token.
         */
        const code = new URL(window.location)
            .searchParams.get('code');
        
        if (code) {
            updateLoader(true);

            axios.post(process.env.AUTHORIZATION_ENDPOINT, { code }) // Sending the code to Easyoauth...
                .then(({ data }) => updateEasyoauthToken(data.easyoauth_token))
                .catch((error) => updateError(error.request.responseText))
                .then(() => {

                    // Remove the code query parameter from the URL
                    window.history.replaceState(
                        null,
                        null,
                        window.location.pathname
                    );

                    updateLoader(false);
                }); 

        } else {
            updateLoader(false);
        }

    }, []);

    return {
        easyoauthToken,
        error,
        isLoading
    }
};

export default useEasyoauth;