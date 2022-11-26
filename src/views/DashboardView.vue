<script setup>
import SendPost from '../components/Post/SendPost.vue'
import DivisorSection from '../components/DivisorSection.vue'
import AsideComponent from '../components/Aside/AsideComponent.vue'
import PremiunComponent from '../components/Premiun/PremiunComponent.vue'
import MessagePost from '../components/Post/MessagePost.vue';
import Spinner from '../components/Loader/Spinner.vue';


import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';


const arrayPost = ref([]);
const valor = ref("")
const spinner = ref(true)

function messagePost(array) {

    arrayPost.value.unshift(array);

}
onMounted(()=>{
    setTimeout(() => {
        spinner.value = false;
    }, 1000);
})
function handlerId(msj) {
    console.log(msj)
    valor.value = msj

    arrayPost.value = arrayPost.value.filter(post => post.id !== msj);
}

</script>
<template>
    <!-- <DivisorSection title="Dashboard" subTitle="Dashboard"/> -->
    <div class="d-flex flex-column flex-md-row justify-content-between">

        <div class="col-12 col-md-8 me-2">

            <!-- Send Post -->
            <SendPost @message="messagePost" />
            <div v-if="arrayPost !== null">
                <ul class="ul">
                    <MessagePost v-for="post in arrayPost" :key="post.id" :model="post" @idProps="handlerId" />
                </ul>
            </div>

        </div>
        <div class="col-12 col-md-4">
            <div class="col-12">
                <AsideComponent />
                <PremiunComponent />
            </div>
        </div>
        <Spinner v-if="spinner" />
    </div>
</template>

<style scoped>
.ul {
    list-style: none;
    margin: 0;
    padding: 0;
}


</style>