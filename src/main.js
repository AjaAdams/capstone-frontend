import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"



axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/"


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



// getLyrics(options).then((lyrics) => console.log(lyrics));

// getSong(options).then((song) =>
// 	console.log(`
// 	${song.id}
// 	${song.url}
// 	${song.albumArt}
// 	${song.lyrics}`)
// );