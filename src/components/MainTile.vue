<script>
import AppPreloader from './AppPreloader.vue';

export default {
  name: 'MainTile',
  components: {
    AppPreloader,
  },
  props: {
    list: Array,
    isLoading: Boolean,
  },
  data() {
    return {
      artists: [],
    };
  },
  methods: {
    getUrl(name) {
      const newUrl = name.replace(/ /g, '+');

      return newUrl;
    },
  },
};
</script>

<template>
  <div class="main-tile">
    <div v-if="isLoading" class="main-tile__preloader">
      <app-preloader class="app-preloader_black"/>
    </div>
    <div v-else class="main-tile__list">
      <div v-for="item in list" :key="item.mbid" class="main-tile__item">
        <router-link
          class="main-tile__card"
          :to="getUrl(item.name)"
        >
          <div v-if="item.name" class="main-tile__title">{{ item.name }}</div>
          <div v-if="item.listeners" class="main-tile__listeners">{{ item.listeners }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
