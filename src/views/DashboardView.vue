<script setup>
import SendPost from '../components/Post/SendPost.vue'
import DivisorSection from '../components/DivisorSection.vue'
import AsideComponent from '../components/Aside/AsideComponent.vue'
import PremiunComponent from '../components/Premiun/PremiunComponent.vue'
import MessagePost from '../components/Post/MessagePost.vue';

import { ref } from '@vue/reactivity'


const arrayPost = ref([]);

function messagePost(array) {

    arrayPost.value.unshift(array);

}

function handlerId(msj){
    arrayPost.value = arrayPost.value.filter(post => post.id !== msj );
}

</script>
<template>
    <!-- <DivisorSection title="Dashboard" subTitle="Dashboard"/> -->
    <div class="d-flex flex-column flex-md-row justify-content-between">

        <div class="col-12 col-md-8 me-2">
            <div class="">
                <!-- Send Post -->
                <SendPost @message="messagePost"/>
                <div v-if="arrayPost !== null">
                    <ul class="ul">
                        <MessagePost v-for="post in arrayPost" :key="post.id" :comment="post.comment" :date="post.date" :id="post.id" @idProps="handlerId"/>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="col-12">
                <AsideComponent />
                <PremiunComponent />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>