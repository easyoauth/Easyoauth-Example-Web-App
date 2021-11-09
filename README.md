# Easyoauth-Example-Web-App
Welcome to the Easyoauth example project. Inside this repository you will find documentation on how you can integrate your own front-end web app with your Easyoauth project, as well as a [boilerplate React App](#Example-App-Usage) that demonstrates how you might use the Easyoauth API.

Before you get started, sign in to Easyoauth at [easyoauth.com](https://easyoauth.com).

[Check out how to get started with the Example App](#Example-App-Usage) or continue reading the Easyoauth API documentation below.

## API Documentation
Before diving in, you should have already configured your OAuth app with your chosen provider e.g. Facebook, Slack, Github etc and created a project in Easyoauth that connects it to the provider.
When creating a project, Easyoauth will generate three unique URL's for you:

- An authorization endpoint
- A login endpoint
- A request proxy endpoint

1. The Authorization endpoint is used to trigger the browser to redirect to the OAuth providers login page.
2. Credentials are entered into the form by the user and submitted.
3. The Oauth provider redirects the browser back to your authorization endpoint.
4. The connection is now established between Easyoauth and your OAuth provider.
6. Easyoauth redirects back to your web app and supplies a cookie containing a token that allows your web app to make secure requests to the OAuth providers API using the Request Proxy Endpoint.

### Login endpoint
This endpoint is used to trigger Easyoauth to redirect your web app to the OAuth providers login page.
The URL should be anchored to an HTML link element, like as follows:

```
<a href="https://app.easyoauth.com/connect/:project_id/login">Login</a>
```

You would typically embed this link element in your web app's login page.


### Request Proxy Endpoint
This endpoint allows you to proxy requests through to your OAuth providers API via Easyoauth in order to avoid CORS errors.

```
https://app.easyoauth.com/connect/:project_id/proxy-request/
```

Your web app must make a POST request to this endpoint and must include the token supplied by Easyoauth, as an authorization header.

#### Parameters
```javascript
{
    "url": "https://example.com/some/endpoint", // The API endpoint to proxy to (required)
    "method": "get", // e.g. get, post, put, patch or delete (required)
    "payload": `{ "foo": "Easyoauth bar" }`, // If you have data to send in your request (optional)
    "auth_header_prefix": "token" // Will default to Bearer if not supplied (optional)
}
```

These parameters must be added to the request body.

#### Response
If the request has proxied successfully, then the response from the specified url will be returned.

## Example App Usage
Before you run the example app, first make sure that you have created an OAuth app with your OAuth provider
and that you have created an Easyoauth account and created a project that connects to the OAuth provider.

Clone this repository, ensure you have Node installed on your machine.
Now create a file named `.env` in the repos root with the following contents:

```sh
LOGIN_ENDPOINT=https://app.easyoauth.com/connect/:project_id/authorize/
REQUEST_PROXY_ENDPOINT=https://app.easyoauth.com/connect/:project_id/proxy-request/
```

- LOGIN_ENDPOINT needs to be your Easyoauth projects Login endpoint.
- REQUEST_PROXY_ENDPOINT needs to be your Easyoauth projects Proxy Request endpoint.

These endpoints are generated when you create your Easyoauth project.

You can also add the following optional environment variable that demonstrates the usage of the proxy request endpoint in the example app:

- OAUTH_PROFILE_ENDPOINT an endpoint exposed by your OAuth provider that retrieves information about the current authenticated user.

Now inside the cloned repo run:

```sh
npm install
npm start
```

The example app should now be available in your web browser at `http://localhost:8080`.

