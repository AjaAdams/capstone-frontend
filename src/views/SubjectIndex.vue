<template>
  <div class="subjects">
    <div class="body-inner">

   <!-- Page title -->
    <section id="page-title" class="text-light" data-bg-parallax="images/parallax/6.jpg">
      <div class="container">
       <div class="page-title">
         <h1>All Subjects</h1>
       </div>
     </div>
    </section>
   <!-- end: Page title -->
    
    <!-- Filter Search Bar -->
    <div>
      Search by subject: <input v-model="subjectFilter" type="text">
    </div>
    <!-- end: Filter Search Bar -->

    <!-- Content -->
        <!-- Portfolio -->
          <div v-for="subject in filterBy(subjects, subjectFilter, 'name')">
          <router-link v-bind:to="`/subjects/${subject.name}`">
            <h2>{{ subject.name }}</h2>
          </router-link>
      
    <!-- <section id="page-content"> -->
      <div class="container">
        <div id="portfolio" class="grid-layout portfolio-3-columns" data-margin="30">
          <!-- portfolio item -->
          <div class="portfolio-item shadow outline img-zoom ct-photography ct-media ct-branding ct-Media">
            <div class="portfolio-item-wrap">
              <div class="portfolio-image">
                <a href="#"><img src="images/portfolio/77.jpg" alt=""></a>
              </div>
              <div class="portfolio-description">
                <a href="portfolio-page-grid-gallery.html">
                <h3>{{ subject.name }}</h3>
                <!-- <span>Illustrations / Graphics</span> -->
                </a>
              </div>
            </div>
          </div>
          <!-- end: portfolio item -->
          
          
          </div> 
          <!-- end: v-for loop -->
        
        </div>
        <!-- end: Portfolio -->
      </div>
      <!-- end: container -->
    <!-- </section>  -->
    <!-- end: Content -->
        
    </div>
    <!-- end: Body Inner -->
   

   
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