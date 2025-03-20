// Backend/src/utils/sheetUtils.js

/**
 * Establece el valor de fileYear en la celda C3 de Sheet0 del workbook.
 * @param {Workbook} workbook - El workbook de Excel.
 * @param {number} fileYear - El año a establecer.
 * @throws {Error} Si la hoja no existe o si el año no es válido.
 */
function setFileYear(workbook, fileYear) {
    try {
        const sheet0 = workbook.sheet(0); // Acceder a la primera hoja por índice
        if (!sheet0) {
            throw new Error('Sheet0 no existe en el workbook.');
        }

        sheet0.cell('C3').value(fileYear);
        console.log(`Año ${fileYear} establecido en Sheet0!C3.`);
    } catch (error) {
        console.error('Error al establecer el año en Sheet0:', error.message);
        throw error; // Propagar el error para que pueda ser manejado por el llamador si es necesario
    }
}

module.exports = {
    setFileYear,
};
