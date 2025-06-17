// src/controllers/excelDataController.js

const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const { trace } = require('../utils/trace');  // <- importamos el tracer

// Ruta al directorio donde se almacenan los archivos
const storageDir = path.join(__dirname, '../../storage');

/**
 * Función original que procesa el Excel y devuelve CSV.
 */
async function _getExcelData(req, res) {
    console.log("Se ejecutó solicitud de data CSV");
    const filePath = path.join(storageDir, req.params.filename);
  
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Archivo no encontrado' });
    }
  
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[req.params.sheetName];
  
    if (!worksheet) {
        console.log("Hoja no encontrada");
        return res.status(404).json({ error: 'Hoja no encontrada' });
    }
  
    // Paso 1: Obtiene los datos de la hoja como matriz
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    console.log('Datos en formato de matriz:', data);
  
    // Paso 2: Calcular la longitud de la fila más larga
    const maxLength = Math.max(...data.map(row => row.length));
    console.log('Longitud de la fila más larga:', maxLength);
  
    // Paso 3: Generar encabezados tipo Excel: A, B, C, ..., Z, AA, AB, ...
    const generateExcelHeaders = (length) => {
        const headers = [];
        for (let i = 0; i < length; i++) {
            let column = '';
            let current = i;
            while (current >= 0) {
                column = String.fromCharCode((current % 26) + 65) + column;
                current = Math.floor(current / 26) - 1;
            }
            headers.push(column);
        }
        return headers;
    };
  
    const headers = generateExcelHeaders(maxLength);
  
    // Paso 4: Preparar el CSV con encabezado
    const csvRows = [headers, ...data];
  
    // Paso 5: Truncar valores numéricos a dos decimales
    const truncatedData = csvRows.map(row => 
        row.map(value => 
            typeof value === 'number' ? Math.trunc(value * 100) / 100 : value
        )
    );
  
    const csvData = truncatedData.map(row => row.join(',')).join('\n');
  
    // Paso 6: Depuración
    console.log('Datos en formato CSV con encabezados numéricos:', csvData);
  
    // Paso 7: Establecer el tipo de contenido
    res.setHeader('Content-Type', 'text/csv');
    
    // Paso 8: Enviar CSV al frontend
    res.send(csvData);
    console.log("Envio data exitoso");
}

// Exportamos la versión instrumentada
exports.getExcelData = trace(_getExcelData, 'getExcelData');