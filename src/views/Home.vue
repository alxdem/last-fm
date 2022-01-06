<script>
import MainTile from '../components/MainTile.vue';
import api from '../api';

export default {
  name: 'Home',
  components: {
    'main-tile': MainTile,
  },
  data() {
    return {
      artists: [],
    };
  },
  methods: {
    async getAllArtists() {
      const res = await api.getTopAlbums('scorpions');

      console.log('res', res);

      this.artists = await res.topalbums.album || [];
      // this.artists = await res.topartists.artist || [];
    },
  },
  created() {
    this.getAllArtists();
  },
};
</script>

<template>
  <main-tile
    :list="artists"
  />
</template>
