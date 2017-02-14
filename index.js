const Mongorito = require('mongorito')

Mongorito.connect(`${process.env.MONGODB_HOST}/cloudnet`).then(
  connection => {
    console.log('Connected to database!')
  },
  error => {
    console.error(error)
  }
)

const app = require('koa')()

app.use(function * () {
  this.body = 'Hostname: ' + this.request.hostname
})

app.listen(process.env.PORT || 8080)
