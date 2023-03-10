const http = require('http');

http.createServer((request,response)=>{
    response.write('Hola mundo')
    response.end();
})
.listen(8080);


app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/templated-roadtrip/generic.html')
})

app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/templated-roadtrip/elements.html')
})

/*app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
})*/
console.log('Escuchando el puerto', 8080);