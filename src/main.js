import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import './assets/styles.css'

// this becomes below
// createApp(App).mount('#app')

const app = createApp(App)
app.use(Toast);
app.mount('#app');
