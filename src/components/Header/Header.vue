<template>
    <header id="header" class="header fixed-top d-flex align-items-center">

        <div class="d-flex align-items-center justify-content-between">
            <RouterLink class="logo d-flex align-items-center"  to="/index">
                <img src="../../assets/logo.png" alt="Pretti in the world">
            </RouterLink>
            <button class="border-0" @click="handlerEvent">
                <span class="material-icons-outlined toggle-sidebar-btn">
                    {{boolean ? "close":"menu"}}
                </span>
            </button>
        </div>

        <Search />

        <Nav />
    </header>
</template>
<script>
import Nav from './Nav/Nav.vue';
import Search from './Search.vue';


export default {
    components: {
        Search,
        Nav
    },
    data() {
        return {
            boolean: false
        }
    },
    methods: {
        handlerEvent: function () {
            this.$emit('new', this.boolean = !this.boolean)
        }
    }
}

</script>
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
    height: 60px;
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

button {
    background-color: transparent;
}
</style>