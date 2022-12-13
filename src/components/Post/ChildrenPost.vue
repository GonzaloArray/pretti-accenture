<script setup>
import { ref } from "@vue/reactivity";
import { useUserStore } from "../../store/user";
import Button from "../Buttons/Button.vue";
import ButtonItem from "../Buttons/ButtonItem.vue";


const props = defineProps({
    model: Object,
    id: String
})

const user = useUserStore();

const modalResponse = ref(false);

function handleResponse() {
    modalResponse.value = !modalResponse.value;
}

const fechaJ = ref(0)
setInterval(() => {
    fechaJ.value = Number((Date.now() - props.model.date) / 60000).toFixed(0)
}, 60000);


</script>
<template>
    <li class="mb-2 bg-white rounded-4 shadow  post children">
        <div class="py-1 px-3 position-relative">
            <div class="d-flex align-items-center">
                
                <img :src="model.date.photoURL" class="me-2 with" alt="">
                <div class="d-flex flex-column">
                    <h2 class="fs-7 mt-2 mb-0 fw-bold fs-per">{{model.date.displayName}}</h2>

                    <p class="fs-8 position-relative mt-0 mb-1 ms-3">
                        <span class="fw-bold">
                            {{ fechaJ > 1 ? `- ${fechaJ} min read` : "- right now" }}
                        </span>
                    </p>

                </div>
            </div>
            
            <p class="fs-6 mt-0 mb-1">{{ model.post }}</p>


            <button class="position-absolute top-0 end-0 me-2 mt-1 border-0 bg-transparent" type="button"
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="material-icons-outlined">
                    more_horiz
                </span>
            </button>
            <ul class="dropdown-menu rounded-1 shadow p-0 post" aria-labelledby="dropdownMenuButton1">
                <ButtonItem icon="edit" info="Edit" />
                <ButtonItem icon="share" info="Share" />
                <ButtonItem icon="delete_forever" info="Remove" />
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
