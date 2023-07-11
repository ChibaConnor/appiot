// var t = setTimeout(function() {
//   console.log('test1')
// }, 1000)
// console.log('test2')
// clearTimeout(t)

// git config --global user.name "ChibaConnor"

// git config --global user.email"nattawatwichaiyo1@gmail.com"

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})