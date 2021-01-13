<template>
<!-- prettier-ignore -->

  <div class="row">
    <div class="col-lg-5 center p-50 background-white b-r-6">
      <h3>Login to your Account</h3>
      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label class="sr-only">Email</label>
          <input v-model="email" type="text" class="form-control" placeholder="Email">
        </div>
        <div class="form-group m-b-5">
          <label class="sr-only">Password</label>
          <input v-model="password_digest" type="password" class="form-control" placeholder="Password">
        </div>
        <div class="form-group form-inline text-left">
          <div class="form-check">
            <label>
              <input type="checkbox"><small class="m-l-10"> Remember me</small>
            </label>
          </div>
        </div>
        <div class="text-left form-group">
          <button type="submit" class="btn">Login</button>
        </div>
      </form>
      <p class="small">Don't have an account yet? <a href="/signup">Register New Account</a>
      </p>

      <button @click="spotifyAuth()">Authorize Your Spotify</button>
    </div>
  </div>

  <!-- <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password_digest">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div> -->

  
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password_digest: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password_digest: this.password_digest
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("studentId", response.data.student_id);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password_digest = "";
        });
    },
    spotifyAuth(){
      this.$router.push({ path: '/auth/spotify'})
    }
  }
};
</script>