<script setup>
import SendPost from '../components/Post/SendPost.vue'
import DivisorSection from '../components/DivisorSection.vue'
import AsideComponent from '../components/Aside/AsideComponent.vue'
import PremiunComponent from '../components/Premiun/PremiunComponent.vue'
import MessagePost from '../components/Post/MessagePost.vue';

import { ref } from '@vue/reactivity'


const arrayPost = ref(null);

function messagePost(array) {
    arrayPost.value = array;
}

</script>
<template>
    <DivisorSection title="Dashboard" subTitle="Dashboard"/>
    <div class="d-flex flex-column flex-md-row justify-content-between">

        <div class="col-12 col-md-8 me-2">
            <div class="">
                <!-- Send Post -->
                <SendPost @message="messagePost"/>
                <div v-if="arrayPost !== null">
                    <ul class="ul" v-for="post in arrayPost.value" :key="post.id">
                        <MessagePost :comment="post.comment" :id="post.id"/>
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