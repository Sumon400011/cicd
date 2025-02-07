<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup lang="ts">
  import HeaderComponent from './components/Header/HeaderComponent.vue';
  import FooterComponent from './components/Footer/FooterComponent.vue';
</script>

<style scoped></style>
