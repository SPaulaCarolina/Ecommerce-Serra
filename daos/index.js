const CartMemoryDAO = require('./cart/cartMemory')
const ProductMemoryDAO = require('./products/productMemory')
const CartFileDAO = require('./cart/cartFile')
const ProductFileDAO = require('./products/productFile')
const CartMongoDAO = require('./cart/cartMongo')
const ProductMongoDAO = require('./products/productMongo')

const FactoryDAO = () => {

    const typeDB = process.env.typeDB || 'mongo'

    if(typeDB == 'memory') {
        console.log('In memory');
        return {
            cart: new CartMemoryDAO(),
            product: new ProductMemoryDAO()
        }
    } else if(typeDB == 'file') {
        console.log('Generate file');
        return {
            cart: new CartFileDAO(),
            product: new ProductFileDAO()
        }
    } else if(typeDB == 'mongo') {
        console.log('Generate DB with mongo');
        return {
            cart: new CartMongoDAO(),
            product: new ProductMongoDAO()
        }
    }
    
    throw new Error('typeDB is not found')
}

module.exports = FactoryDAO