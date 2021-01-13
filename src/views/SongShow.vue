<template>
  <div class="show">
    <div class="body-inner">
       <!-- SECTION FULLSCREEN -->
        <!-- <section class="parallax text-light fullscreen" v-bind:data-bg-parallax="song.image_url">
            <div class="container">
                <div class="container-fullscreen">
                    <div class="text-middle text-center text-right">
                        <h1 class="text-uppercase text-medium" data-animate="fadeInDown" data-animate-delay="100">John Smith</h1>
                        <p class="lead" data-animate="fadeInDown" data-animate-delay="300">Web Designer / Developer</p>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- end: SECTION FULLSCREEN -->
        <section>
            <div class="container">
                <div class="row  m-b-50">
                    <div class="col-lg-3">
                        <div class="heading-text heading-section">
                            <h2>{{ song.title }}</h2>
                            <h4>{{ song.artist }}</h4>
                            <img v-bind:src="song.image_url" v-bind:alt="song.title" class="img-fluid rounded" > <br><br>
                            <audio controls style="width: 205px">
                            <source src="https://p.scdn.co/mp3-preview/c4f1f772bfcac9e8283bfb951fc643a3757c30f0?cid=3eb1d1e882924e078defd9e195c759b8" type="audio/mpeg">Your browser does not support audio.</audio>
                            <button type="button" class="btn btn-light" v-on:click="getLyrics(options)">Show Lyrics</button><br>
                            <button type="button" class="btn btn-light" @click="spotifyAuth()">Add song to Spotify</button>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="row">
                            <div class="col-lg-9">The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat,
                                <br>
                                <br> facilisis ut venenatis eu, sodales vel dolor. The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor. </div>
                        </div><br><br>
                          <button type="button" class="btn btn-light btn-lg">Search Again</button>
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col-lg-3">
                        <div class="heading-text heading-section m-b-20">
                            <h2>My Skills</h2>
                        </div>Lorem ipsum dolor sit ametusp endisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat,
                    </div>
                    <div class="col-lg-9">
                        <div class="m-t-60">
                            <div class="p-progress-bar-container title-up small extra-small color">
                                <div class="p-progress-bar" data-percent="100" data-delay="100" data-type="%">
                                    <div class="progress-title">HTML5</div>
                                </div>
                            </div>
                            <div class="p-progress-bar-container title-up small extra-small color">
                                <div class="p-progress-bar" data-percent="94" data-delay="200" data-type="%">
                                    <div class="progress-title">CSS3</div>
                                </div>
                            </div>
                            <div class="p-progress-bar-container title-up small extra-small color">
                                <div class="p-progress-bar" data-percent="78" data-delay="300" data-type="%">
                                    <div class="progress-title">JQUERY</div>
                                </div>
                            </div>
                            <div class="p-progress-bar-container title-up small extra-small color">
                                <div class="p-progress-bar" data-percent="65" data-delay="400" data-type="%">
                                    <div class="progress-title">MYSQL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </section>

      <!-- <h1>{{ song.title }}</h1>
      <img v-bind:src="song.image_url" v-bind:alt="song.title">
      <h2>{{ song.artist }}</h2> -->

      <p>{{ this.lyrics }}</p>
    </div> 
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
      errors: [],
      options: {
        apiKey: "lLI1Rlkfp-_DdhNHb9wqbmRUUU7PmphhsC4Tkd28ZNw5Xgpw9_3iLMJUpn5PZbEh",
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
  },
  
  methods: {
    getLyrics: function(options) {
      axios
        .patch("/api/songs/" + this.$route.params.id, this.lyrics)
    }
    
  }
};
</script>