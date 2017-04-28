import { auth } from './constants';

export function loginByEmail (login, loginMessage, history) {
   auth.signInWithEmailAndPassword("prueba@gmail.com", "12345")
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
