<script setup>
import ButtonInteraction from '../components/Post/ButtonInteraction.vue';
import { useUserStore } from '../store/user';

const store = useUserStore();
  
</script>

<template>

  <section class="bg-white height rounded-2 shadow p-2 position-relative">
    <div class="d-flex justify-content-between align-items-end">
      <h2 class="fs-6 fw-bold">Create Post</h2>
      <button class="btn btn-sm btn-primary">Post</button>
    </div>
    <hr>
    <div>
      <div class="d-flex align-items-center mb-3">
        <img :src="store.existeUsuario ? store.usuario.photoURL : '../assets/logo.png'" class="me-2 width border border-1 border-secondary rounded-circle"
          alt="Perfil de mindhub">
        <div>
          <h2 class="fs-6 fw-bold mb-1">{{(store.existeUsuario ? store.usuario.displayName: "User14312341234")}}</h2>
          <div>
            <select class="fs-7 border p-1 fw-bold" name="" id="">
              <option value="asdf"> Only me </option>
            </select>
          </div>
        </div>
      </div>
      <textarea class="w-100 border-0 textarea post text-secondary" placeholder="What's on your mind?"></textarea>
      <div class="row d-flex justify-content-center position-absolute bottom-0 end-0 start-0">
        <ButtonInteraction icon="filter"/>
        <ButtonInteraction icon="new_label"/>
        <ButtonInteraction icon="add_reaction"/>
        <ButtonInteraction icon="pin_drop"/>
        <ButtonInteraction icon="more_horiz"/>
      </div>
    </div>
  </section>


</template>    

<style>
.width {
  width: 2rem;
}

.textarea {
  outline: none;
  height: 55vh;
}

.height {
  height: 74vh;
}
</style>