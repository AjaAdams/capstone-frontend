<template>
  <div class="subjects">
    <h1>All Subjects</h1>
    <div v-for="subject in subjects">
      <h2>{{ subject.name }}</h2>

    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      subjects: []
    };
  },
  created: function() {
    axios
      .get("/api/subjects")
      .then(response => {
        console.log("subjects index", response);
        this.subjects = response.data;
      });
  },
  methods: {}
};
</script>