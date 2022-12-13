const express = require("express");
const Productos = require("./Productos");

const router = express.Router();
const prod = new Productos();

router.get("/", (req, res) => {
    const productos = prod.getAll();
    res.send(productos);
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const producto = prod.getById(parseInt(id));
    res.send(producto);
})

router.post("/", (req, res) => {
    const obj = req.body;
    const newObj = prod.create(obj);
    res.send(newObj)
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    const updatedProducto = prod.updateById(parseInt(id), obj);
    res.send(updatedProducto);
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const deletID = prod.deleteById(parseInt(id));
    res.send(deletID)
})

module.exports = router;