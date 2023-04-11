const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/' , (req , res)=>{

   res.render('home', {
    nombre: "Sebastián González",
    titulo: "Curso de Node"
   })

});
app.get('/generic' , (req , res)=>{

   res.render('generic', {
    titulo: "Generic"
   })
});
app.get('/elements' , (req , res)=>{

   res.render('elements', {
    titulo: "Elements"
   })

});


/* app.get('*', (req, res) => {
    
    res.send("404 | Page Not found")
}) */


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))