const ERROR = { error: "No se encuentra el producto" };

class Productos {
    constructor() {
        this.productos = [];
    }

    getAll() {
        return this.productos;
    }

    getById(id) {
        const object = this.productos.find((producto) => producto.id === id);
        if (object) {
            return object;
        } else {
            return ERROR;
        }
    }

    create(object) {
        const idsArray = this.productos.map((producto) => producto.id);
        const maxId = idsArray.length === 0 ? 0 : Math.max(...idsArray);
        const id = maxId + 1;
        const newObject = { id, ...object };
        this.productos.push(newObject);
        return newObject;
    }

    updateById(id, object) {
        const foundObject = this.productos.find((producto) => producto.id === id);
        if (foundObject) {
            const filteredProductos = this.productos.filter(
                (producto) => producto.id !== id
            );
            const newObject = { id, ...object };
            this.productos = [...filteredProductos, newObject];
            return newObject;
        } else {
            return ERROR;
        }
    }

    deleteById(id) {
        const foundObject = this.productos.find((producto) => producto.id === id);
        if (foundObject) {
            const filteredProductos = this.productos.filter(
                (producto) => producto.id !== id
            );
            this.productos = [...filteredProductos];
            return this.productos;
        } else {
            return ERROR;
        }
    }
}

module.exports = Productos;
