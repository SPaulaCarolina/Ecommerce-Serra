const fs = require('fs')

class ContainerFile {

    constructor(file) { 
        this.file = file;
        this.data = []
        try {
            this.read()
        } catch(error) {
            this.write()
        }
    }
    
    read() {
        this.data = JSON.parse(fs.readFileSync(this.file))
    }
    write() {
        fs.writeFileSync(this.file, JSON.stringify(this.data))
    }
    async save(obj) {
        obj['id'] = this.data.length + 1;
        this.data.push(obj)
        this.write()

        return obj
    }
    async getAll() {
        return this.data
    }
    async getByID(id) {
        const objID = this.data.find(obj => obj.id == id)
        return objID
    } 
    async editByID(obj , id) {
        obj['id'] = id
        const idx = this.getAll().findIndex(p => p.id === id)
        this.getAll().splice(idx , 1 , obj )
        this.write()
    }
    async deleteByID(id) {
        const idx = this.data.findIndex(obj => obj.id == id)
        this.data.splice(idx, 1)
        this.write()
    }
    async deleteAll() {
        this.data = []
        this.write()
    }
}

module.exports = ContainerFile;