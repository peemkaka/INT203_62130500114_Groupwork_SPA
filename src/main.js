import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import NavBar from './components/NavBar.vue'

import BaseCard from './components/BaseCard.vue'
const app = createApp(App)
app.component('base-card',BaseCard)
app.component('nav-bar',NavBar)
app.use(router).mount('#app')

// createApp(App).use(router).mount('#app')
// const app = createApp(App)
// app.component('Base-card',BaseCard)
// app.use(router).mount('#app')