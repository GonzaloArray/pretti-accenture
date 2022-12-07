<script setup>
import { onMounted, ref } from '@vue/runtime-core';
import { RouterLink, RouterView } from 'vue-router'

import ButtonFixed from './components/Buttons/ButtonFixed.vue';
import Database from './components/Database.vue';
import Header from './components/Header/Header.vue'
import ChatVue from './components/PrettyChat/Chat.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';
import { useUserStore } from './store/user';


const showModal = ref(false)
const darkMode = ref(false)

const store = useUserStore();

function handleDark(msj) {
	darkMode.value = msj
	if (msj) {
		document.body.classList.add("color-oscuro", "bg-oscuro")
	} else {
		document.body.classList.remove("color-oscuro", "bg-oscuro")
	}
}

</script>
<template>
	<div>
		<Header :show="showModal" @close="showModal = !showModal" @DarkMode="handleDark" />
		
		<Sidebar :valor="showModal" />
		
		<main id="main" class="contenedor mx-auto" :class="showModal && 'toggle-sidebar'">
			<ChatVue />
			<RouterView />

		</main>
		<footer id="footer" class="contenedor mx-auto">
			<hr>
			<p class="text-center fs-7 m-0 pb-3">© Designer <a href="#">J. Gonzalo Arrayaran</a> Project Accenture.</p>
		</footer>
		<nav
			class="notification d-flex justify-content-center position-fixed bottom-0 text-center end-0 start-0 bg-white shadow row">
			<ButtonFixed href="" icon="home" />
			<ButtonFixed href="dashboard" icon="dashboard" :class="store.existeUsuario ? '' : 'opacity'"/>
			<ButtonFixed href="post" icon="add" :class="store.existeUsuario ? '' : 'opacity'" />
			<ButtonFixed href="notification" icon="notifications" :class="store.existeUsuario ? '' : 'opacity'"/>
			<ButtonFixed href="profile" icon="account_circle" :class="store.existeUsuario ? '' : 'opacity'"/>

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