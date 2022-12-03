<template >

    <aside id="sidebar" class="sidebar" :class="valor === true && 'toggle-sidebar'">

        <ul class="sidebar-nav" id="sidebar-nav">

            <ButtomLink icon="home" title="Home" href="" />
            <ButtomLink icon="space_dashboard" title="Dashboard" href="dashboard" />


            <!-- List  colocar componente-->
            <li class="nav-item">
                <ButtomToggle icon="widgets" title="Components" data="#component"/>

                <ul id="component" class="nav-content collapse" data-bs-parent="#component">

                    <SubLink icon="radio_button_unchecked" title="Alerts" />
                    <SubLink icon="radio_button_unchecked" title="Accordion" />
                    <SubLink icon="radio_button_unchecked" title="Badges" />
                    <SubLink icon="radio_button_unchecked" title="Breadcrumbs" />
                    <SubLink icon="radio_button_unchecked" title="Buttons" />
                    <SubLink icon="radio_button_unchecked" title="Cards" />
                    <SubLink icon="radio_button_unchecked" title="Carousel" />
                    <SubLink icon="radio_button_unchecked" title="List group" />
                    <SubLink icon="radio_button_unchecked" title="Modal" />
                    <SubLink icon="radio_button_unchecked" title="Tabs" />
                    <SubLink icon="radio_button_unchecked" title="Pagination" />
                    <SubLink icon="radio_button_unchecked" title="Progress" />
                    <SubLink icon="radio_button_unchecked" title="Spinners" />
                    <SubLink icon="radio_button_unchecked" title="Tooltips" />
                </ul>
            </li>


            <li class="nav-item">
                <ButtomToggle icon="list_alt" title="Form" data="#forms-nav"/>

                <ul id="forms-nav" class="nav-content collapse" data-bs-parent="#forms-nav">
                    <SubLink icon="radio_button_unchecked" title="Form Elements" />
                    <SubLink icon="radio_button_unchecked" title="Form Layouts" />
                    <SubLink icon="radio_button_unchecked" title="Form Editors" />
                    <SubLink icon="radio_button_unchecked" title="Form Validation" />
                </ul>
            </li>

            <li class="nav-item">
                <ButtomToggle icon="insert_emoticon" title="Icons" data="#icons-nav"/>
                <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#icons-nav">
                    <SubLink icon="radio_button_unchecked" title="Material Icons" />
                </ul>
            </li>

            <li class="nav-heading">Pages</li>


            <ButtomLink icon="person" title="Profile" href="profile" />
            <ButtomLink icon="forward_to_inbox" title="Contact" href="contact" />

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