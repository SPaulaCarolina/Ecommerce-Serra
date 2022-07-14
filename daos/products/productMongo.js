const ContainerMongo = require('../../containers/contMongo')
const typeProduct = require('../../model/product.model')

class ProductMongoDAO extends ContainerMongo {
    constructor() {
        super('mongodb://localhost/products', typeProduct)
    }
}

module.exports = ProductMongoDAO