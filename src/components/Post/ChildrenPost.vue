<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { fecha } from "../../handler/fecha";
import Button from "../Buttons/Button.vue";
import ButtonItem from "../Buttons/ButtonItem.vue";




const props = defineProps({
    model: Object
})

const emits = defineEmits(['idProps']);

const idProp = ref("");
const comment = ref("");
const isOpen = ref(false);
const modalResponse = ref(false);


const isFolder = computed(() => {
    return props.model.children && props.model.children.length
})

function handleResponse() {
    modalResponse.value = !modalResponse.value;
}

function handlerId() {
    idProp.value = props.model.id
    console.log(idProp.value)
    emits('idProps', idProp.value);
}

function toggle() {
    isOpen.value = !isOpen.value;

}


function changeType() {
    if (comment.value !== "") {

        if (isFolder.value > 0) {
            addChild();

        } else if (!isFolder.value) {
            props.model.children = []
            addChild()
            isOpen.value = true;
        }

        comment.value = ""
    }

}

function addChild() {

    props.model.children.unshift({
        comment: comment.value,
        id: crypto.randomUUID(),
        date: fecha(),
        children: []
    });

    comment.value = ""
}
const fechaJ = ref(0)
setInterval(() => {
    fechaJ.value = Number((Date.now() - props.model.date) / 60000).toFixed(0)
}, 60000);


</script>
<template>
    <li class="mb-2 bg-white rounded-4 shadow  post children" :class="model.children >= 1 && 'bg-dark'">
        <div class="py-1 px-3 position-relative">
            <div class="d-flex align-items-center">
                <img src="../../assets/perfil.png" class="me-2 with" alt="">
                <div class="d-flex flex-column">
                    <h2 class="fs-7 mt-2 mb-0 fw-bold fs-per">@HeinsenbergDev</h2>
                    <p class="fs-8 position-relative mt-0 mb-1 ms-3">
                        <span class="fw-bold">
                            {{ fechaJ > 1 ? `- ${fechaJ} min read` : "- right now" }}
                        </span>
                    </p>

                </div>
            </div>

            <p class="fs-6 mt-0 mb-1">{{ model.comment }}</p>

            <div v-if="modalResponse == false">
                <p class="fw-bold fs-8 m-0" @click="handleResponse">Reply</p>
            </div>
            <form v-else :class="{ bold: isFolder }" @submit.prevent="changeType">

                <div
                    class="height rounded-pill border-0 px-2 mb-4 mb-md-2 withComment comment d-flex justify-content-between align-items-center">
                    <input v-model="comment" type="text" class="fs-7 border-0 bg-transparent outline"
                        placeholder="comment post...">
                    <div class="d-flex align-items-center">
                        <Button icon="sentiment_satisfied_alt" />
                        <Button icon="gif_box" />
                        <Button icon="add_a_photo" />
                    </div>
                </div>
                <p class="item m-0 fs-7" @click="toggle" v-if="isFolder">{{ isOpen ? '[-]' : `Comments
                                    ${model.children.length}`
                }}</p>
            </form>

            <ul class="list-group" v-show="isOpen" v-if="isFolder">
                <ChildrenPost class="item" v-for="model in model.children" :model="model" :key="model.id">
                </ChildrenPost>
            </ul>


            <button class="position-absolute top-0 end-0 me-2 mt-1 border-0 bg-transparent" type="button"
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="material-icons-outlined">
                    more_horiz
                </span>
            </button>
            <ul class="dropdown-menu rounded-1 shadow p-0 post" aria-labelledby="dropdownMenuButton1">
                <ButtonItem icon="edit" info="Edit" />
                <ButtonItem icon="share" info="Share" />
                <ButtonItem icon="delete_forever" info="Remove" @click="handlerId"/>
            </ul>
        </div>
    </li>
</template>


<style scoped>
li {
    list-style: none;
}

.with {
    width: 1.5rem;
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

.withComment {
    width: 100%;
}

@media (min-width: 768px) {
    .withComment {
        width: 60%;
    }
}

.height {
    height: 30px;
}

.item {
    cursor: pointer;
    line-height: 1.5;
}
</style>>
