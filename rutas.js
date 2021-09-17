const express = require('express')
const { Router } = express

const Contenedor =  require('./contenedor.js')
const contenedor = new Contenedor ()

/* ------------------------------------------------------ */
/* Productos */

const routerProductos = new Router()
routerProductos.use(express.json())
routerProductos.use(express.urlencoded({ extended: true }))


routerProductos.get('/', (req, res) => {
    const productos= contenedor.getAll()
    console.log(productos)
    res.render('inicio', {productos})
})


routerProductos.post('/', (req, res) => {
    contenedor.save(req.body)
    res.redirect('/')
})


routerProductos.get('/productos', (req, res) => {
    const productos= contenedor.getAll()
    console.log(productos)
    res.render('vistaProductos', {productos})
})


module.exports = routerProductos 
