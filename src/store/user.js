import { defineStore } from 'pinia'
import { computed, onMounted, ref } from 'vue'


export const useUserStore = defineStore('user', () => {
    // State
    const user = ref({
        email: '',
        password: '',
        repassword: '',
        errorMessage: ''
    })
    const usuario = ref(null);

    const userBoolean = ref(false);
    
    // actions
    function detectarUsuario({ commit }, usuario) {
        commit('user', usuario)
    }

    // getters
    const existeUsuario = computed(() => {
        if(usuario.value === null){
            return false;
          }else{
            return true;
          }
    })

    return {usuario, user, existeUsuario}
})