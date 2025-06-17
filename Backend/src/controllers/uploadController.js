// src/controllers/uploadController.js

const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const csv = require('csv-stringify');
const util = require('util');
const stat = util.promisify(fs.stat);
const { trace } = require('../utils/trace');  // <-- import tracer

// Ruta al directorio donde se almacenan los archivos
const storageDir = path.join(__dirname, '../../storage');

/**
 * Función original para manejar la subida de archivos.
 */
function _uploadFile(req, res) {
  if (!req.file) {
    return res.status(400).send('No se ha subido ningún archivo');
  }
  res.send(`Archivo ${req.file.filename} subido con éxito`);
}

/**
 * Función original para listar los archivos almacenados.
 */
async function _listFiles(req, res) {
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
}

/**
 * Función original para obtener nombres de hojas de un Excel.
 */
function _getExcelSheet(req, res) {
  console.log("Se ejecuta getExcelSheet");
  const { filename } = req.params;
  const filePath = path.join(storageDir, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Archivo no encontrado' });
  }

  try {
    const workbook = xlsx.readFile(filePath);
    const sheetNames = workbook.SheetNames;
    res.json({ sheetNames });
  } catch (error) {
    console.error('Error al leer el archivo Excel:', error);
    res.status(500).json({ error: 'Error al leer el archivo Excel', message: error.message });
  }
}

// Función auxiliar sin trazas
async function getFileInfo(filename) {
  try {
    const filePath = path.join(storageDir, filename);
    const stats = await stat(filePath);
    return {
      name: filename,
      createdAt: stats.birthtime.toISOString(),
      modifiedAt: stats.mtime.toISOString(),
      size: stats.size
    };
  } catch (error) {
    console.error(`Error getting info for file ${filename}:`, error);
    return null;
  }
}

// Exports instrumentados con trace()
exports.uploadFile    = trace(_uploadFile,   'uploadFile');
exports.listFiles     = trace(_listFiles,    'listFiles');
exports.getExcelSheet = trace(_getExcelSheet,'getExcelSheet');