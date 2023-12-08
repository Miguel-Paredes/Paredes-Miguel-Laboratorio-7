const express = require('express')
const app = express()
const {engine} = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.set('views', './views');

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/personal',(req,res)=>{
    res.render('personal')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');