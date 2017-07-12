import { auth, google } from './constants';
import { GoogleSignin } from 'react-native-google-signin';

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
  GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
}

export function logout () {

}
