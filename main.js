import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import './javascript.js'

document.querySelector('#app').innerHTML = `
<div class="container">
  <h1 class="page-title">
    Filmesflix
  </h1>
  <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg" class="page-logo" alt="">
</div>
<a href="https://alura.com.br/" target="_blank">
  <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="" class="alura-logo">
</a>
`

setupCounter(document.querySelector('#counter'))

