import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, useGoogleOneTapLogin} from '@react-oauth/google';
import { Login } from './Login';
const App = () => {
 
  return (
    <div>
      <h1>My React App</h1>
      <GoogleOAuthProvider clientId="970443825554-si54tskbc2sls46t9ip912ldii6r9nkv.apps.googleusercontent.com">
        <Login/>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
