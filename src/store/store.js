import { defineStore } from 'pinia'
import { computed, onMounted, ref } from 'vue'


export const useUserStore = defineStore('user', () => {
    const usuario = ref(null)
    
    function detectarUsuario({ commit }, usuario) {
        commit('user', usuario)
    }

    const existeUsuario = computed(() => {
        if(usuario.value === null){
            return false;
          }else{
            return true;
          }
    })

    return {usuario, existeUsuario}
})