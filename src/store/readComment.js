import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";

import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { db } from "../utils/firebase";

export const useComment = defineStore('comment', () => {
    try {
        const arrayComment = ref([]);

        onMounted(async () => {
            const tfr = []
            const q = query(collection(db, "comment"), where("id", "==", props.model.id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const todo = {
                    id: doc.id,
                    date: doc.data(),
                    post: doc.data().post,
                    like: doc.like
                }
                tfr.push(todo)

            });
            arrayComment.value = tfr

        })

        return {
            arrayComment
        }
        
    } catch (error) {
        console.log("Algo salio mal")
    }


})