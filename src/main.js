import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { initializeApp } from "firebase/app";
// // import * as firebase from 'firebase/app'
// import "firebase/auth";
// import firebase from "firebase/compat/app"
// import "firebase/compat/storage";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const app = createApp(App)


app.use(router)
app.mount('#app')

// console.log('pass main')