const koa = require('koa')
const koaRouter = require('koa-router')// importing Koa-Router

const app = new koa()
const router = new koaRouter()

router.get('home', '/', (context) => {
    context.body = "<h1>Anasayfa hoş geldiniz!</h1>"
})

router.get('about', '/about', (context) => {
  context.body = "<h1>Hakkımızda sayfası hoş geldiniz!</h1>"
})
router.get('about', '/iletisim', (context) => {
  context.body = "<h1>İletişim sayfası hoş geldiniz!</h1>"
})

app.use(router.routes())
  .use(router.allowedMethods())// registering routes to the application

app.listen(3000, () => {console.log('Sunucu PORT 3000')})