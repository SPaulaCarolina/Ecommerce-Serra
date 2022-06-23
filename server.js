const express = require('express')
//Import
const cartRouter = require('./router/cart_router')
const productRouter = require('./router/product_router')

const app = express()
const PORT = process.env.PORT || 8080

//Middlewares
app.use('/public', express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use( '/api/products', productRouter )
app.use( '/api/cart', cartRouter )

app.use(function (req, res, next) {
    res.status(404)
    res.send("Sorry. Route / method can't finded.")
})
//Server listening
const server = app.listen(PORT, () => {
    console.log(`Server http on ${PORT}...`)
})
server.on('error', error => console.log('Error on server', error))

