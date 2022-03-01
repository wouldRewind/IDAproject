import Vue from 'vue'
// import Vuesax from 'vuesax' //import dependency
// import 'vuesax/dist/vuesax.css' // import css style
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// Vue.use(Vuesax) // implement Vuesax throughout the application


const app = createApp(App)

app.use(store)

app.mount("#app")

