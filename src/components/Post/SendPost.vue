<script setup>
import { ref } from "@vue/reactivity"

const valor = ref("")
const arrayPosts = ref(null)

// emit
const emits = defineEmits(["message"])

// Funcion
function handlerPost() {

    if (valor.value !== '') {
        const fechaActual = fecha()
        arrayPosts.value = {
            comment: valor.value,
            id: crypto.randomUUID(),
            date: fechaActual,
            children: []
        }
        emits("message", arrayPosts.value)

        valor.value = "";
    }
}
function fecha() {
    const fechaNueva = new Date();

    const opcionesConfig = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }

    return fechaNueva.toLocaleDateString('en-US', opcionesConfig);
}

</script>

<template>
    <section class="col-12 my-3 my-md-0">
        <section class="py-4 bg-light rounded-1 shadow position-relative">
            <form @submit.prevent="handlerPost" class="py-2 d-flex align-items-center justify-content-between px-3">
                <section class="col-9 col-md-10">
                    <h2 class="fs-7 position-absolute top-0 mt-3 fw-bold">What are you thinking today?</h2>
                    <div class="d-flex justify-content-between border border-1 rounded-2 ">
                        <input type="text" v-model="valor" class="border border-0 bg-transparent form-control">
                        <button class="form__send p-0 m-0">
                            <span class="material-icons-outlined sendPost fs-6 opacity-50 mt-1 px-2">
                                {{valor.length > 0 ? "send" : "feedback"}}
                            </span>
                        </button>
                    </div>
                </section>
                <div class="col-1 ms-2 text-center">
                    <button class="form__send">
                        <span class="material-icons-outlined text-success">
                            wallpaper
                        </span>
                    </button>
                </div>

                <div class="col-2 col-md-1 ms-2 ms-md-0">
                    <button class="form__send">
                        <span class="material-icons-outlined sendPost">
                            reply_all
                        </span>
                    </button>
                </div>
            </form>
        </section>
    </section>
</template>
<style scoped>
.form__send {
    background-color: transparent;
    border: none;
}

.bg-transparent {
    background-color: transparent;
}
</style>