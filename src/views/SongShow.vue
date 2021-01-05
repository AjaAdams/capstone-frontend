<template>
  <div class="show">
   <h1>{{ song.title }}</h1>
   <img v-bind:src="song.image_url" v-bind:alt="song.title">
   <h2>{{ song.artist }}</h2>
  </div>


</template>

<style>
</style>

<script>
import axios from 'axios'

export default {
  // components: {geniusLyrics},

  data: function() {
    return {
      song: {}
    };
  },
  created: function() {
    axios.get("/api/songs/" + this.$route.params.id).then(response => {
      this.song = response.data;
      console.log("show song", this.song)
    });
  },
  
  methods: {}
};
</script>