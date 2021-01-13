<template>
  <div class="show">
    <div class="body-inner">
      <!-- Page title -->
      <section id="page-title" class="text-light" data-bg-parallax="images/parallax/6.jpg">
        <div class="container">
          <div class="page-title">
            <h1>{{ subject.name }}</h1>
          </div>
        </div>
      </section>
      <!-- end: Page title -->

      <section id="page-content">
      <div class="container">
        <div class="row">
          <div class="content col-lg-9">
            <div class="row">
              <div class="col-lg-4" v-for="song in subject.songs">
                <div class="card">
                  <router-link v-bind:to="`/songs/${song.id}`">
                    <img class="card-img-top" :src="`${song.image_url}`" alt="Card image cap">
                  </router-link>
                  <div class="card-body">
                    <h4 class="card-title">{{ song.title }}</h4>
                    <h5 class="card-text">{{ song.artist }}</h5>
                    <h6 class="card-text">{{ song.album }}</h6>
                    <router-link v-bind:to="`/songs/${song.id}`">
                      <button class="btn btn-light">See Song</button>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                  <div class="line"></div>
              </div>
              <button @click="$router.push({path: '/'})" type="button" class="btn btn-light btn-lg">Search Again</button>
            </div>
          </div>
        </div>
      </div>
    </section>

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