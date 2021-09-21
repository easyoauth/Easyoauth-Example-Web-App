# Easyoauth-Example-Web-App
Welcome to the Easyoauth example project. Inside this repository you will find documentation on how you can integrate your own front-end web app with your Easyoauth project, as well as a [boilerplate React App](#Example-App-Usage) that demonstrates how you might use the Easyoauth API.

[Check out how to get started with the Example App](#Example-App-Usage) or continue reading the Easyoauth API documentation below.

## API Documentation
Before diving in, you should have already configured your OAuth app with your chosen provider e.g. Facebook, Slack, Github etc and created a project in Easyoauth that connects it to the provider.
When creating a project, Easyaouth will generate three unique URL's for you:

- An authorization endpoint
- An access token endpoint
- An access token refresh endpoint

### Authorization endpoint
This endpoint is used to trigger Easyoauth to redirect your web app to the OAuth providers login page.
The URL should be anchored to an HTML link element, like as follows:

```
<a href="https://app.easyoauth.com/connect/:project_id/authorize">Login</a>
```

You would typically embed this link element in your web app's login page.

### Access Token Endpoint
This endpoint will tell Easyoauth to retrieve an access token from your configured OAuth provider.

```
https://app.easyoauth.com/connect/:project_id/get-access-token/
```

Your web app must make a POST request to this endpoint. This would need to be executed from your web app's page that
you have configured your OAuth provider to redirect to.

#### Parameters
```json
{
    "code": "ABC123"
}
```
This is the short-lived authorization code that the OAuth provider should include as a query parameter in the URL once redirecting from the provider login page back to your web app. You web app must extract this query parameter from the URL and add it to the request body.

#### Response
```json
{
    "access_token": "ABC123",
    "key": "ABC123",
    "id": "123"
}
```

##### access_token
This is the token retrieved from your OAuth provider. Your app can use this token until it expires in subsequent requests to your OAuth providers API.

##### key
This is returned if your OAuth provider supports refresh tokens and must be sent in future requests to the Easyoauth API when wanting to refresh your access token. Your web app should remember this value for refreshing your access token.

##### id
This is returned if your OAuth provider supports refresh tokens and must be sent in future requests to the Easyoauth API when wanting to refresh your access token. Your web app should remember this value for refreshing your access token.

### Refresh Token Endpoint
This endpoint will tell Easyoauth to retrieve a new access token from your configured OAuth provider in exchange for a refresh token.
Your app will have needed to already have used the Access Token Endpoint in order to have retrieved the required parameters.

```
https://app.easyoauth.com/connect/:project_id/refresh-access-token/
```

Your web app must make a POST request to this endpoint.

#### Parameters
```json
{
    "key": "ABC123",
    "id": "123"
}
```

These parameters must be added to the request body.

#### Response
```json
{
    "access_token": "ABC123",
    "key": "ABC123",
    "id": "123"
}
```

## Example App Usage
Before you run the example app, first make sure that you have created an OAuth app with your OAuth provider
and that you have created an Easyoauth account and created a project that connects to the OAuth provider.

Clone this repository, ensure you have Node installed on your machine.
Now create a file named `.env` in the repos root with the following contents:

```sh
AUTHORIZATION_ENDPOINT=https://app.easyoauth.com/connect/:project_id/authorize/
ACCESS_TOKEN_ENDPOINT=https://app.easyoauth.com/connect/:project_id/get-access-token/
```

- AUTHORIZATION_ENDPOINT needs to be your Easyoauth projects Authorization endpoint.
- ACCESS_TOKEN_ENDPOINT needs to be your Easyoauth projects Access Token endpoint.

These endpoints are generated when you create your Easyoauth project.

You can also add the following optional environment variables that demonstrate the usage of the access token in the example app:

- OAUTH_PROFILE_ENDPOINT an endpoint exposed by your OAuth provider that retrieves information about the current authenticated user.
- AUTH_HEADER_PREFIX for example - Bearer or token etc etc, depending on the OAuth provider.

Now inside the cloned repo run:

```sh
npm install
npm start
```

The example app should now be available in your web browser at `http://localhost:8080`.

