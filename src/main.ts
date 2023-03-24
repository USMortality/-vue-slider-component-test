import { createApp } from 'vue'
import App from './App.vue'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import './assets/main.css'

const app = createApp(App)

app.component('VueSlider', VueSlider)

app.mount('#app')
