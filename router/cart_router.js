const express = require('express')
const  Container = require('../container')
const { Router } = express

const cartRouter = Router()
const cartDB = new Container ('cart.json')

cartRouter.get('/:id/products', (req, res) => { 
    const data = cartDB.getAll()
    res.json(data) 
})

cartRouter.post('/', (req, res) => { 
    obj = {...req.body, ...{ products: []} }
    cartDB.save(obj)
    res.json(cartDB)
})

cartRouter.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    cartDB.deleteByID(id)
    res.send("Eliminado con exito")
})

cartRouter.post('/:id/products', (req, res) => { 
    const product = req.body
    const idCart = req.params.id
    const cart = cartDB.getByID(idCart)
    id = cart.products.length
    cart.products.push({...product, ...{id: id + 1}})

    const newObj = cartDB.editByBody(cart, idCart)
    res.json(newObj)
    console.log(product)
})

cartRouter.delete('/:id/products/:id_prod', (req, res) => {
    const idCart = Number(req.params.id)
    const cart = cartDB.getByID(idCart)
    const id_prod = Number(req.params.id_prod)
    const idx = cart.products.findIndex(p => p.id == id_prod)
    cart.products.splice(idx,1)
    
    res.send('Eliminado exitosamente')
})

module.exports = cartRouter










