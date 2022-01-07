<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
  },
};
</script>

<template>
  <app-header></app-header>

  <router-view/>
</template>

<style lang="scss">
  .html {
    background-color: $white;
  }
</style>
