<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: String,
    icon1: String,
    icon2: String,
    id: String,
    info1: String,
    info2: String,
})
const emits = defineEmits(["boolean-edit"]);

const changeInfo = ref({
    change1: props.info1,
    change2: props.info2,
    id: props.id
});

const error = ref(false);

const valor = ref(true)

function handleEdit() {

    if(valor.value == true){
        valor.value = !valor.value;

    }else{
        if(changeInfo.value.change1.length < 15){
            valor.value = !valor.value;
            error.value = false;

            changeInfo.value.change1 = changeInfo.value.change1.split(" ").join("");

            emits("boolean-edit", changeInfo.value);

            return;
        }

        error.value = true;

    }
}
</script>

<template>
    <section class="mt-4 py-3 position-relative">
        <h2 class="fs-5 ms-2">{{title}}</h2>
        <div class="ms-3">
            <p class="mb-1 d-flex align-items-center">
                <span class="material-icons-outlined me-2">
                    {{icon1}}
                </span>
                <span v-if="valor" class="fw-bold">{{ info1 }}</span>
                <input v-else type="text" v-model="changeInfo.change1" :placeholder="info1">
            </p>
            <p v-if="error" class="fs-error texto">Error: {{id == "1" ? "name very long" : "tel very long"}}</p>
            <p class="mb-1 d-flex align-items-center">
                <span class="material-icons-outlined me-2">
                    {{icon2}}
                </span>
                <span v-if="valor" class="fw-bold">{{ info2 }}</span>
                <input v-else type="text" v-model="changeInfo.change2" :placeholder="info2">
            </p>
        </div>

        <button type="button" @click="handleEdit"
            class="btn btn-sm btn-success rounded-5 m-2 position-absolute top-0 end-0">
            <span class="material-icons-outlined text-light fs-6 border-1 border-bottom">
                mode_edit
            </span>
        </button>
    </section>
</template>
<style scoped>
 .fs-error{
    font-size: 12px;
 }
 .texto{
    color: red!important;
 }
</style>