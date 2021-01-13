<template>
  <div class="genius-lyrics">
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  name: "genius-lyrics",

  props: {
    options: {
    title: String,
	  artist: String,
	  apiKey: String
    }
  },
  data: function() {
    return {
      lyrics: "",
      // options: {
      //   apiKey: "<API KEY HERE>",
      //   title: 'Blinding Lights',
      //   artist: 'The Weeknd',
      //   optimizeQuery: true,
      // }
    };
  },
  created: function() {},

  methods:{
    // getLyrics(options){
      // const options = {
      //   apiKey: "<API KEY HERE>",
      //   title: 'Blinding Lights',
      //   artist: 'The Weeknd',
      //   optimizeQuery: true,
      // };
      // getLyrics(options).then((lyrics) => console.log(lyrics));
    // }
  }
   
};
</script>