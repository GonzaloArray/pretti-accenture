<template>
	<div class="">
		<Header @new="sendMessage" />

		<Sidebar :valor="valor" />

		<main id="main" class="container mx-auto" :class="!valor && 'toggle-sidebar'">

			<RouterView />

		</main>
		<footer id="footer">

		</footer>

	</div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
import Sidebar from './components/Sidebar/Sidebar.vue';


export default {
	data() {
		return {
			valor: false
		}
	},
	components: {
		Header,
		Sidebar
	},

	methods: {
		sendMessage: function (param) {
			this.valor = param
		}
	},
}

</script>
<style scoped>
	#main {
		margin-top: 60px;
		padding: 20px 30px;
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
</style>