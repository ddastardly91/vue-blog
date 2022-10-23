<template>
  <div class="spin"></div>
</template>

<style scoped>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 7px solid transparent;
  border-radius: 50%;
  border-top-color: #07c988;
  border-right-color: #07c988;
  border-left-color: #07c988;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
