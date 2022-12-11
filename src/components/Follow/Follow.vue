<script setup>
import { useFollower } from "../../store/seguidores"
import img_follow from '../../assets/follower/user_follower.svg'


    const follower = useFollower()
</script>
<template>
    <div v-show="follower.arrayFollow.length == 0">
        <h2 class="text-white fs-5">No users available</h2>
        <img :src="img_follow" alt="User available">
    </div>
    <div class="bg-white px-2 py-2 my-2 rounded-2 d-flex justify-content-between align-items-center" v-for="follow in follower.arrayFollow" :key="follow.id">
        <div class="d-flex align-items-center">
            <img class="width me-2" :src="follow.date.photoURL" alt="">
            <h2 class="fw-bold fs-6 m-0">{{follow.date.name}}</h2>
        </div>
        <RouterLink class="btn btn-sm btn-primary rounded-1" :to="{name: 'follow', params: { id: follow.date.uid}}">view</RouterLink>

    </div>
</template>


<style scoped>
    .width{
        width: 2.3rem;
    }
</style>