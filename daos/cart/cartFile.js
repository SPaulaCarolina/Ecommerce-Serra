const ContainerFile = require('../../containers/contFile')

class CartFileDAO extends ContainerFile {
    constructor() {
        super('cartsDB.json')
    }
}

module.exports = CartFileDAO;