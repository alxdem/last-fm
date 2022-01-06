<template>
  <app-header></app-header>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>

  <router-view/>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
  },
};
</script>

<style lang="scss">
  .html {
    background-color: $white;
  }
</style>
