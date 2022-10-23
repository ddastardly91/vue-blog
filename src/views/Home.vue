<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
//imports
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";

const { posts, error, load } = getPosts();

load();
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
