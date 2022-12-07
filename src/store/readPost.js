import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { 
    onSnapshot,
    query, orderBy, limit
} from 'firebase/firestore';
import { useCollection } from "./collection";
import { useUserStore } from "./user";


export const usePost = defineStore('readPost', () => {

    // Collection
    const collection = useCollection();
    const todoCollectionQuery = query(collection.nameCollection, orderBy('date', 'desc'), limit(6));

    // state
    const arrayPost = ref([]);
    const user = useUserStore()
    
    // Mounted
    onMounted(() => {
        onSnapshot(todoCollectionQuery, (querySnapshot) => {
            const frPost = [];
            querySnapshot.forEach((doc) => {
                
                if (user.usuario.uid == doc.data().id) {
                    const todo = {
                        id: doc.id,
                        date: doc.data(),
                        post: doc.data().post,
                        children: doc.children,
                        like: doc.like
                    }
                    frPost.push(todo)    
                }

            });
            

            arrayPost.value = frPost;
        });

    })

    return { arrayPost }
})