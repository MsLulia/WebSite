const express = require('express');
const app = express();
const path = require('path'); //directorios
//configuraciones express
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
//middlewares procesos antes de las rutas, si tiene autorizacion 
//rutas del servidor
app.use(require('./routes/index'));

//archivos estaticos para mejorar la interfaz
app.use(express.static(path.join(__dirname,'public')))
//Escucha el servidor, obtiene la variable de app
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});