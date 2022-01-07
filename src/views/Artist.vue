<script>
import api from '../api';

export default {
  name: 'Artist',
  data() {
    return {
      title: '',
      listeners: '',
      scrobbles: '',
      text: '',
      isListLoading: true,
    };
  },
  methods: {
    async getInfo() {
      const artistName = this.$route.params.artist;
      const res = await api.getArtistInfo(artistName);
      const info = res.artist;
      if (info) {
        this.title = info.name;
        this.listeners = info.stats.listeners;
        this.scrobbles = info.stats.playcount;
        this.text = info.bio.summary;
      }
      console.log('info', info);
      this.isListLoading = false;
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

      <div v-if="text" class="artist__text">{{ text }}</div>
    </div>
  </div>
</template>
