<script setup>
import { ref } from "@vue/reactivity"
import {fecha} from "../../handler/fecha"

const comment = ref("");
const objComment = ref([]);
function handlerComment() {

    if (comment.value !== "") {
        const fechaActual = fecha()
        objComment.value.push( {
            comment: comment.value,
            id: crypto.randomUUID(),
            date: fechaActual
        })
        // emits("message", arrayPosts.value)
        console.log(objComment.value)

        comment.value = "";

    }
}
</script>
<template>
    <form>
        <div class="height rounded-pill border-0 px-2 mb-4 mb-md-2 with comment d-flex justify-content-between align-items-center">
            <input @keydown.enter.prevent="handlerComment" v-model="comment" type="text" class="fs-7 border-0 bg-transparent outline"
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
    </form>
</template>
<style scoped>
.outline {
    outline: none;
}
.with{
    width: 100%;
}
@media (min-width: 768px) {
    .with{
        width: 60%;
    }
}
.height{
    height: 30px;
}
</style>