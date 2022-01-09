<script>
import api from '../api';
import AlbumsTile from '../components/AlbumsTile.vue';

export default {
  name: 'Artist',
  components: {
    'albums-tile': AlbumsTile,
  },
  data() {
    return {
      title: '',
      listeners: '',
      scrobbles: '',
      text: '',
      albums: [],
      isListLoading: true,
    };
  },
  methods: {
    getInfo() {
      const artistName = this.$route.params.artist;
      this.getArtistInfo(artistName);
      this.getAlbums(artistName);
    },
    async getArtistInfo(artistName) {
      const res = await api.getArtistInfo(artistName);
      const info = res.artist;
      if (info) {
        this.title = info.name;
        this.listeners = info.stats.listeners;
        this.scrobbles = info.stats.playcount;
        this.text = info.bio.summary;
      }
      this.isListLoading = false;
    },
    async getAlbums(artistName) {
      const res = await api.getArtistAlbums(artistName);
      const info = res.topalbums && res.topalbums;
      this.albums = info.album;

      console.log('info', info);
    },
  },
  created() {
    this.getInfo();
  },
};
</script>

<template>
  <div class="artist">
    <div class="artist__wrapper wrapper">
      <div v-if="title" class="artist__title">{{ title }}</div>
      <div v-if="listeners" class="artist__listeners">
        Слушателей: {{ listeners }}
      </div>

      <div v-if="scrobbles" class="artist__scrobbles">
        Прослушиваний: {{ scrobbles }}
      </div>

      <div v-if="text" v-html="text" class="artist__text"></div>
    </div>

    <div class="artist__albums">
      <div class="wrapper">
        <h2 class="artist__albums-title">Альбомы</h2>
      </div>
      <albums-tile
        class="artist__albums-list"
        :list="albums"
      />
    </div>
  </div>
</template>
