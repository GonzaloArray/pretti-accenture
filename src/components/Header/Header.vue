<script setup>
import { ref } from 'vue';
import Nav from './Nav/Nav.vue';
import Search from './Search.vue';

const darkMode = ref(false);

const props = defineProps({
    show: Boolean,
})
const emits = defineEmits(["DarkMode", "close"])

function handlerDarkMode() {
    darkMode.value = !darkMode.value;
    emits("DarkMode", darkMode.value);
}

</script>
<template>
    <header id="header" class="header fixed-top d-flex align-items-center">

        <div class="d-flex align-items-center justify-content-between">
            <RouterLink class="logo d-flex align-items-center bg-transparent" to="">
                <img src="../../assets/logo.png" alt="Pretti in the world">
            </RouterLink>
            <button class="border-0" @click="$emit('close')">
                <span class="material-icons-outlined toggle-sidebar-btn">
                    {{ show ? "menu" : "close" }}
                </span>
            </button>
        </div>

        <Search />

        <button class="ms-3 border-0 rounded-3 text-light" :class="darkMode ? 'bg-info':'bg-dark'" @click="handlerDarkMode">
            <span class="material-icons-outlined mt-1 px-2 fs-6">
                {{darkMode ? "nights_stay": "wb_sunny"}}
            </span>
        </button>
        <Nav />
    </header>
</template>

<style scoped>
/* Heaader */
.logo {
    line-height: 1;
}

@media (min-width: 1200px) {
    .logo {
        margin-right: 250px;
    }
}

.logo img {
    max-height: 40px;
    margin-right: 2px;
    margin-left: 5px;
}

.logo span {
    font-size: 26px;
    font-weight: 700;
    color: #012970;
    font-family: "Nunito", sans-serif;
}

.header {
    transition: all 0.5s;
    z-index: 997;
    height: 50px;
    box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
    background-color: #fff;
    padding-left: 20px;
    /* Toggle Sidebar Button */
    /* Search Bar */
}

.header .toggle-sidebar-btn {
    font-size: 32px;
    padding-left: 10px;
    cursor: pointer;
    color: #012970;
}
.bg-transparent{
    background-color: transparent!important;;
}
button {
    background-color: transparent;
}
</style>