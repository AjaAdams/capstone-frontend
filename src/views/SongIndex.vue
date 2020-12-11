<template>
  <div class="songs">
    <h1>All Songs</h1>
    <div v-for="song in songs">
      <img v-bind:src="song.image_url" v-bind:alt="song.album">
      <h2>{{ song.title }}</h2>
      <h3>{{ song.artist }}</h3>
      <h3>{{ song.album }}</h3>
      <h3>{{ song.year }}</h3>
      <h4>{{ song.genre }}</h4>
      

    </div>
  </div>
</template>

<style>
  img {
    width: 150px;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      songs: []
    };
  },
  created: function() {
    axios
      .get("/api/songs")
      .then(response => {
        console.log("songs index", response);
        this.songs = response.data;
      });
  },
  methods: {}
};
</script>