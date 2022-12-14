<script setup>
import SendPost from '../components/Post/SendPost.vue'
import DivisorSection from '../components/DivisorSection.vue'
import MessagePost from '../components/Post/MessagePost.vue';
import Spinner from '../components/Loader/Spinner.vue';
import imgNull from '../assets/landing/landing.svg'

import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import { usePost } from '../store/readPost';
import { useUserStore } from '../store/user';
import { onAuthStateChanged } from '@firebase/auth';
import router from '../router';
import { auth } from '../utils/firebase';

const store = useUserStore()

onAuthStateChanged(auth, (user) => {

    store.addUsuario(user);

    router.push('/dashboard');

});

const readPost = usePost();
const user = useUserStore()

</script>
<template>
    <div class="d-flex flex-column flex-md-row justify-content-between">

        <div class="col-12 col-md-8 me-2">
            <!-- Send Post -->
            <SendPost />
            <h2 v-show="readPost.arrayPost.length == 0" class="text-center bg-dark py-2 text-light fs-6">Not post anything</h2>
            <img v-show="readPost.arrayPost.length == 0" class="width mx-auto" :src="imgNull" alt="Imagen not found">

            <div v-if="readPost.arrayPost !== null">
                <ul class="ul">
                    <!-- <Spinner v-if="(user.existeUsuario == false)" /> -->
                    <MessagePost v-for="post in readPost.arrayPost" :key="post.id" :model="post" />
                </ul>
            </div>
        </div>

    </div>
</template>

<style scoped>
.width{
    width: 100%;
}
.ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

</style>