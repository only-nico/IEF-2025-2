// src/controllers/uploadController.js
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const csv = require('csv-stringify');
const util = require('util');
const stat = util.promisify(fs.stat);

// Ruta al directorio donde se almacenan los archivos
const storageDir = path.join(__dirname, '../../storage');

// Función para manejar la subida de archivos
exports.uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No se ha subido ningún archivo');
    }
    res.send(`Archivo ${req.file.filename} subido con éxito`);
};

// Función para obtener información de un archivo
async function getFileInfo(filename) {
    try {
        const filePath = path.join(storageDir, filename);
        const stats = await stat(filePath);
        return {
            name: filename,
            createdAt: stats.birthtime.toISOString(), // Fecha de creación
            modifiedAt: stats.mtime.toISOString(),    // Fecha de modificación
            size: stats.size                          // Tamaño en bytes
        };
    } catch (error) {
        console.error(`Error getting info for file ${filename}:`, error);
        return null;
    }
}

// Función para listar los archivos almacenados
exports.listFiles = async (req, res) => {
    try {
        const files = await fs.promises.readdir(storageDir);
        const fileInfoPromises = files
            .filter(file => fs.statSync(path.join(storageDir, file)).isFile())
            .map(getFileInfo);
        
        const fileInfos = (await Promise.all(fileInfoPromises)).filter(info => info !== null);
        
        res.json({ files: fileInfos });
    } catch (error) {
        console.error('Error listing files:', error);
        res.status(500).json({ error: 'Error al leer el directorio' });
    }
};

// Función para obtener los nombres de las hojas de un archivo Excel
exports.getExcelSheet = (req, res) => {
    console.log("Se ejecuta getExcelSheet")
    const { filename } = req.params;
    const filePath = path.join(storageDir, filename);

    // Verificar si el archivo existe
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Archivo no encontrado' });
    }

    try {
        // Leer el archivo Excel
        const workbook = xlsx.readFile(filePath);
        const sheetNames = workbook.SheetNames;

        // Devolver los nombres de las hojas en formato JSON
        res.json({ sheetNames });
    } catch (error) {
        console.error('Error al leer el archivo Excel:', error);
        res.status(500).json({ error: 'Error al leer el archivo Excel', message: error.message });
    }
};