<script>
import api from '../api';
import utils from '../utils/utils';
import AppIcon from '../components/AppIcon.vue';

export default {
  name: 'Album',
  components: {
    'app-icon': AppIcon,
  },
  data() {
    return {
      title: '',
      image: '',
      artist: '',
      tracks: [],
      artistFormatted: '',
      isLoaded: false,
    };
  },
  computed: {
    backUrlGet() {
      return {
        name: 'Artist',
        params: {
          artist: this.artistFormatted,
        },
      };
    },
  },
  methods: {
    async getInfo() {
      const { artist, album } = this.$route.params;
      this.artistFormatted = artist;
      const res = await api.getAlbum(artist, album);
      const {
        name,
        image,
        tracks,
        artist: artistName,
      } = res.album;
      this.title = name;
      this.image = image;
      this.artist = artistName;
      this.tracks = tracks && tracks.track;

      this.isLoaded = true;
    },
    imageUrlSet(array) {
      return utils.imageSet(array);
    },
    getListTimeout(index) {
      const currentIndex = isNaN(index) ? 1 : index;

      return Number(1000 + (currentIndex * 70));
    },
    listBeforeEnter(el) {
      el.classList.remove('album__item_active');
    },
    listEnter(el) {
      console.log('el.dataset.index', el.dataset.index);
      setTimeout(() => {
        el.classList.add('album__item_active');
      }, this.getListTimeout(el.dataset.index));
    },
    listLeave(el) {
      el.classList.remove('album__item_active');
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<template>
  <div class="album">
    <div class="album__wrapper wrapper">
<!--      <transition name="album">-->
        <div class="album__header">
          <transition name="photo">
            <div class="album__photo" v-if="isLoaded">
              <img v-if="imageUrlSet(image)" class="album__image" :src="imageUrlSet(image)" alt="">
              <app-icon v-else class="album__no-image" name="no-image"/>
            </div>
          </transition>

          <div class="album__info">
            <transition name="back">
              <router-link
                v-if="isLoaded"
                class="album__back"
                :to="backUrlGet"
              >
                <app-icon class="album__back-icon" name="arrow"/>
                <div v-if="artist" class="album__back-text">{{ artist }}</div>
              </router-link>
            </transition>

            <transition name="title">
              <div v-if="title" class="album__title">{{ title }}</div>
            </transition>
          </div>
        </div>
<!--      </transition>-->

      <div class="album__body">
<!--        <div class="album__list" v-if="tracks && tracks.length">-->
        <div class="album__list">
          <transition-group
            name="list"
            tag="ul"
            :css="false"
            @before-enter="listBeforeEnter"
            @enter="listEnter"
            @leave="listLeave"
          >
            <li v-for="(track, index) in tracks"
                :key="track.name"
                :data-index="track.name ? index: 1"
                class="album__item"
                :class="{'album__item_empty': !track.name}"
            >
              <div v-if="track.name" class="album__item-name">{{track.name}}</div>
            </li>
          </transition-group>
        </div>

<!--        <p v-else class="album__no-result">Список треков недоступен</p>-->
      </div>
    </div>
  </div>
</template>
