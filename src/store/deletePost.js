import { defineStore } from "pinia";
import { doc, deleteDoc } from "firebase/firestore";
import { useCollection } from "./collection";


export const useDeletePost = defineStore('deletePost',() => {

    const collection = useCollection()

    const handleDelete = async(id) => {
        await deleteDoc(doc(collection.nameCollection, id));
    }

    return{
        handleDelete
    }
})