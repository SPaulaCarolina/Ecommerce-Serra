const express = require('express')
const FactoryDAO = require('../daos/index')
const { Router } = express

//DAO
const DAO = FactoryDAO()
//Routers
const cartRouter = Router()
//Cart Routes
cartRouter.get('/', async (req, res) => res.send(await DAO.cart.getAll()))
cartRouter.post('/', async (req, res) => res.send(await DAO.cart.save(req.body)))

module.exports = cartRouter