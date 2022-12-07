import { Amplify, Auth } from 'aws-amplify';

// Docs: https://docs.amplify.aws/lib/auth/start/q/platform/js/#re-use-existing-authentication-resource
Amplify.configure({
  Auth: {
    region: "us-west-2",

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "us-west-2_XSyXXS01h",

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "...",

    // // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    // mandatorySignIn: false,

    // // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
    // // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
    // signUpVerificationMethod: 'code', // 'code' | 'link'

    // // OPTIONAL - Configuration for cookie storage
    // // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    // cookieStorage: {
    //   // REQUIRED - Cookie domain (only required if cookieStorage is provided)
    //   domain: '.yourdomain.com',
    //   // OPTIONAL - Cookie path
    //   path: '/',
    //   // OPTIONAL - Cookie expiration in days
    //   expires: 365,
    //   // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    //   sameSite: 'strict' | 'lax',
    //   // OPTIONAL - Cookie secure flag
    //   // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
    //   secure: true,
    // },

    // // OPTIONAL - customized storage object
    // storage: MyStorage,

    // // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    // authenticationFlowType: 'USER_PASSWORD_AUTH',

    // // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
    // clientMetadata: { myCustomKey: 'myCustomValue' },

    // // OPTIONAL - Hosted UI configuration
    // oauth: {
    //   domain: 'your_cognito_domain',
    //   scope: [
    //     'phone',
    //     'email',
    //     'profile',
    //     'openid',
    //     'aws.cognito.signin.user.admin',
    //   ],
    //   redirectSignIn: 'http://localhost:3000/',
    //   redirectSignOut: 'http://localhost:3000/',
    //   responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
    // },
  },
});

// You can get the current config object
export const awsAuthConfig = Auth.configure();
