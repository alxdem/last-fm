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
      isListLoading: true,
    };
  },
  methods: {
    async getAllArtists() {
      const res = await api.getTopArtists(15);
      // const res = await api.getTopAlbums('scorpions');

      console.log('res', res);

      // this.artists = await res.topalbums.album || [];
      this.artists = await res.topartists.artist || [];
      this.isListLoading = false;
    },
  },
  created() {
    this.getAllArtists();
  },
};
</script>

<template>
  <div class="home">
    <div class="home__tile">
      <main-tile
        :list="artists"
        :isLoading="isListLoading"
      />
    </div>
  </div>
</template>
