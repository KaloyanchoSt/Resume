/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/Plugins'

// Toast
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

//CSS
//import './Assets/CSS/main.css';

//SCSS
import './Assets/SCSS/main.scss';

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
app.use(Toast)
