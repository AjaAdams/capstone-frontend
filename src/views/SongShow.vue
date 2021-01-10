<template>
  <div class="show">
   <h1>{{ song.title }}</h1>
   <img v-bind:src="song.image_url" v-bind:alt="song.title">
   <h2>{{ song.artist }}</h2>

   <!-- <genius-lyrics /> -->

   <button @click="getLyrics(options)">Show Lyrics</button>
   

   
  </div>


</template>

<style>
</style>

<script>
import axios from 'axios'
import { getLyrics, getSong } from 'genius-lyrics-api';
// import GeniusLyrics from '@/components/GeniusLyrics.vue'

export default {
  // components: {
  //   GeniusLyrics
  //   },

  data: function() {
    return {
      song: {},
      optimizeQuery: true,
      lyrics: "",
      options: {
        apiKey: "u_xP8a_deS1tvx6JoSgbH_Ofk_tpA_w-Jgc-HXDAPbWqQm8tu_raVS86ib84XmaV",
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        optimizeQuery: true,
      }
    };
  },
  created: function() {
    axios.get("/api/songs/" + this.$route.params.id).then(response => {
      this.song = response.data;
      console.log("show song", this.song)
    });
    // getLyrics(options).then((lyrics) => console.log(lyrics));
  },
  
  methods: {
    getLyrics(options){
      // const options = {
      //   apiKey: "FNHwCV1BrIGO0Wh6GBDem1acsw-rD8yfwHQ4lC4o0htDi6N5omW5V6H5c-IDFshbNSm28SWJpPQQMtbpGEnIQA",
      //   title: 'Blinding Lights',
      //   artist: 'The Weeknd',
      //   optimizeQuery: true,
      // };
      getLyrics(options).then((lyrics) => console.log(lyrics));
    }
  }
};
</script>