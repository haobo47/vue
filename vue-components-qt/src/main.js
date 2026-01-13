

import { createApp } from 'vue'
import App from './App.vue'
import Header from './pages/header.vue'

const app = createApp(App)

app.component('Header', Header)

app.mount('#app')
