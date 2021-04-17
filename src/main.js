import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import NavBar from './components/UI/NavBar.vue'
import Frame from './components/UI/Frame.vue'
import Footer from './components/UI/Footer.vue'
const app = createApp(App)
app.component('frame',Frame)
app.component('nav-bar',NavBar)
app.component('foot',Footer)
app.use(router).mount('#app')

// createApp(App).use(router).mount('#app')
// const app = createApp(App)
// app.component('Base-card',Frame)
// app.use(router).mount('#app')