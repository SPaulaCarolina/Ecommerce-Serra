const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080
//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//Routers
const productRouter = require('./routers/product.router')
const cartRouter = require('./routers/cart.router')

app.use( '/api/products', productRouter )
app.use( '/api/cart', cartRouter )
//404
app.use(function (req, res, next) {
    res.status(404)
    res.send("Sorry. Route / method can't finded.")
})
//Server listening
const server = app.listen(PORT, () => {
    console.log(`Server http on ${PORT}...`)
})
server.on('error', error => console.log('Error on server', error))

