<script setup>
import SendPost from '../components/Post/SendPost.vue'
import DivisorSection from '../components/DivisorSection.vue'
import MessagePost from '../components/Post/MessagePost.vue';
import Spinner from '../components/Loader/Spinner.vue';


import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import { usePost } from '../store/readPost';
import { useUserStore } from '../store/user';

const readPost = usePost();
const user = useUserStore()

</script>
<template>
    <div class="d-flex flex-column flex-md-row justify-content-between">

        <div class="col-12 col-md-8 me-2">

            <!-- Send Post -->
            <SendPost />
            <div v-if="readPost.arrayPost !== null">
                <ul class="ul">
                    <Spinner v-if="(user.existeUsuario == false)" />
                    <MessagePost v-for="post in readPost.arrayPost" :key="post.id" :model="post" />
                </ul>
            </div>

        </div>

    </div>
</template>

<style scoped>
.ul {
    list-style: none;
    margin: 0;
    padding: 0;
}


</style>