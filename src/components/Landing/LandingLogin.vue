<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from "../../store/user";

const user = useUserStore();

</script>

<template>
    <section v-if="!user.existeUsuario" class="bg-white py-3 mb-4">
        <h2 class="fs-6 text-center mb-3">You are not logged in yet</h2>
        <div class="d-flex justify-content-evenly ">
            <RouterLink to="/login" class="btn btn-sm btn-success rounded-0 w-25">
                Login
            </RouterLink>
            <RouterLink to="/register" class="btn btn-sm btn-white w-25">
                Register
            </RouterLink>
        </div>
    </section>
</template>

<style>

</style>