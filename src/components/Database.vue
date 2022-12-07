<script setup>
import { usePost } from "../store/readPost";
import { useSendPost } from "../store/sendPost"
import { useDeletePost } from '../store/deletePost'
import { useUpdatePost } from '../store/updatePost'

const readPost = usePost();
const send = useSendPost();
const deletePost = useDeletePost();
const updatePost = useUpdatePost();


</script>

<template>

<h2 class="mt-5 pt-5">Hola</h2>
  <div v-for="(post, index) in readPost.arrayPost" :key="index">
    <div class="d-flex align-items-center">
      <h2>{{post.post}}</h2>
      <button @click.prevent="updatePost.handleUpdatePost(post.id)"  class="btn btn-sm btn-primary">Edit</button>
      <button @click.prevent="deletePost.handleDelete(post.id)" class="btn btn-danger btn-sm">Delete</button>
    </div>
    
  </div>

  <form @submit.prevent="send.handlePost" action="" method="POST">
    <input type="text" placeholder="Add todo" class="form-control" v-model="send.comment">
    <input type="submit" value="Send post" class="btn btn-success my-3 fw-bold fs-7">
  </form>

</template>


<style>

</style>