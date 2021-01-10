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
      //   apiKey: "FNHwCV1BrIGO0Wh6GBDem1acsw-rD8yfwHQ4lC4o0htDi6N5omW5V6H5c-IDFshbNSm28SWJpPQQMtbpGEnIQA",
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
      //   apiKey: "FNHwCV1BrIGO0Wh6GBDem1acsw-rD8yfwHQ4lC4o0htDi6N5omW5V6H5c-IDFshbNSm28SWJpPQQMtbpGEnIQA",
      //   title: 'Blinding Lights',
      //   artist: 'The Weeknd',
      //   optimizeQuery: true,
      // };
      // getLyrics(options).then((lyrics) => console.log(lyrics));
    // }
  }
   
};
</script>