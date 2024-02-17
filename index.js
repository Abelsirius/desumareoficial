const express = require('express');
const path = require('path');
const app = express();

// Se define  la ruta para los archivos estaticos 
app.use(express.static(path.join(__dirname)));

// Ruta para recibir el archivo index.html

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public'));
})

app.get('/ceviches',(req,res)=>{

    res.sendFile(path.join(__dirname, 'public','ceviche.html'))

})

app.get('/chicharrones',(req,res)=>{

    res.sendFile(path.join(__dirname, 'public', 'chicharron.html'))

})
app.get('/langostas',(req,res)=>{

    res.sendFile(path.join(__dirname, 'public','langostas.html'))

})

const PORT = "https://siriusboss.shop/";


app.listen(PORT,()=>{
    console.log('servidor corriendo en el puerto: ' + PORT)
})