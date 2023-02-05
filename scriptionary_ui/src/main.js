import { createApp } from 'vue'
import { basicSetup } from 'codemirror'
import VueCodemirror from 'vue-codemirror'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(VueCodemirror, {
    autofocus: true,
    disabled: false,
    indentWithTab: true,
    tabSize: 2,
    extensions: [basicSetup]
})

app.mount('#app')
