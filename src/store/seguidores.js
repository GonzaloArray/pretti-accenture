import { collection, query, onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { db } from "../utils/firebase";
import { useUserStore } from "./user";


export const useFollower = defineStore('follow', () => {

    const arrayFollow = ref([])

    const user = useUserStore();

    onMounted(() => {

        const q = query(collection(db, "user_register"));

        onSnapshot(q, (querySnapshot) => {
            const tfr = []
            querySnapshot.forEach((doc) => {
                
                if (user.usuario.uid != doc.data().uid) {
                    const todo = {
                        id: doc.id,
                        date: doc.data(),
                        post: doc.data().post,
                        children: doc.children,
                        like: doc.like
                    }
                    tfr.push(todo)
                }
            });
            arrayFollow.value = tfr
            arrayFollow.value.sort((a, b) => a.date - b.date)
        });
    })

    return{
        arrayFollow
    }
})