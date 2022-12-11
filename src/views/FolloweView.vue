<script setup>
import { onMounted, ref } from "vue";
import { useRoute  } from "vue-router";
import { useFollower } from "../store/seguidores";
import { db } from "../utils/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import FollowerPost from "../components/Post/FollowerPost.vue";
import PerfilFollower from "../components/Perfil/PerfilFollower.vue";

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
    <!-- Follower Post -->
    <PerfilFollower v-for="user in userFollow" :key="user.date.uid" :email="user.date.email" :photo="user.date.photoURL" :name="user.date.name"/>

    <FollowerPost v-for="post in arrayPost" :user="userFollow" :key="post.id" :date="post.date.date" :post="post.post" :id="post.id"/>

</template>

<style>

</style>