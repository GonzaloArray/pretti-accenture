<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { fecha } from "../../handler/fecha";
import ChildrenPost from "./ChildrenPost.vue";
import Button from "../Buttons/Button.vue";
import ButtonItem from "../Buttons/ButtonItem.vue";
import { useUpdatePost } from "../../store/updatePost";
import { addDoc, collection, getDocs, onSnapshot, query, where } from "@firebase/firestore";
import { useUserStore } from "../../store/user";
import { useDeletePost } from "../../store/deletePost";
import { db } from "../../utils/firebase";

const props = defineProps({
    model: Object
})

const user = useUserStore()
const useDelete = useDeletePost();

const arrayComment = ref([]);
const comment = ref("");
const isOpen = ref(false);
const isFolder = computed(() => {
    return arrayComment.value.length
})
onMounted(() => {

    const q = query(collection(db, "comment"), where("id", "==", props.model.id));

    onSnapshot(q, (querySnapshot) => {
        const tfr = []
        querySnapshot.forEach((doc) => {
            const todo = {
                id: doc.id,
                date: doc.data(),
                post: doc.data().post,
                like: false,
                photoURL: doc.data().photoURL,
                displayName: doc.data().displayName
            }
            tfr.push(todo)
        });
        arrayComment.value = tfr
        arrayComment.value.sort((a, b) => b.date - a.date)
    });


})

function toggle() {
    isOpen.value = !isOpen.value;
}

function changeType(id) {
    if (comment.value !== "") {

        if (isFolder.value > 0) {
            addChild(id);

        } else if (!isFolder.value) {
            addChild(id)
            isOpen.value = true;
        }

        comment.value = ""
    }
}



const addChild = async (id) => {

    const nameCollection = collection(db, 'comment')
    await addDoc(nameCollection, {
        post: comment.value,
        date: fecha(),
        photoURL: user.usuario.photoURL,
        displayName: user.usuario.displayName,
        id_user: user.usuario.uid,
        like: false,
        id: id,

    });

}

const fechaJ = ref(0)

fechaJ.value = Number((Date.now() - props.model.date.date) / 60000).toFixed(0)

setInterval(() => {
    fechaJ.value = Number((Date.now() - props.model.date.date) / 60000).toFixed(0)
}, 60000);

</script>
<template>
    <li class="my-2 bg-white rounded-1 shadow post" :class="model.date.children >= 1 && 'bg-dark'">
        <div class="pb-2 px-3 position-relative">
            <div class="d-flex align-items-center">
                <img :src="model.date.displayName ? model.date.photoURL : ''" class="rounded-circle me-2 with" alt="">
                <div class="d-flex flex-column">
                    <h2 class="fs-7 mt-2 mb-0 fw-bold fs-per">{{ model.date.displayName }}</h2>
                    <p class="fs-8 position-relative mt-0 mb-1 ms-3">
                        <span class="fw-bold">
                            {{ fechaJ > 1 ? `- ${fechaJ} min read` : "- right now" }}
                        </span>
                    </p>
                </div>
            </div>

            <p class="fs-6 mt-2">{{ model.post }}</p>


            <!-- Comment -->
            <form :class="{ bold: isFolder }" @submit.prevent="changeType(model.id)">
                <div v-if="user.existeUsuario"
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
                                    ${arrayComment.length}`
                }}</p>
            </form>

            <ul class="list-group" v-show="isOpen" v-if="isFolder">
                <ChildrenPost class="item" v-for="post in arrayComment" :id="post.id" :model="post" :key="post.id">
                </ChildrenPost>
            </ul>

            <button v-if="user.existeUsuario && user.usuario.uid == model.date.id" class="position-absolute top-0 end-0 me-2 mt-1 border-0 bg-transparent" type="button"
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="material-icons-outlined">
                    more_horiz
                </span>
            </button>
            <ul  class="dropdown-menu rounded-1 shadow p-0 post" aria-labelledby="dropdownMenuButton1">
                <ButtonItem icon="edit" info="Edit" />
                <ButtonItem icon="share" info="Share" />
                <ButtonItem icon="delete_forever" info="Remove" @click.prevent="useDelete.handleDelete(model.id)" />
            </ul>
        </div>
    </li>
</template>


<style scoped>
li {
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
