// src/controllers/generateTemplateController.js

const { trace } = require('../utils/trace');
const { generateTemplateService } = require('../services/templateService');

/**
 * Función principal que genera la plantilla y envía la descarga.
 */
async function _generateTemplate(req, res) {
  try {
    const { fileBDA, fileBFE, fileYear } = req.body;

    if (!fileBDA || !fileBFE) {
      return res
        .status(400)
        .send('Se deben proporcionar los nombres de los archivos BDA y BFE.');
    }

    const outputPath = await generateTemplateService(
      fileBDA,
      fileBFE,
      fileYear
    );

    res.download(
      outputPath,
      `2024_${fileYear}-4UTCUTS.xlsx`,
      (err) => {
        if (err) {
          console.error('Error al descargar el archivo:', err);
          res.status(500).send('Error al descargar el archivo');
        } else {
          console.log('RUTA SALIDA: ', outputPath);
          console.log('Archivo descargado exitosamente.');
        }
      }
    );
  } catch (error) {
    console.error('!! generateTemplate ERROR:', error.message);
    res.status(500).send('Error al generar la plantilla');
  }
}

// Exporta la versión instrumentada
exports.generateTemplate = trace(_generateTemplate, 'generateTemplate');