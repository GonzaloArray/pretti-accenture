import { defineStore } from "pinia";
import { computed, onMounted, ref } from "vue";
import {
    onSnapshot,
    query, orderBy, limit
} from 'firebase/firestore';
import { useCollection } from "./collection";
import { useUserStore } from "./user";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";


export const usePost = defineStore('readPost', () => {

    // Collection
    const collection = useCollection();

    // query
    const todoCollectionQuery = query(collection.nameCollection, orderBy('date', 'desc'));

    // state
    const arrayPost = ref([]);


    // Mounted

    onAuthStateChanged(auth, (user) => {


        onSnapshot(todoCollectionQuery, (querySnapshot) => {
            const frPost = [];
            querySnapshot.forEach((doc) => {

                const todo = {
                    id: doc.id,
                    date: doc.data(),
                    post: doc.data().post,
                    like: doc.like
                }
                frPost.push(todo)

            });

            arrayPost.value = frPost;
        });


    });

    return { arrayPost }
})