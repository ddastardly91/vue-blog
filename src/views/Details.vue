<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script setup>
import getPost from "../composables/getPost";
const props = defineProps(["id"]);

const { post, error, load } = getPost(props.id);
load();
</script>

<style scoped>
.details-page {
  text-align: center;
}
</style>
