<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { fecha } from "../../handler/fecha";
import Comment from "./Comment.vue";
import UserComment from "./UserComment.vue";


const props = defineProps({
    model: Object
})
const emits = defineEmits(['idProps']);

const idProp = ref("");
const comment = ref("")
const isOpen = ref(false)
const isFolder = computed(() => {
    return props.model.children && props.model.children.length
})


function handlerId() {

    idProp.value = props.id

    emits('idProps', idProp.value);
}

function toggle() {
    isOpen.value = !isOpen.value
}


function changeType() {
    console.log(isFolder.value)
    if (isFolder.value > 0) {
        addChild()

    } else if (!isFolder.value) {
        props.model.children = []
        addChild()
        isOpen.value = true
    }
}

function addChild() {
    props.model.children.push({
        comment: comment.value,
        id: crypto.randomUUID(),
        date: fecha(),
        children: []
    })
    console.log(props.model)
    comment.value = ""
}

</script>
<template>
    <li class="my-4 bg-white rounded-1 shadow post">
        <div class="py-1 px-3 position-relative">
            <div class="d-flex align-items-center">
                <img src="../../assets/perfil.png" class="me-2 with" alt="">
                <h2 class="fs-6 mt-2 fw-bold fs-per">@Heinsenberg Dev</h2>
            </div>
            <p class="fs-8 position-absolute bottom-0 end-0 mb-1 me-3">Post: <span class="fw-bold">{{model.date}}</span></p>
            <p class="fs-6 mt-2">{{ model.comment }}</p>
            <!-- Comment -->
            <!-- <Comment @comment-user="handlerComment"/> -->
            <form :class="{ bold: isFolder }" @submit.prevent="changeType">
                <div
                    class="height rounded-pill border-0 px-2 mb-4 mb-md-2 withComment comment d-flex justify-content-between align-items-center">
                    <input v-model="comment" type="text" class="fs-7 border-0 bg-transparent outline"
                        placeholder="comment post...">
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm mt-1">
                            <span class="material-icons-outlined fs-6">
                                sentiment_satisfied_alt
                            </span>
                        </button>
                        <button class="btn btn-sm mt-1">
                            <span class="material-icons-outlined fs-6">
                                gif_box
                            </span>
                        </button>
                        <button class="btn btn-sm mt-1">
                            <span class="material-icons-outlined fs-6">
                                add_a_photo
                            </span>
                        </button>
                    </div>
                </div>
                <span class="item fs-7" @click="toggle" v-if="isFolder">{{ isOpen ? '[-]' : `Comments ${model.children.length}` }}</span>
            </form>

            <ul class="list-group" v-show="isOpen" v-if="isFolder">
                <MessagePost class="item" v-for="model in model.children" :model="model" :key="model.id">
                </MessagePost>
            </ul>


            <button class="position-absolute top-0 end-0 me-2 mt-1 border-0 bg-transparent" type="button"
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="material-icons-outlined">
                    more_horiz
                </span>
            </button>
            <ul class="dropdown-menu rounded-1 shadow p-0 post" aria-labelledby="dropdownMenuButton1">
                <li>
                    <a class="dropdown-item fs-7" href="#">
                        <div class="d-flex align-items-start">
                            <span class="material-icons-outlined fs-6 text-secondary me-2">
                                edit
                            </span>
                            <p class="m-0 fw-bold">
                                Edit
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item fs-7" href="#">
                        <div class="d-flex align-items-start">
                            <span class="material-icons-outlined text-secondary fs-6 me-2">
                                share
                            </span>
                            <p class="m-0 fw-bold">
                                Share
                            </p>
                        </div>
                    </a>
                </li>
                <li><a @click="handlerId" class="dropdown-item fs-7" href="#">
                        <div class="d-flex align-items-start">
                            <span class="material-icons-outlined fs-6 text-secondary me-2">
                                delete_forever
                            </span>
                            <p class="m-0 fw-bold">
                                Remove
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </li>
</template>


<style scoped>
li{
    list-style: none;
}
.with {
    width: 1.7rem;
}

.bg-transparent {
    background-color: transparent;
}

.fs-8 {
    font-size: 11px;
}

.fs-per {
    font-size: 15px;
}
.outline {
    outline: none;
}
.withComment{
    width: 100%;
}
@media (min-width: 768px) {
    .withComment{
        width: 60%;
    }
}
.height{
    height: 30px;
}
.item {
    cursor: pointer;
    line-height: 1.5;
}
</style>>
