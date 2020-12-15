<template>
  <div class="home">
    <h1>Admin Page</h1>

    <div>
      Song Title: <input type="text" v-model="newSongTitle"><br><br>
      Artist: <input type="text" v-model="newSongArtist"><br><br>
      Album Title: <input type="text" v-model="newSongAlbum"><br><br>
      Release Year: <input type="text" v-model="newSongYear"><br><br>
      Genre: <input type="text" v-model="newSongGenre"><br><br>
      Image URL: <input type="text" v-model="newSongImage"><br><br>
      <button v-on:click="addSong()">Add Song</button>
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
      songs: [],
      newSongTitle: "",
      newSongArtist: "",
      newSongAlbum: "",
      newSongYear: "",
      newSongGenre: "",
      newSongImage: ""
    }
  },
  created: function() {},
  methods: {
    addSong: function() {
      var params = {
        title: this.newSongTitle,
        artist: this.newSongArtist,
        album: this.newSongAlbum,
        year: this.newSongYear,
        genre: this.newSongGenre,
        featuring: this.newSongFeaturing,
        image_url: this.newSongImage
      };
      axios.post("/api/songs", params).then(response => {
          console.log("add a song", response.data);
          this.songs.push(response.data);
        })
        .catch(error => console.log(error.response));
    }
  }
};
</script>