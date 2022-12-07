import { doc, updateDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useCollection } from "./collection";
import { usePost } from "./readPost";


export const useUpdatePost = defineStore('updatePost',() => {

    const collection = useCollection();
    const store = usePost();


    const handleUpdatePost = (id) => {

        const index = store.arrayPost.findIndex(post => post.id === id);


        updateDoc(doc(collection.nameCollection, id), {
            children: ["Hola mundo desde children"]
        });
        
    }

    return{
        handleUpdatePost
    }

})