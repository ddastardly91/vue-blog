<template>
  <div class="tag">
    <div v-if="error"></div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import TagCloud from "../components/TagCloud.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

const route = useRoute();
const { posts, error, load } = getPosts();

load();

const postsWithTag = computed(() => {
  return posts.value.filter((p) => p.tags.includes(route.params.tag));
});
</script>

<style scoped></style>
