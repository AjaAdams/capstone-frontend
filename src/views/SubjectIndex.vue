<template>
  <div class="subjects">
    <h1>All Subjects</h1>
    <div>
      Search by subject: <input v-model="subjectFilter" type="text">
    </div>

    <div v-for="subject in filterBy(subjects, subjectFilter, 'name')">
      <router-link v-bind:to="`/subjects/${subject.id}`">
      <h2>{{ subject.name }}</h2>
      </router-link>

    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],

  data: function() {
    return {
      subjects: [],
      subjectFilter: "",
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