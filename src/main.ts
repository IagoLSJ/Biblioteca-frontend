import 'vuetify/styles'
import { createVuetify } from 'vuetify'  
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'  
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const configVuetify = {
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    },
  }
  
  const vuetify = createVuetify(configVuetify)   
app.use(router)

app.use(vuetify).mount('#app')
