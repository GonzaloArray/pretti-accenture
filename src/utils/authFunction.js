import { auth } from "./firebase";
import Swal from 'sweetalert2'
import { 
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword,  
    signInWithPopup
} from "firebase/auth";

import { useUserStore } from "../store/user";
import router from "../router";

const store = useUserStore();


function register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('¡Sesión iniciada!');
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        })
}

function loginGoogle() {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
    .then(result => {
        store.addUsuario(result.user)

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

    })
    .catch(error => console.log(error));
}

function loginFacebook() {

    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
    .then(result => {
        alert("Exito")
        store.addUsuario(result.user)
    })
    .catch(error => console.log(error));
}

function loginGitHub(){

    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
    .then(result => {
        alert("Exito")
    })
    .catch(err => console.log(err));
}

onAuthStateChanged(auth, (user) => {
    store.usuario = user;
    router.push('/dashboard');

});



export {
    register,
    login,
    loginGoogle,
    loginFacebook,
    loginGitHub
}