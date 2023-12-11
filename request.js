//Crear un servidor web 

const express = require('express')
const app = express()

//REQUEST
//Json
app.use(express.json())

app.post('/integrantes',(req,res)=>{
    const {nombre,apellido} = req.body

    res.send(`Los datos enviados son ${nombre} - ${apellido}`)
})

//params
app.get('/producto/:requerido',(req,res)=>{
    console.log(req.params)
    res.send('Listado de productos requeridos')
})

//query params
app.get('/buscar',(req,res)=>{
    console.log(req.query)

    if(req.query.producto_buscado ==="puerta"){
        res.send("Producto encontrado")
    }else{
        res.send("Producto agotado")
    }

})

app.listen(3000)
console.log("El servidor se esta ejecutando en el puerto 3000")