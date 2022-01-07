<script>
import AppNav from './AppNav.vue';

export default {
  name: 'AppHeader',
  components: {
    AppNav,
  },
};
</script>

<template>
  <header class="app-header">
    <div class="wrapper app-header__wrapper">
      <router-link class="app-header__logo" to="/">LastFM</router-link>

      <div class="app-header__nav">
        <app-nav/>
      </div>
    </div>
  </header>
</template>
