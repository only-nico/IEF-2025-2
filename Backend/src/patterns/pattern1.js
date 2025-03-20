//Backend/src/patterns/pattern1
module.exports = {

    name: 'Pattern1',
    sheetIndex: 1, // Hoja de salida en el workbook de plantilla
    primaryKeySheetIndex: 1, // Índice de la hoja para llaves primarias
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 191,
    basePrimaryKeyStartRow: 191,
    startRowIncrement: 59, // Incremento de startRow para cada región
    primaryKeyStartRowIncrement: 59, // Incremento de primaryKeyStartRow para cada región
    names: ['A','X','B','Y','C','W', 'D','Z'],
    baseDataStartRowBDA: [4,4, 5,5, 4,4, 3,3],
    dataStartRowIncrementBDA: [15,14, 18,18, 15,15, 5,5],
    baseDataStartRowBFE: [4,4, 5,5, 4,4, 3,3],
    dataStartRowIncrementBFE: [15,14,18,18, 15,15, 5,5],
    defaultRowGap: [0,0, 0, 0,0,0, 0,0],
    defaultTotalRows: [13,1, 12,1, 13,1, 5,1],
    sourceWorkbook1Sheets: ['Renovales','Renovales', 'BN_Manejado','BN_Manejado', 'SNASPE','SNASPE', 'PF_PF','PF_PF'],
    sourceWorkbook2Sheets: ['Incr_RENOVAL_ponderado','Incr_RENOVAL_ponderado', 'Incremento Bosques Naturales', 'Incremento Bosques Naturales','Incr_SNASPE_ponderado','Incr_SNASPE_ponderado', 'IMA_PF_ponderado','IMA_PF_ponderado'],
    sourceExtractColumns1Base: ['C','C', 'D','D', 'C','C', 'G','G'],
    sourceExtractColumns2Base: ['C','D', 'D','D', 'C','C', 'G','G'],
    useDirectRange: [false,false, true],
    directRangeStart: [null,null, 'M3' ],
    directRangeEnd: [null,null, 'M14'] ,
    specialRowIndex: [273,273, null, 273, null],
    specialRowIndexIncrement: [15,15, 0, 15, 0],
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: true, specialCondition:true },
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21'  },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}', isSummed: true, condicion: true, specialCondition: true },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000', isSummed: true , condicion: true, specialCondition: true},
        ],

        [
            {
                operationName: 'formula-niconii',
                destinationColumn: 'D', // Columna donde se almacenará el resultado
                formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 191, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 13, // Cantidad de filas dentro de cada rango
                suma:true,
                },
                {
                operationName: 'formula-niconii',
                destinationColumn: 'I', // Columna donde se almacenará el resultado
                formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 191, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 13, // Cantidad de filas dentro de cada rango
                suma:true,
                    }  ,
                    {
                operationName: 'formula-niconii',
                destinationColumn: 'J', // Columna donde se almacenará el resultado
                formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 191, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 13, // Cantidad de filas dentro de cada rango
                suma:true,
                        } 
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: true},
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21' },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}', isSummed: true, condicion: true },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000', isSummed: true , condicion: true},
        ],
        [
            {
                operationName: 'formula-niconii',
                destinationColumn: 'D', // Columna donde se almacenará el resultado
                formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 205, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 12, // Cantidad de filas dentro de cada rango
                suma:true,
                },
                {
                operationName: 'formula-niconii',
                destinationColumn: 'I', // Columna donde se almacenará el resultado
                formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 205, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 12, // Cantidad de filas dentro de cada rango
                suma:true,
                    }  ,
                    {
                operationName: 'formula-niconii',
                destinationColumn: 'J', // Columna donde se almacenará el resultado
                formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 205, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 12, // Cantidad de filas dentro de cada rango
                suma:true,
                        } 
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: true, specialCondition:true },
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', fixedCell: 'C21' },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}', isSummed: true, condicion: true, specialCondition:true },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000', isSummed: true , condicion: true, specialCondition:true},
        ],
        [
            {
                operationName: 'formula-niconii',
                destinationColumn: 'D', // Columna donde se almacenará el resultado
                formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 218, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 13, // Cantidad de filas dentro de cada rango
                suma:true,
                },
                {
                operationName: 'formula-niconii',
                destinationColumn: 'I', // Columna donde se almacenará el resultado
                formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 218, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 13, // Cantidad de filas dentro de cada rango
                suma:true,
                    }  ,
                    {
                operationName: 'formula-niconii',
                destinationColumn: 'J', // Columna donde se almacenará el resultado
                formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 218, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 13, // Cantidad de filas dentro de cada rango
                suma:true,
                        } 
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: true},
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'custom', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', cellsToExtract: ['C22', 'C23', 'C25', 'C21'] },
            { operationName: 'formula', destinationColumn: 'G', formula: '=E{row}*(1+F{row})' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'I', formula: '=D{row}*G{row}*H{row}', isSummed: true, condicion: true },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000', isSummed: true , condicion: true},
        ],
        [
            {
                operationName: 'formula-niconii',
                destinationColumn: 'D', // Columna donde se almacenará el resultado
                formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 232, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 5, // Cantidad de filas dentro de cada rango
                suma:true,
                },
                {
                operationName: 'formula-niconii',
                destinationColumn: 'I', // Columna donde se almacenará el resultado
                formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 232, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 5, // Cantidad de filas dentro de cada rango
                suma:true,
                    }  ,
                    {
                operationName: 'formula-niconii',
                destinationColumn: 'J', // Columna donde se almacenará el resultado
                formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 232, // Fila de inicio para las operaciones
                rangeOffsetFormula: 59, // Diferencia entre bloques de rangos
                rangeSize: 5, // Cantidad de filas dentro de cada rango
                suma:true,
                        } 
        ],
        
        
    ],
};