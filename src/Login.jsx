import { GoogleOAuthProvider, GoogleLogin, useGoogleOneTapLogin} from '@react-oauth/google';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";

export const Login = () =>{
    const responseGoogle = (response) => {
        //console.log(response);
         const userObject = jwt_decode(response.credential);
         console.log(userObject);
         localStorage.setItem('user', JSON.stringify(userObject));
         const { name, sub, picture,email } = userObject;
         const doc = {
           _id: sub,
           _type: 'user',
           userName: name,
           image: picture,
           email:email,
         };
            console.log(doc)
       }
    const onSignInSuccess = (response) => {
        console.log('Google Sign-In Success:', response);
        responseGoogle(response);
        // Handle the successful sign-in here
      };
    
      const onSignInFailure = (error) => {
        console.error('Google Sign-In Error:', error);
        // Handle sign-in errors here
      };
      useGoogleOneTapLogin({
        onSuccess: credentialResponse => {
          console.log(credentialResponse);
          responseGoogle(credentialResponse);
        },
        onError: () => {
          console.log('Login Failed');
        },
      });

    return(
    <GoogleLogin onSuccess={onSignInSuccess} onFailure={onSignInFailure} cookiePolicy="single_host_origin" />
)}