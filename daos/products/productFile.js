const ContainerFile = require('../../containers/contFile')

class ProductFileDAO extends ContainerFile {
    constructor() {
        super('productsDB.json')
    }
}

module.exports = ProductFileDAO