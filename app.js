const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

//setting template engine
app.engine('handlebars' ,exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

//use static router
app.use(express.static('public'))

//router index setting
app.get('/', (req, res) => {
  res.render('index')
})

//setting router
app.get('/about',(req, res) => {
  res.render('about')
})

app.get('/portfolio',(req, res) => {
  res.render('portfolio')
})

app.get('/contact',(req, res) => {
  res.render('contact')
})

//listen router
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
