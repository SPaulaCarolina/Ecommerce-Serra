const fs = require('fs')

class Container {

    constructor(file) { 
        this.file = file
        this.data = []

        try {
            this.read()
        } catch(e) {
            this.write()
        }
    }
    write() {
        fs.writeFileSync(this.file, JSON.stringify(this.data))
    }
    read() {
        this.data = JSON.parse(fs.readFileSync(this.file))
    }
    getLastID() {
        const n = this.data.length

        if (n < 1 ) return 0 

        return this.data[this.data.length - 1].id
    }
    save(obj) {
        const id = this.getLastID()
        const time = new Date().toLocaleString()
        this.data.push({...obj, ...{ id: id + 1, timestamp: time}})

        this.write()

        return obj
    }
    getByID(id) {
        return this.data.find(p => p.id == id)
    }
    editByBody(obj, id) {
        obj['id'] = id
        const idx = this.getAll().findIndex(p => p.id === obj.id)
        this.getAll().splice(idx, 1, obj)
        this.write()

        return obj
    }
    getID(id) {
        return this.data.findIndex(p => p.id == id)
    }
    getAll() {
        return this.data
    }
    deleteByID(id) {
        const idx = this.data.findIndex(p => p.id == id)

        if ( idx === -1 ) {
            console.log('El producto que desea eliminar no existe.')
        } else {
            this.data.splice(idx,1)
            this.write()

        }
        
    }
    deleteAll() {
        this.data = []
        this.write()
    }
}

module.exports = Container;