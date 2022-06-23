const express = require('express')
const { Router } = express
const  Container = require('../container')

const productRouter = Router()
const productsDB = new Container ('products.json')

function auth(req, res, next) {
    if( 'admin' in req.headers) next()
    else {
        res.status(400)
        res.send('Error. Usuario no autorizado.')
    }
}

productRouter.get('/', (req, res) => { 
    const data = productsDB.getAll()
    res.json(data) 
})

productRouter.get('/:id', (req, res) => {
    const id = req.params.id
    const product = productsDB.getByID(id)
    if(product === undefined) {
        res.send('Error: Producto no hallado')
    } else {
        res.json(product)
    }
})

productRouter.post('/', auth, (req, res) => { 
    const product = req.body
    productsDB.save(product)
    res.json(productsDB)
})

productRouter.put('/:id', auth, (req, res) => {
    const id = Number(req.params.id)
    const product = req.body
    
    const data = productsDB.getAll()
    idx = productsDB.getID(id)
    
    if ( idx > data.length ){
        res.send('El producto que desea editar no existe')
    } else {
        data.splice( idx, 1, {...product, ...{id: id }})
        res.json( product )
    }
})

productRouter.delete('/:id', auth, (req, res) => {
    const id = Number(req.params.id)
    productsDB.deleteByID(id)
    res.send("Eliminado con exito")
})

module.exports = productRouter



