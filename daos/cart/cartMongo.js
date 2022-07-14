const ContainerMongo = require('../../containers/contMongo')
const typeCart = require('../../model/cart.model')

class CartMongoDAO extends ContainerMongo {    
    constructor() {
        super('mongodb://localhost/products', typeCart)
    }

}

module.exports = CartMongoDAO;