<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
  import Header from './components/Header/Header.vue';
  import Footer from './components/Footer/Footer.vue';
</script>

<style scoped></style>
