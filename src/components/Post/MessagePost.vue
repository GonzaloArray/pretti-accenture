<script setup>
import { ref } from "@vue/reactivity";
import Comment from "./Comment.vue";


const props = defineProps({
    comment: String,
    id: String,
    date: String
})
const emits = defineEmits(['idProps']);

const idProp = ref("");

function handlerId() {

    idProp.value = props.id

    emits('idProps', idProp.value);
}
</script>
<template>
    <li class="my-4 bg-white rounded-1 shadow post">
        <div class="py-1 px-3 position-relative">
            <div class="d-flex align-items-center">
                <img src="../../assets/perfil.png" class="me-2 with" alt="">
                <h2 class="fs-6 mt-2 fw-bold fs-per">@Heinsenberg Dev</h2>
            </div>
            <p class="fs-8 position-absolute bottom-0 end-0 mb-1 me-3">Post: <span class="fw-bold">{{ date }}</span></p>
            <p class="fs-6 mt-2">{{ comment }}</p>
            
            <!-- Comment -->
            <Comment />

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
</style>>
