<script>
import AppPreloader from './AppPreloader.vue';
import AlbumCard from './AlbumCard.vue';
import utils from '../utils/utils';

export default {
  name: 'MainTile',
  components: {
    AppPreloader,
    AlbumCard,
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
        <album-card
          :image="item.image"
          :route-to="urlFormatted(item)"
          :name="item.name"
          :listeners="item.listeners"
        />
      </div>
    </div>
  </div>
</template>
