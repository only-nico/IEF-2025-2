//Backend //index.js
require('dotenv').config();  // Cargar variables de entorno desde .env
const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./src/routes/routes');
const { errorHandler } = require('./src/middleware/middleware');
const { generateTemplate } = require('./src/controllers/generateTemplateController'); // Importa la función de generación de plantilla


const app = express();

// Habilitar CORS con un dominio específico
app.use(cors(
    //{
    //origin: ///^(http|https):\/\/146\.83\.216\.166(:\d+)?$/ // Permite conexiones HTTP o HTTPS desde la IP, sin importar el puerto
//}
));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', uploadRoutes);


// Manejador de errores
app.use(errorHandler);

// Iniciar el servidor
const PORT = process.env.PORT || 5009;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
