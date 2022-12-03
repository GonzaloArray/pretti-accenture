<script setup>
import { ref } from "vue";
import FormularioProfile from "../components/Perfil/FormularioProfile.vue";
import Information from "../components/Perfil/Information.vue";
import Perfil from "../components/Perfil/Perfil.vue";
const user = ref(
    {
        userName: "HeinsenbergDev",
        city: "Argentina, Buenos Aires",
        contact: "1159056745",
        email: "heinsenbergdev@gmail.com",
    }
);

function handleEdit(msj) {
    if(msj.id == "1"){
        user.value.userName = msj.change1
        user.value.city = msj.change2

    }else{
        user.value.contact = msj.change1
        user.value.email = msj.change2

    }
}

</script>
<template>
    <Perfil/>
    <Information
        title="Personal information: "
        icon1="person"
        icon2="place"
        id="1"
        :info1="user.userName"
        :info2="user.city"
        @boolean-edit="handleEdit"
    />
    <Information
        title="Contact info: "
        icon1="phone"
        icon2="email"
        id="2"
        :info1="user.contact"
        :info2="user.email"
        @boolean-edit="handleEdit"
    />

    <section class="mt-4">
        <h2 class="fs-7 text-center py-2 text-color">
            It still doesn't have pretti premium...
        </h2>
    </section>

</template>
<style scoped>
.text-color{
    color: #7CF6FD!important;
}
</style>