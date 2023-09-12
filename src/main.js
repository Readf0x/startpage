import './app.scss'
import '@catppuccin/palette/scss/_catppuccin.scss'
import App from './App.svelte'
import 'bootstrap-icons/font/bootstrap-icons.scss'

const app = new App({
  target: document.getElementById('app'),
})

export default app
