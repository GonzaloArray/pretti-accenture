<script setup>
import { onMounted, ref } from '@vue/runtime-core';
import { RouterLink, RouterView } from 'vue-router'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import ButtonFixed from './components/Buttons/ButtonFixed.vue';
import Header from './components/Header/Header.vue'
import Sidebar from './components/Sidebar/Sidebar.vue';
import { useUserStore } from './store/store';
import {auth } from './utils/firebase';


const showModal = ref(false)
const darkMode = ref(false)

const user = ref({
	email: '',
	password: '',
	repassword: '',
	errorMessage: ''
})

const store = useUserStore();

function handleDark(msj) {
	darkMode.value = msj
	if (msj) {
		document.body.classList.add("color-oscuro", "bg-oscuro")
	} else {
		document.body.classList.remove("color-oscuro", "bg-oscuro")
	}
}

// Firebase

function register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('¡Registrado!');
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


function signout() {
    const auth = getAuth();
    signOut(auth).then(() => {
        alert('¡Sesión cerrada! Inicia sesión.');
    }).catch((error) => {
    });
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


</script>
<template>
	<div>
		<div class="mt-5 d-flex justify-content-center">
			<button type="button" class="btn btn-outline-primary mx-2" data-bs-toggle="modal" data-bs-target="#login">
				Log in
			</button>
			<!-- Cerrar sesión -->
			<button class="btn btn-outline-danger me-2" data-bs-toggle="modal" data-bs-target="#login" @click="signout">
				Log out
			</button>
			<!-- Regístrate -->
			<button type="button" class="btn btn-outline-warning" data-bs-toggle="modal"
				data-bs-target="#registro"><!-- inicia modal con id="registro" -->
				Regístrate
			</button>
		</div>

		<!-- //// Modal - Iniciar sesión //// -->
		<div class="modal fade" id="login">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Inicia de sesión</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<form @submit.prevent="login(user.email, user.password)">
							<!-- CORREO -->
							<div class="input-group mb-3">
								<span class="input-group-text">Correo</span>
								<input v-model="user.email" type="email" required="true" class="form-control">
							</div>
							<!-- PASSWORD -->
							<div class="input-group mb-3">
								<span class="input-group-text">Password</span>
								<input v-model="user.password" type="password" required="true" class="form-control">
							</div>
							<div class="d-grid gap-2">
								<button type="submit" class="btn btn-primary"
									data-bs-dismiss="modal"><!-- Cierra el modal -->
									Iniciar sesión
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="registro">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Regístrate</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<form @submit.prevent="register(user.email, user.password)">
							<!-- CORREO -->
							<div class="input-group mb-3">
								<span class="input-group-text">Correo</span>
								<input v-model="user.email" type="email" required="true" class="form-control">
							</div>
							<!-- PASSWORD -->
							<div class="input-group mb-3">
								<span class="input-group-text">Password</span>
								<input v-model="user.password" type="password" required="true" class="form-control">
							</div>
							<!-- REPASSWORD -->
							<div class="input-group mb-3">
								<span class="input-group-text">Repite Password</span>
								<input v-model="user.repassword" type="password" required="true" class="form-control">
							</div>
							<div class="d-grid gap-2">
								<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Registrar</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>














		<!-- Esto es informacion del proyecto -->
		<Header :show="showModal" @close="showModal = !showModal" @DarkMode="handleDark" />

		<Sidebar :valor="showModal" />

		<main id="main" class="contenedor mx-auto" :class="showModal && 'toggle-sidebar'">
			<RouterView />

		</main>
		<footer id="footer" class="contenedor mx-auto">
			<hr>
			<p class="text-center fs-7 m-0 pb-3">© Designer <a href="#">J. Gonzalo Arrayaran</a> Project Accenture.</p>
		</footer>
		<nav
			class="notification d-flex justify-content-center position-fixed bottom-0 text-center end-0 start-0 bg-white shadow row">
			<ButtonFixed title="Home" href="" icon="home" />
			<ButtonFixed title="Dash" href="dashboard" icon="dashboard" :class="store.existeUsuario ? '' : 'opacity'"/>
			<ButtonFixed title="Post" href="login" icon="add" :class="store.existeUsuario ? '' : 'opacity'" />
			<ButtonFixed title="Notf" href="login" icon="notifications" :class="store.existeUsuario ? '' : 'opacity'"/>
			<ButtonFixed title="User" href="profile" icon="account_circle" :class="store.existeUsuario ? '' : 'opacity'"/>

		</nav>
	</div>
</template>

<style scoped>
#main {
	margin-top: 60px;
	padding: 20px 10px;
	transition: all 0.3s;
}

@media (min-width: 1200px) {

	#main {
		margin-top: 60px;
		margin-left: 300px;
		padding: 20px 30px;
		transition: all 0.3s;
	}

	@media (max-width: 1199px) {
		#main {
			padding: 20px;
		}
	}

	#main.toggle-sidebar,
	#footer.toggle-sidebar {
		margin-left: 0;
	}
}

.opacity{
	opacity: 0.3;
}
</style>