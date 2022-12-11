<template >

    <aside id="sidebar" class="sidebar" :class="valor === true && 'toggle-sidebar'">

        <ul class="sidebar-nav" id="sidebar-nav">





            <li class="nav-heading">Pages</li>
            <div v-if="store.existeUsuario">
                <ButtomLink icon="home" title="Home" href="" />
                <ButtomLink icon="space_dashboard" title="Dashboard" href="dashboard" />
                <ButtomLink icon="person" title="Profile" href="profile" />
                <ButtomLink icon="forward_to_inbox" title="Contact" href="contact" />
                <ButtomLink icon="person_add" title="Follower" href="follower" />
            </div>


            <div v-if="!store.existeUsuario">
                <ButtomLink icon="app_registration" title="Register" href="register" />
                <ButtomLink icon="login" title="Login" href="login" />

            </div>

            <ButtomLink icon="numbers" title="About us" href="about" />

        </ul>

    </aside>
</template>
<script setup>

import { ref } from 'vue-demi';
import { useUserStore } from '../../store/user';
import ButtomLink from './ButtomLink.vue'
import ButtomToggle from './ButtomToggle.vue';
import SubLink from './SubLink.vue';

const arrow = ref(true);

const store = useUserStore();

const props = defineProps({
    valor: Boolean
})

</script>
<style scoped>
/* # Sidebar */
a {
    text-decoration: none;
}

.sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    width: 300px;
    z-index: 996;
    transition: all 0.3s;
    padding: 20px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #aab7cf transparent;
    box-shadow: 0px 0px 20px rgba(1, 41, 112, 0.1);
    background-color: #fff;
}

@media (max-width: 1199px) {
    .sidebar {
        left: -300px;
    }
}

.sidebar::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #fff;
}

.sidebar::-webkit-scrollbar-thumb {
    background-color: #aab7cf;
}

@media (min-width: 1200px) {

    #main,
    #footer {
        margin-left: 300px;
    }
}

@media (max-width: 1199px) {
    .sidebar.toggle-sidebar {
        left: 0;
    }
}

@media (min-width: 1200px) {

    .sidebar.toggle-sidebar {
        left: -300px;
    }
}

.sidebar-nav {
    padding: 0;
    margin: 0;
    list-style: none;
}

.sidebar-nav li {
    padding: 0;
    margin: 0;
    list-style: none;
}

.sidebar-nav .nav-item {
    margin-bottom: 5px;
}

.sidebar .nav-heading {
    font-size: 11px;
    text-transform: uppercase;
    color: #899bbd;
    font-weight: 600;
    margin: 10px 0 6px 20px;
}

.sidebar-nav .nav-content {
    padding: 5px 0 0 0;
    margin: 0;
    list-style: none;
}
</style>