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
    <div class="heading-text text-center">
      Search by subject: <input v-model="subjectFilter" type="text">
    </div>
    <!-- end: Filter Search Bar -->
 
    <!-- <div v-for="subject in filterBy(subjects, subjectFilter, 'name')">
    <router-link v-bind:to="`/subjects/${subject.name}`">
      <h2>{{ subject.name }}</h2>
    </router-link>
    </div> -->

   
    <section id="page-content">
      <div class="container">
        <div class="row">
          <div class="content col-lg-12">
            <div class="row">
              <div class="col-lg-4" v-for="subject in filterBy(subjects, subjectFilter, 'name')">
                <div class="card">
                  <router-link v-bind:to="`/subjects/${subject.name}`">
                    <img class="card-img-top" :src="`${subject.image_url}`" alt="Card image cap">
                  </router-link>
                  <div class="card-body">
                    <h4 class="card-title">{{ subject.name }}</h4>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make
                    up the bulk.</p> -->
                    <router-link v-bind:to="`/subjects/${subject.name}`">
                      <button class="btn btn-light">See Songs</button>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                  <div class="line"></div>
              </div>
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