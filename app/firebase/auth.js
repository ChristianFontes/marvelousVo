import { auth } from './constants';

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

export function logout () {

}
