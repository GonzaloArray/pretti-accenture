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
    <section class="row gx-2 gy-4">
        <div class="col-6 col-sm-3" v-for="follow in follower.arrayFollow" :key="follow.id">
            <div class="d-flex flex-column justify-content-center align-items-center bg-light pb-2 rounded-1">
                <div class="bg-dark w-100 d-flex justify-content-center position-relative py-3 shadow rounded-1">
                    <img class="width position-absolute position rounded-circle" :src="follow.date.photoURL" :alt="follow.date.name">
                </div>
                <h2 class="fw-bold fs-7 mt-4 py-1 mb-0">{{follow.date.name}}</h2>
                <RouterLink class="mt-3 w-75 btn btn-sm rounded-pill btn-sm fs-7 btn-light border border-primary text-primary" :to="{name: 'follow', params: { id: follow.date.uid}}">View</RouterLink>
            </div>
        </div>
    </section>
</template>


<style scoped>
    .width{
        width: 3rem;
    }
    .position{
        bottom: -1.4rem;
    }
</style>