const express = require('express')
const FactoryDAO = require('../daos/index')
const { Router } = express

//DAO
const DAO = FactoryDAO()
//Routers
const productRouter = Router()
//Product Routes
productRouter.get('/', async (req, res) => res.send(await DAO.product.getAll()))
productRouter.post('/', async (req, res) => res.send(await DAO.product.save(req.body)))

module.exports = productRouter