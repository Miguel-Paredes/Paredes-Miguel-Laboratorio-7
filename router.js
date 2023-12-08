// // Rutas para devolver texto 

// const express = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.send("Pagina de inicio")
// })
// app.get('/blog',(req,res)=>{
//     res.send("Blog")
// })
// app.get('/faq',(req,res)=>{
//     res.send("Preguntas frecuentes")
// })
// app.get('/gallery',(req,res)=>{
//     res.send("Galería de imágenes")
// })
// app.use((req,res)=>{
//     res.status(404).send("Página no encontrada - 404")
// })
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');


// // Rutas con los verbos HTTP

// const express = require('express')
// const app = express()
// app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send("Bienvenido")
// })
// app.post('/faq',(req,res)=>{
//     const {nombre} = req.body
//     res.send(`Estimado ${nombre} esperamos haber contestado su pregunta y si tiene otra duda no dude en preguntar`)
// })
// app.put('/faq',(req,res)=>{
//     const {nombre} = req.body
//     res.send(`Estimado ${nombre}, sus datos han sido actualizados. Esperamos haber contestado su pregunta y si tiene otra duda no dude en preguntar.`)
// })
// app.patch('/perfil',(req,res)=>{
//     const {nombre} = req.body
//     res.send(`Sus datos han sido modificados ${nombre}`)
// })
// app.delete('/data', (req, res) => {
//     const { usuario } = req.body;
//     const nombre = "Carlos";
//     const nombres = [];
//     for (let i = 0; i < usuario.length; i++) {
//       if (usuario[i] !== nombre) {
//         nombres.push(usuario[i]);
//       }
//     }
//     res.send(`Los usuarios existentes son: ${nombres.join(', ')}`);
//   });
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');


// // Rutas para devolver contenido multimedia

// const express = require('express')
// const app = express()

// app.get('/gallery',(req,res)=>{
//     res.sendFile('./software.jpg',{
//         root:__dirname
//     })
// })
// console.log(__dirname);
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');


// // Ruta para devolver un json

// const express = require('express')
// const app = express()

// app.get('/user',(req,res)=>{
//     res.json({
//         "nombre":"Miguel",
//         "apellido":"Paredes",
//         "edad":20,
//         "educación":{
//             "colegio":"Dillon",
//             "universidad":"EPN",
//         }
//     })
// })
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');


// // Rutas para devolver códigos de estado

// const express = require('express')
// const app = express()

// app.get('/error', (req, res) => {
//     res.sendStatus(404);
//   });
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');


// 