// src/routes/routes.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const util = require('util');
const stat = util.promisify(fs.stat);
const upload = require('../middleware/multerConfig');
const validateExcel = require('../middleware/validateExcel');
const storagePath = path.resolve(__dirname, '../../storage');
const { uploadFile, listFiles, getExcelSheet } = require('../controllers/uploadController');
const { generateTemplate } = require('../controllers/generateTemplateController');
const { getExcelData } = require('../controllers/excelDataController');

// Ruta para subir archivos
router.post('/upload', upload.single('file'), validateExcel, uploadFile);

// Ruta para listar los archivos
router.get('/files', listFiles);

// Ruta para obtener los nombres de las hojas de un archivo Excel
router.get('/excel-sheets/:filename', getExcelSheet);

// Ruta para obtener datos de una hoja Excel y convertirla en CSV
router.get('/excel-data/:filename/:sheetName', getExcelData);

// Ruta para generar la plantilla
router.post('/generate-template', generateTemplate);

// Ruta para eliminar archivos
router.delete('/delete/:filename', async (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(storagePath, filename);
    
    try {
        await fs.promises.unlink(filePath);
        res.status(200).send(`Archivo ${filename} eliminado con éxito`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return res.status(404).send(`Archivo ${filename} no encontrado`);
        }
        console.error('Error deleting file:', error);
        res.status(500).send('Error al eliminar el archivo');
    }
});

// Ruta para descargar archivos
router.get('/download/:filename', async (req, res) => {
    console.log("Ruta completa:", req.path);
    console.log("Filename:", req.params.filename);
    console.log("descargando...");

    const filename = req.params.filename;
    const filePath = path.join(storagePath, filename);
    
    try {
        await fs.promises.access(filePath, fs.constants.F_OK);
        res.download(filePath, filename, (err) => {
            if (err) {
                console.error(`Error al enviar el archivo: ${err.message}`);
                res.status(500).send('Error al descargar el archivo');
            }
        });
    } catch (error) {
        res.status(404).send(`Archivo ${filename} no encontrado`);
    }
});

module.exports = router;