// pattern1
module.exports = {

    name: 'Pattern1',
    sheetIndex: 1, // Hoja de salida en el workbook de plantilla
    primaryKeySheetIndex: 1, // Índice de la hoja para llaves primarias
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 13,
    basePrimaryKeyStartRow: 13,
    startRowIncrement: 59, // Incremento de startRow para cada región
    primaryKeyStartRowIncrement: 59, // Incremento de primaryKeyStartRow para cada región
    names: ['A', 'B', 'C', 'D'],
    baseDataStartRowBDA: [4, 5, 4, 3],
    dataStartRowIncrementBDA: [15, 18, 15, 5],
    baseDataStartRowBFE: [4, 5, 4, 3],
    dataStartRowIncrementBFE: [15, 18, 15, 5],
    defaultRowGap: [1, 1, 1, 0],
    defaultTotalRows: [13, 13, 13, 6],
    sourceWorkbook1Sheets: ['Renovales', 'BN_Manejado', 'SNASPE', 'PF_PF'],
    sourceWorkbook2Sheets: ['Incr_RENOVAL_ponderado', 'Incremento Bosques Naturales', 'Incr_SNASPE_ponderado', 'IMA_PF_ponderado'],
    sourceExtractColumns1Base: ['C', 'D', 'C', 'G'],
    sourceExtractColumns2Base: ['C', 'D', 'C', 'G'],
    useDirectRange: [false, true],
    directRangeStart: [null, 'M3' ],
    directRangeEnd: [null, 'M14'] ,
    specialRowIndex: [273, null, 273, null],
    specialRowIndexIncrement: [15, 0, 15, 0],
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            // E
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21'  },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            // E
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21' },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}',},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            // E
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21' },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            // E
            { operationName: 'custom', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', cellsToExtract: ['C22', 'C23', 'C25', 'C21'] },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
    ],
};
