<template>
  <div class="show">
   <h1>{{ subject.name }}</h1>
   <div v-for="song in subject.songs">
     
     <h2> {{ song.title }}</h2>
     <h3>{{ song.artist }}</h3>
   </div>

   
</div>
</template>

<style>
</style>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      song: {},
      song_subjects: [],
      subject: {},
      songs: []
    };
  },
  created: function() {
    axios.get("/api/subjects/" + this.$route.params.name).then(response => {
      this.subject = response.data;
      console.log("show song", this.subject)
    });
  },

  methods: {}
};
</script>