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
      console.log('listEnter');
      setTimeout(() => {
        el.classList.add('album__item_active');
      }, this.getListTimeout(el.dataset.index));
    },
    listAfterEnter() {

    },
    listBeforeLeave(el, done) {
      console.log('listBeforeLeave el', el);
      console.log('listBeforeLeave done', done);

      // done();
    },
    listLeave(el, done) {
      console.log('listLeave', el);
      // el.classList.remove('album__item_active');
      // setTimeout(() => {
      //   el.classList.remove('album__item_active');
      //   done();
      // }, this.getListTimeout(el.dataset.index));

      done();
    },
    listAfterLeave(el) {
      el.classList.remove('album__item_active');
    },
    btnBackClick() {
      if (!this.tracks) {
        this.isLoaded = false;
        setTimeout(() => {
          this.$router.push(this.backUrlGet);
        }, 1600);

        return;
      }

      const intervalId = setInterval(() => {
        if (this.tracks.length) {
          this.tracks.pop();
        } else {
          this.isLoaded = false;
          setTimeout(() => {
            this.$router.push(this.backUrlGet);
          }, 1600);
          clearInterval(intervalId);
        }
      }, 60);
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
      <div class="album__header">
        <transition name="photo">
          <div class="album__photo" v-if="isLoaded">
            <img v-if="imageUrlSet(image)" class="album__image" :src="imageUrlSet(image)" alt="">
            <app-icon v-else class="album__no-image" name="no-image"/>
          </div>
        </transition>

        <div class="album__info">
          <transition name="back">
            <a
              v-if="isLoaded"
              class="album__back"
              @click.prevent="btnBackClick"
            >
              <app-icon class="album__back-icon" name="arrow"/>
              <div v-if="artist" class="album__back-text">{{ artist }}</div>
            </a>
          </transition>

          <transition name="title">
            <div v-if="title && isLoaded" class="album__title">{{ title }}</div>
          </transition>
        </div>
      </div>

      <div class="album__body">
        <div class="album__wrapper" v-if="tracks && tracks.length && isLoaded">
          <transition-group
            class="album__list"
            tag="ul"
            appear
            @before-enter="listBeforeEnter"
            @enter="listEnter"
            @after-enter="listAfterEnter"
            @before-leave="listBeforeLeave"
            @leave="listLeave"
            @after-leave="listAfterLeave"
          >
            <li v-for="(track, index) in tracks"
                :key="track.name"
                :data-index="track.name ? index : 1"
                class="album__item"
                :class="{'album__item_empty': !track.name}"
            >
              <div v-if="track.name" class="album__item-name">{{track.name}}</div>
            </li>
          </transition-group>
        </div>

        <p v-else-if="isLoaded" class="album__no-result">Список треков недоступен</p>
      </div>
    </div>
  </div>
</template>
