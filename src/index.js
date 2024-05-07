import { Router } from './router.js'

// criando mapeamento de rotas e paginas
const router = new Router()
router.add('/', "/pages/home.html")
router.add('/about', "/pages/about.html")
router.add('/contact', "/pages/contact.html")
router.add('/404', "/pages/404.htm l")

router.handle()
      
window.onpopstate = () => router.handle()
window.route = () => router.route()
