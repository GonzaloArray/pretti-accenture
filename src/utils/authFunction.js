import { auth } from "./firebase";
import Swal from 'sweetalert2'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";
import { useUserStore } from "../store/user";

const store = useUserStore();


function register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            store.boolean = true;
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




onAuthStateChanged(auth, (user) => {
    if (user) {
        const usuarioActivo = {
            email: user.email,
            uid: user.uid
        }
        store.usuario = usuarioActivo
    } else {
        store.usuario = user;
    }
});

export {
    register,
    login

}