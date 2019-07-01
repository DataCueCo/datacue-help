<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <p class="action">
    <a :href="link" class="nav-link feature-button">{{text}}</a>
  </p>
</template>

<script>
export default {
  props: {
    text: String,
    link: String
  }
};
</script>

<style scoped>
.feature-button {
  display: inline-block;
  font-size: 1rem;
  color: #fff;
  background-color: #fab000;
  padding: 0.4rem 0.8rem;
  border-radius: 2px;
  -webkit-transition: background-color 0.1s ease;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #e19e00;
}
</style>

