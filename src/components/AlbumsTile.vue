<script>
import AppPreloader from './AppPreloader.vue';
import utils from '../utils/utils';

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
    urlFormatted(info) {
      return {
        name: 'Album',
        params: {
          artist: utils.formattUrl(info.artist.name),
          album: utils.formattUrl(info.name),
        },
      };
    },
    imageUrlSet(array) {
      return utils.imageSet(array);
    },
  },
};
</script>

<template>
  <div class="albums-tile">
    <div v-if="isLoading" class="albums-tile__preloader">
      <app-preloader/>
    </div>
    <div v-else class="albums-tile__list">
      <div v-for="item in list" :key="item.mbid" class="albums-tile__item">
        <router-link
          class="albums-tile__card"
          :to="urlFormatted(item)"
          :style="`background-image: url(${imageUrlSet(item.image)})`"
        >
          <div v-if="item.name" class="albums-tile__title">{{ item.name }}</div>
          <div v-if="item.listeners" class="albums-tile__listeners">{{ item.listeners }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
