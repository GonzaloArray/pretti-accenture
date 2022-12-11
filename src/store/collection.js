import { defineStore } from "pinia";
import { db } from "../utils/firebase";
import { collection } from "firebase/firestore";


export const useCollection = defineStore('collection',()=> {

    const nameCollection = collection(db, 'post')

    return {
        nameCollection
    }
})