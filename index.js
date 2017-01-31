const app = require('koa')()

app.use(function * () {
  this.body = 'Hostname: ' + this.request.hostname
})

app.listen(3000)
