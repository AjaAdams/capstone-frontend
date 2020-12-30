<template>
  <div class="show">
   <h1>{{ subject.name }}</h1>
   <div v-for="subject in song.subjects">
     <h2> {{ song.title }}</h2>
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
      subject: {}
    };
  },
  created: function() {
    axios.get("/api/subjects/" + this.$route.params.id).then(response => {
      this.subject = response.data;
      console.log("show song", this.subject)
    });
  },
  methods: {}
};
</script>