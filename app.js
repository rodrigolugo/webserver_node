require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT;


//handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');



//servir contenido estatico
app.use(express.static('public/templated-roadtrip'));


app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Rodrigo Lugo',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre: 'Rodrigo Lugo',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre: 'Rodrigo Lugo',
        titulo: 'Curso de Node'
    });
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})

