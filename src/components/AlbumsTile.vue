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
    imageSet(array) {
      let lg;
      let extraLg;

      array.forEach((item) => {
        if (item.size === 'large') {
          lg = item['#text'];
        }

        if (item.size === 'extralarge') {
          extraLg = item['#text'];
        }
      });
      return extraLg || lg;
    },
  },
};
</script>

<template>
  <div class="main-tile">
    <div v-if="isLoading" class="main-tile__preloader">
      <app-preloader/>
    </div>
    <div v-else class="main-tile__list">
      <div v-for="item in list" :key="item.mbid" class="main-tile__item">
        <router-link
          class="main-tile__card" to="/"
          :style="`background-image: url(${imageSet(item.image)})`"
        >
          <div v-if="item.name" class="main-tile__title">{{ item.name }}</div>
          <div v-if="item.listeners" class="main-tile__listeners">{{ item.listeners }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
