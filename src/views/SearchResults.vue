<template>
  <div id='search-results'>
    <h1>hello</h1>
    <div v-for="subject in searchResults" >
      <h1>{{ subject.title }}</h1>
    </div>
    <Home :searchResults="this.searchResults"/>

    <button @click="showResults()">Get Results</button>
  </div>
</template>

<script>
import Home from './Home.vue'

export default {
  components: {Home},
  props: {
    searchResults: {
      type: Array
    }
  },
  data: function() {
    return {}
  },
  methods: {
    showResults(){
      console.log("Results", this.searchResults)
    }
  }
}
</script>