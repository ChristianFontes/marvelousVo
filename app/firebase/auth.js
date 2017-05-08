import { auth, google } from './constants';

export function loginByEmail (login, loginMessage, history, email, password) {
   auth.signInWithEmailAndPassword(email, password)
     .then(function(firebaseUser) {
         login(); //Action de authActions
         history.replace('/dashboard'); //Ir a Dashboard
     })
    .catch(function(error) {
         // Error Handling
         loginMessage(error.message);
    });
}

export function authByGoogle () {
  auth.signInWithRedirect(google);
  auth.getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    console.log(token);
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(errorMessage);
  // ...
});
}

export function logout () {

}
