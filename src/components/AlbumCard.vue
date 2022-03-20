<script>
import AppPreloader from './AppPreloader.vue';
import utils from '../utils/utils';

export default {
  name: 'AlbumCard',
  components: {
    AppPreloader,
  },
  props: {
    image: Object,
    routeTo: Object,
    name: String,
    listeners: String,
  },
  data() {
    return {
      isLoad: true,
    };
  },
  methods: {
    imageUrlSet(array) {
      return utils.imageSet(array);
    },
    imageOnLoad() {
      this.isLoad = false;
    },
  },
};
</script>

<template>
  <router-link
    class="album-card"
    :to="routeTo"
  >
    <img
      class="album-card__image"
      :src="imageUrlSet(image)"
      alt=""
      @load="imageOnLoad"
    >
    <div v-if="name" class="album-card__title">{{ name }}</div>
    <div v-if="listeners" class="album-card__listeners">{{ listeners }}</div>
  </router-link>

  <transition name="album-card-preloader">
    <div v-if="isLoad" class="album-card__preloader">
      <app-preloader class="app-preloader_black"/>
    </div>
  </transition>
</template>
