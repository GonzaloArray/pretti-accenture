<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useFollower } from "../store/seguidores";
import { db } from "../utils/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import FollowerPost from "../components/Post/FollowerPost.vue";
import PerfilFollower from "../components/Perfil/PerfilFollower.vue";
import imgNull from '../assets/social/trip.svg'
import FollowSocial from "../components/Follow/FollowSocial/FollowSocial.vue";

const follow = useFollower();
const route = useRoute();
const routeId = route.params.id;

const arrayPost = ref([]);
const userFollow = ref([]);

onMounted(async () => {
    const tfr = []
    const userId = []
    const q = query(collection(db, "post"), where("id", "==", routeId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const todo = {
            id: doc.id,
            date: doc.data(),
            post: doc.data().post,
            like: doc.like
        };
        tfr.push(todo);
    });

    const user = query(collection(db, "user_register"), where("uid", "==", routeId));
    const querySnapshotUser = await getDocs(user);
    querySnapshotUser.forEach((doc) => {
        const todo = {
            id: doc.id,
            date: doc.data(),
            post: doc.data().post,
            like: doc.like
        }
        userId.push(todo)

    });
    arrayPost.value = tfr;
    userFollow.value = userId
})

</script>

<template>
    <RouterLink class="btn btn-sm rounded-pill px-2 py-1 mb-2 shadow bg__primary" to="/follower">
        <div class=" d-flex align-items-center text-white">
            <span class="material-icons-outlined fs-6 ">
                arrow_back_ios
            </span>
            <p class="m-0 pe-2">Back</p>
        </div>
    </RouterLink>
    <!-- Follower Post -->
    <PerfilFollower v-for="user in userFollow" :key="user.date.uid" :email="user.date.email" :photo="user.date.photoURL"
        :name="user.date.name" />

    <FollowSocial/>

    <div v-if="arrayPost.length == 0" class="d-flex justify-content-center align-items-center flex-column">
        <h2 class="bg-dark text-light py-2 fs-6 text-center px-5">Not comment</h2>
        <img class="width"  :src="imgNull" alt="Image not found">
    </div>

    <FollowerPost v-for="post in arrayPost" :user="userFollow" :key="post.id" :date="post.date.date" :post="post.post"
        :id="post.id" />

</template>

<style scoped>
.bg__primary {
    background-color: #010909 !important;
}

.bg__primary>div>span {
    transition: .3s;
}

.bg__primary:hover>div>span {
    transform: translateX(-4px);
    transition: .3s;
    color: #26a5a5 !important;
}

.bg__primary:hover>div>p {
    color: #26a5a5 !important;
}
.width{
    width: 70%;
}
</style>