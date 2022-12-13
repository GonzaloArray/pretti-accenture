import { addDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { fecha } from '../handler/fecha'
import router from "../router";
import { useCollection } from "./collection";
import { useUserStore } from "./user";

export const useSendPost = defineStore('sendPost', () => {
    const comment = ref("")

    const store = useCollection();
    const user = useUserStore();

    try {
        const handlePost = async () => {
            if (comment.value != "") {
    
                await addDoc(store.nameCollection, {
                    post: comment.value,
                    date: fecha(),
                    like: false,
                    id: user.usuario.uid,
                    photoURL: user.usuario.photoURL,
                    displayName: user.usuario.displayName,
                });
    
                comment.value = ""
                router.push('/dashboard');
            }
        }
    
        return {
            comment,
            handlePost
        }
    } catch (error) {
        console.log(error);
    }

})

