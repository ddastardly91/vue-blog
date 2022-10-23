<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required />
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (Enter to add a Tag)</label>
      <input @keydown.enter.prevent="handleKeydown" v-model="tag" type="text" />
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const title = ref("");
const body = ref("");
const tag = ref("");
const tags = ref([]);

const router = useRouter();

const handleKeydown = () => {
  if (!tags.value.includes(tag.value)) {
    tag.value = tag.value.replace(/\s/, ""); // removes whitespace
    tags.value.push(tag.value);
  }
  tag.value = "";
};

const handleSubmit = async () => {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value,
  };
  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });

  router.push({ name: "home" });
};
</script>

<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
}

input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
  font-family: "Poppins", sans-serif;
}

textarea {
  height: 160px;
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
}

label:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #07c988;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -20px;
  transform: rotateZ(-1.5deg);
}

button {
  display: block;
  margin-top: 30px;
  background: #07c988;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  padding: 5px 25px;
  color: #444;
  background: #ddd;
  border-radius: 20px;
  font-size: 14px;
}
</style>
