import { defineStore } from 'pinia'
import { computed, ref } from 'vue'


export const useUserStore = defineStore('user', () => {
    // State
    const user = ref({
        displayName: '',
        photoURL: '',
        email: '',
        password: '',
        repassword: '',
        errorMessage: ''
    })

    const usuario = ref(null);
    
    const addUsuario = (user) => {
        usuario.value = user;
    }

    // getters
    const existeUsuario = computed(() => {
        if (usuario.value === null) {
            return false;
        } else {
            return true;
        }
    })

    return { usuario, user, existeUsuario, addUsuario }
})