//Backend/src/patternspattern17.js
module.exports = {
    name: 'Pattern17',
    sheetIndex: 17,
    primaryKeySheetIndex: 17, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'K', // Columna para llaves primarias
    baseStartRow: 105,
    basePrimaryKeyStartRow: 105,
    startRowIncrement: 31,
    primaryKeyStartRowIncrement: 31,
    names: ['X','Y'], //no se que es
    baseDataStartRowBDA: [3], // donde esta la primera clave de bda
    dataStartRowIncrementBDA: [48], //salto de claves bda
    baseDataStartRowBFE: [3], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [48], //salto de claves bda
    defaultRowGap: [0,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [3,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Superficie_CL_perennes'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa_CL_Perenne'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['F'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['F'], //columna de donde esta el año bfe
    useDirectRange: [false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null], //donde empieza a iterar
    directRangeEnd: [null], //donde termina de iterar
    specialRowIndex: [null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [50], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [51], //rango de filas en que va a buscar
    destinationColumns: [
        [
            
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E' },
            { operationName: 'customWorkbookBFE', destinationColumn:'F',searchColumn: 'A',sourceSheetName: 'Biomasa_CL_Perenne',extractColumnBase: 'F',dataStartRow: 54,fixedRangePKbool: true,specialRangePK: 102,},
            { operationName: 'formula', destinationColumn: 'G', formula: '=((E{row}-F{row})*D{row})', isSummed: false , condicion: false},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(G{row} * {factorEmisionB12})/1000', isSummed: false, condicion: false },
        ],
        [
            {
                operationName: 'formula-niconii',
                destinationColumn: 'D', // Columna donde se almacenará el resultado
                formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 105, // Fila de inicio para las operaciones
                rangeOffsetFormula: 31, // Diferencia entre bloques de rangos
                rangeSize: 3, // Cantidad de filas dentro de cada rango
                suma:false,
                },
                {
                operationName: 'formula-niconii',
                destinationColumn: 'G', // Columna donde se almacenará el resultado
                formula: '=SUMA(G{startRow}:G{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 105, // Fila de inicio para las operaciones
                rangeOffsetFormula: 31, // Diferencia entre bloques de rangos
                rangeSize: 3, // Cantidad de filas dentro de cada rango
                suma:false,
                    }  ,
                    {
                operationName: 'formula-niconii',
                destinationColumn: 'H', // Columna donde se almacenará el resultado
                formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 105, // Fila de inicio para las operaciones
                rangeOffsetFormula: 31, // Diferencia entre bloques de rangos
                rangeSize: 3, // Cantidad de filas dentro de cada rango
                suma:false,
                        }           
        ],
    ],
}