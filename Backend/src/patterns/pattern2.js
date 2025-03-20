//Backend/src/patternspattern2.js

module.exports = {
    name: 'Pattern2',
    sheetIndex: 2,
    primaryKeySheetIndex: 2, // Índice de la hoja para llaves primarias
    primaryKeyColumn: 'L', // Columna para llaves primarias
    baseStartRow: 74,
    basePrimaryKeyStartRow: 74,
    startRowIncrement: 20,
    primaryKeyStartRowIncrement: 20,
    names: ['X','Y'],
    baseDataStartRowBDA: [4],
    defaultRowGap: [0,0],
    defaultTotalRows: [4,1],
    sourceWorkbook1Sheets: ['Cosecha_trozas'],
    sourceWorkbook2Sheets: ['Factores expansión_bosques'],
    sourceExtractColumns1Base: ['D'],
    sourceExtractColumns2Base: ['D'],
    useDirectRange: [true],
    directRangeStart: ['F5'],
    directRangeEnd: ['F8'],
    specialRowIndex: [null],
    specialRowIndexIncrement: [0],
    fixedRangePKboolBDA: [true],
    specialRangePKBDA: [83],
    destinationColumns: [
    
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false },
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'custom', destinationColumn: 'F', sourceSheetName: 'Factores expansión_bosques', cellsToExtract: ['C22', 'C23', 'C25', 'C21'] },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B5' },
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*E{row}*(1+F{row})*G{row})*-1', isSummed: false , condicion: false},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000', isSummed: false, condicion: false },
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 74, // Fila de inicio para las operaciones
            rangeOffsetFormula: 20, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'H', // Columna donde se almacenará el resultado
            formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 74, // Fila de inicio para las operaciones
            rangeOffsetFormula: 20, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
                }  ,
                {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 74, // Fila de inicio para las operaciones
            rangeOffsetFormula: 20, // Diferencia entre bloques de rangos
            rangeSize: 4, // Cantidad de filas dentro de cada rango
            suma:false,
                    }          ]
    ],
}