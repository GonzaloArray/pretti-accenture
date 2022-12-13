<script setup>
import { ref } from "vue";

const props = defineProps({
    post: String,
    photo: String,
    id: String,
    date: Number,
    user: Array,
})

const fechaJ = ref(0);

fechaJ.value = Number((Date.now() - props.date) / 60000).toFixed(0);

setInterval(() => {
    fechaJ.value = Number((Date.now() - props.date) / 60000).toFixed(0)
}, 60000);

</script>

<template>
    <section class="bg-white rounded-1 p-3 my-2 shadow">
        <div class="d-flex align-items-center">
            <img class="me-1 width" :src="user[0].date.photoURL" alt="">
            <div class="d-flex flex-column">
                <h2 class="fs-6 m-0">{{user[0].date.name}}</h2>
                <p class="fs-7 m-0">{{ fechaJ > 1 ? `- ${fechaJ} min read` : "- right now" }}</p>
            </div>
        </div>
        <h2 class="fs-6 mt-2">{{post}}</h2>
    </section>
</template>


<style scoped>
.width{
    width: 2rem;
}
</style>