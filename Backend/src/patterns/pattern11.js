module.exports = {
    name: 'Pattern11',
    sheetIndex: 11, // Hoja de salida en el workbook de plantilla
    primaryKeySheetIndex: 11, // Índice de la hoja para llaves primarias
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 197,
    basePrimaryKeyStartRow: 197,
    startRowIncrement: 62, // Incremento de startRow para cada región
    primaryKeyStartRowIncrement: 62, // Incremento de primaryKeyStartRow para cada región
    names: ['A', 'B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'],
    baseDataStartRowBDA: [5, 3, 5, 3, 5, 3, 5, 3, 5, 3],
    dataStartRowIncrementBDA: [21, 0, 21, 0, 21, 0, 21, 0, 21, 0],
    baseDataStartRowBFE: [5, 3, 5, 3, 5, 3, 5, 3, 5, 3],
    dataStartRowIncrementBFE: [20, 0, 20, 0, 20, 0, 20, 0, 20, 0],
    defaultRowGap: [2, 3, 2, 3,2, 3, 2, 3, 2,0,0,0,0,0,0,0,0,0,0],
    defaultTotalRows: [1, 4, 1, 4, 1, 4, 1, 4, 1, 4,0,0,0,0,0,0,0,0,0],
    sourceWorkbook1Sheets: ['Tierrastransicion  a BN_Biomasa', 'Tierras_transición_PF', 'Tierrastransicion  a BN_Biomasa', 'Tierras_transición_PF',
                            'Tierrastransicion  a BN_Biomasa', 'Tierras_transición_PF', 'Tierrastransicion  a BN_Biomasa', 'Tierras_transición_PF',
                            'Tierrastransicion  a BN_Biomasa', 'Tierras_transición_PF'],
    sourceWorkbook2Sheets: ['Increm_Biom_ConversionBN_ponder', 'IMA_PF_ponderado','Increm_Biom_ConversionBN_ponder', 'IMA_PF_ponderado',
                            'Increm_Biom_ConversionBN_ponder', 'IMA_PF_ponderado','Increm_Biom_ConversionBN_ponder', 'IMA_PF_ponderado',
                            'Increm_Biom_ConversionBN_ponder', 'IMA_PF_ponderado'],
    sourceExtractColumns1Base: ['D', 'I', 'D', 'I','D', 'I', 'D', 'I','D', 'I'],
    sourceExtractColumns2Base: ['D', 'G', 'D', 'G','D', 'G', 'D', 'G','D', 'G'],
    useDirectRange: [false, false, false, false, false, false, false, false, false, false ],
    directRangeStart: [null, null, null, null, null, null, null, null, null, null ],
    directRangeEnd: [null, null, null, null, null, null, null, null, null, null],
    specialRowIndex: [null, 7, null, 92, null, 177, null, 262, null, 347],
    specialRowIndexIncrement: [0, 5, 0, 5, 0, 5, 0, 5, 0, 5],
    fixedRangePKboolBDA: [true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [105,512,105,512,105,512,105,512,105,512], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [101,82,101,82,101,82,101,82,101,82], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'workbookBFE', destinationColumn: 'E', primaryKeyColumn: 'M' },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21'  },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})'},
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}',specialCondition: true},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000',specialCondition: true},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D',  specialCondition:true },
            { operationName: 'workbookBFE', destinationColumn: 'E', primaryKeyColumn: 'N'},
            { operationName: 'custom', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', cellsToExtract: ['C22','C23','C25','C21'] },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}', specialCondition: true},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000', specialCondition: true},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'workbookBFE', destinationColumn: 'E', primaryKeyColumn: 'M'},
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21'  },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})'},
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}',specialCondition: true},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000',specialCondition: true},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'workbookBFE', destinationColumn: 'E', primaryKeyColumn: 'N'},
            { operationName: 'custom', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', cellsToExtract: ['C22','C23','C25','C21'] },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}',specialCondition: true},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000',specialCondition: true},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D',},
            { operationName: 'workbookBFE', destinationColumn: 'E', primaryKeyColumn: 'M'},
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21'  },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})'},
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}',specialCondition: true},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000',specialCondition: true},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D',specialCondition:true },
            { operationName: 'workbookBFE', destinationColumn: 'E', primaryKeyColumn: 'N'},
            { operationName: 'custom', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', cellsToExtract: ['C22','C23','C25','C21'] },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}',specialCondition: true},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000',specialCondition: true},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'workbookBFE', destinationColumn: 'E', primaryKeyColumn: 'M'},
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21'  },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})'},
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}',specialCondition: true},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000',specialCondition: true},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D',specialCondition:true },
            { operationName: 'workbookBFE', destinationColumn: 'E', primaryKeyColumn: 'N'},
            { operationName: 'custom', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', cellsToExtract: ['C22','C23','C25','C21'] },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}',specialCondition: true},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000',specialCondition: true},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', },
            { operationName: 'workbookBFE', destinationColumn: 'E', primaryKeyColumn: 'M' },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21'  },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})'},
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}',specialCondition: true},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000',specialCondition: true},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'workbookBFE', destinationColumn: 'E', primaryKeyColumn: 'N' },
            { operationName: 'custom', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', cellsToExtract: ['C22','C23','C25','C21'] },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}',specialCondition: true},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000',specialCondition: true},
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 200, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 200, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,
                 }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 200, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,

                    }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 210, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 210, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,
                 }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 210, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,

                    }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 220, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 220, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,
                 }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 220, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,

                    }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 230, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 230, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,
                 }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 230, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,

                    }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 240, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 240, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,
                 }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 240, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 5, // Cantidad de filas dentro de cada rango
            suma:true,

                    }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 197, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 197, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,
                 }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 197, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,

                    }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 207, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 207, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,
                 }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 207, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,

                    }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 217, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 217, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,
                 }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 217, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,

                    }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 227, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 227, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,
                 }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 227, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,

                    }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 237, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 237, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,
                 }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 237, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:true,

                    }
        ],
        
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}+D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 196, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                }  ,
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}+I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 196, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}+J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 196, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                    }],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}+D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 206, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                }  ,
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}+I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 206, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}+J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 206, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                    }],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}+D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 216, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                }  ,
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}+I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 216, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}+J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 216, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                    }],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}+D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 226, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                }  ,
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}+I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 226, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}+J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 226, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                    }],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}+D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 236, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                }  ,
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}+I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 236, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}+J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 236, // Fila de inicio para las operaciones
            rangeOffsetFormula: 62, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            condicionSuma:true,
            distancia:5,
                    }],       
    ],
}
