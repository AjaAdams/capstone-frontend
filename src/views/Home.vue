<template>
  <div class="home">
    <h1>Home</h1><br>
    <div>
      Search by subject: <input v-model="subjectFilter" type="text">
    </div>

    
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],

  data: function() {
    return {
      subjectFilter: ""
    }
  },
  created: function() {},
  methods: {}
};
</script>
