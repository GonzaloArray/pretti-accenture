<script setup>
import { getAuth, signOut } from '@firebase/auth';
import { useUserStore } from '../../../store/user';
import LinksNav from './LinksNav.vue';
import LinkNav from './LinkNav.vue';
import imgUser from '../../../assets/user.svg'
import router from '../../../router';
import { usePost } from '../../../store/readPost';
import { RouterLink } from 'vue-router';

const user = useUserStore();

function signout() {
    const auth = getAuth();
    signOut(auth).then(() => {
        const post = usePost()
        post.arrayPost = [];
        user.usuario = null;

        router.push('./login')
    }).catch((error) => {

    });
}

const store = useUserStore();

</script>

<template>
    <nav class="header-nav">
        <ul>
            <li class="nav-item dropdown pe-3">

                <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <img v-if="store.existeUsuario" :src="store.usuario.photoURL" alt="Profile"
                        class="rounded-circle logo">
                    <img v-else src="../../../assets/user.svg" alt="Profile user">
                    <span class="d-none d-md-block dropdown-toggle ps-2">Heinsenberg Dev</span>
                </a>

                <section class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <ul class="m-0 p-0">
                        <li class="dropdown-header">
                            <h6>{{ store.existeUsuario ? store.usuario.displayName : ' ------- --- ------' }}</h6>
                            <span>{{ store.existeUsuario ? store.usuario.email : ' ------- --- ------' }}</span>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>

                        <div v-if="user.existeUsuario">
                            <LinkNav href="profile" title="My Profile" icon="person" />
                            <LinkNav href="setting" title="Account Settings" icon="settings" />
                            <LinkNav href="contact" title="Need Help?" icon="help_outline" />
                            <LinksNav title="Sign Out" icon="logout" @click="signout" />
                        </div>
                        <div v-else class="d-flex justify-content-evenly align-items-center mb-2">
                            <RouterLink class="btn btn-sm btn-primary  px-3" to="/login">Sing In</RouterLink>
                            <RouterLink class="btn btn-sm btn-white border-1 px-3 border-primary text-primary" to="/register">Sing Up</RouterLink>
                        </div>
                    </ul>

                </section>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.dropdown-menu {
    border-radius: 4px;
    padding: 10px 0;
    -webkit-animation-name: dropdown-animate;
    animation-name: dropdown-animate;
    -webkit-animation-duration: 0.2s;
    animation-duration: 0.2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    border: 0;
    box-shadow: 0 5px 30px 0 rgba(82, 63, 105, 0.2);
}

.logo {
    width: 2rem;
}

.dropdown-menu .dropdown-header,
.dropdown-menu .dropdown-footer {
    text-align: center;
    font-size: 15px;
    padding: 10px 25px;
}


@media (min-width: 768px) {
    .dropdown-menu-arrow::before {
        content: "";
        width: 13px;
        height: 13px;
        background: #317AC7;
        position: absolute;
        top: -7px;
        right: 20px;
        transform: rotate(45deg);
        border-top: 1px solid #eaedf1;
        border-left: 1px solid #eaedf1;
    }
}

@-webkit-keyframes dropdown-animate {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }

    0% {
        opacity: 0;
    }
}

@keyframes dropdown-animate {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }

    0% {
        opacity: 0;
    }
}

/* Header nav */
.header-nav ul {
    list-style: none;
}

.header-nav>ul {
    margin: 0;
    padding: 0;
}

.header-nav .nav-profile {
    color: #012970;
}

.header-nav .nav-profile img {
    max-height: 36px;
}

.header-nav .nav-profile span {
    font-size: 14px;
    font-weight: 600;
}


.header-nav .notifications .notification-item {
    display: flex;
    align-items: center;
    padding: 15px 10px;
    transition: 0.3s;
}

.header-nav .notifications .notification-item i {
    margin: 0 20px 0 10px;
    font-size: 24px;
}

.header-nav .notifications .notification-item h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
}

.header-nav .notifications .notification-item p {
    font-size: 13px;
    margin-bottom: 3px;
    color: #919191;
}

.header-nav .notifications .notification-item:hover {
    background-color: #f6f9ff;
}


/* Profile */

.header-nav .profile {
    min-width: 240px;
    padding-bottom: 0;
    top: 8px !important;
}

.header-nav .profile .dropdown-header h6 {
    font-size: 18px;
    margin-bottom: 0;
    font-weight: 600;
    color: #444444;
}

.header-nav .profile .dropdown-header span {
    font-size: 14px;
}

.header-nav .profile .dropdown-item {
    font-size: 14px;
    padding: 10px 15px;
    transition: 0.3s;
}

.header-nav .profile .dropdown-item i {
    margin-right: 10px;
    font-size: 18px;
    line-height: 0;
}

.header-nav .profile .dropdown-item:hover {
    background-color: #f6f9ff;
}
</style>