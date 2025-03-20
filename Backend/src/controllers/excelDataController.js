const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// Ruta al directorio donde se almacenan los archivos
const storageDir = path.join(__dirname, '../../storage');

// Función para obtener datos de una hoja Excel y convertirlos en CSV
exports.getExcelData = (req, res) => {
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
    console.log('Datos en formato de matriz:', data); // Depuración
  
    // Paso 2: Calcular la longitud de la fila más larga
    const maxLength = Math.max(...data.map(row => row.length));
    console.log('Longitud de la fila más larga:', maxLength); // Depuración
  
    // Paso 3: Generar encabezados tipo Excel: A, B, C, ..., Z, AA, AB, ...
    const generateExcelHeaders = (length) => {
        const headers = [];
        for (let i = 0; i < length; i++) {
            let column = '';
            let current = i;
            // Generar las letras de las columnas
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
    const csvRows = [headers, ...data]; // Mantener los datos originales
  
    // Paso 5: Truncar valores numéricos a dos decimales
    const truncatedData = csvRows.map(row => 
        row.map(value => 
            typeof value === 'number' ? Math.trunc(value * 100) / 100 : value
        )
    );
  
    const csvData = truncatedData.map(row => row.join(',')).join('\n');
  
    // Paso 6: Depuración
    console.log('Datos en formato CSV con encabezados numéricos:', csvData); // Depuración
  
    // Paso 7: Establecer el tipo de contenido
    res.setHeader('Content-Type', 'text/csv'); // Establece el tipo de contenido a CSV
    
    // Paso 8: Enviar CSV al frontend
    res.send(csvData); // Enviar CSV al frontend
    console.log("Envio data exitoso");
};