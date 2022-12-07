import { addDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import {fecha} from '../handler/fecha'
import { useCollection } from "./collection";
import { useUserStore } from "./user";

export const useSendPost = defineStore('sendPost', () => {
    const comment = ref("")

    const store = useCollection();
    const user = useUserStore();
    

    const handlePost = async () => {
        if (comment.value != "") {
            
            await addDoc(store.nameCollection, {
                post: comment.value,
                date: fecha(),
                children: [],
                like: false,
                id: user.usuario.uid
            });
            
            comment.value = ""
        }
    }

    return {
        comment,
        handlePost
    }
})