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

<!--  <router-view/>-->
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
  .html {
    background-color: $white;
  }

  body {
    overflow-x: hidden;
  }

  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }

  .route-enter-active {
    transition: all 0.3s ease-out;
  }

  .route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }

  .route-leave-active {
    transition: all 0.3s ease-in;
  }

</style>
