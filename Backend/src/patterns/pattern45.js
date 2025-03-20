module.exports = {
    name: 'Pattern45',
    sheetIndex: 45,
    primaryKeySheetIndex: 45, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 125,
    basePrimaryKeyStartRow: 125,
    startRowIncrement: 37,// -> aki voy
    primaryKeyStartRowIncrement: 37,
    names: ['A', 'B', 'C', 'D', 'E','X','Y','Z','W','T'], //no se que es
    baseDataStartRowBDA: [3,3,3,3,3,3,3,3,3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBDA: [21,21,21,21,21,21,21,21,21,21], //salto de claves bda
    baseDataStartRowBFE: [3,3,3,3,3,3,3,3,3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [21,21,21,21,21,21,21,21,21,21], //salto de claves bda
    defaultRowGap: [0,0,1,0,1,0,1,0,1,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [3,1,1,1,1,1,1,1,1,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert OL','Superficie_ Tierras convert OL','Superficie_ Tierras convert OL','Superficie_ Tierras convert OL','Superficie_ Tierras convert OL','Superficie_ Tierras convert OL', 'Superficie_ Tierras convert OL', 'Superficie_ Tierras convert OL', 'Superficie_ Tierras convert OL', 'Superficie_ Tierras convert OL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Factores expansión_bosques', 'Factores expansión_bosques','Factores expansión_bosques','Factores expansión_bosques','Factores expansión_bosques','Factores expansión_bosques', 'Factores expansión_bosques', 'Factores expansión_bosques', 'Factores expansión_bosques'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D', 'D', 'D', 'D','D','D', 'D', 'D', 'D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['X', 'X', 'X', 'X', 'X','X', 'X', 'X', 'X', 'X'], //columna de donde esta el año bfe
    useDirectRange: [false, false, false, false,false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null, null, null, null, null], //donde empieza a iterar
    directRangeEnd: [null, null, null, null, null], //donde termina de iterar
    specialRowIndex: [null, null, null, null, null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0,0,0,0,0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true, true, true, true, true,true, true, true, true, true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [680, 680, 680, 680,680,680, 680, 680, 680,680], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true, true, true, true, true,true, true, true, true, true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [680, 680, 680, 680,680,680, 680, 680, 680,680], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo                        
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 125, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 3, // Cantidad de filas dentro de cada rango
            suma:false,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 125, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 3, // Cantidad de filas dentro de cada rango
            suma:false,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 125, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 3, // Cantidad de filas dentro de cada rango
            suma:false,         
            }      
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo                        
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 129, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 129, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 129, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo                        
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 132, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 132, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 132, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo                        
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 135, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 135, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 135, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', isSummed: false, condicion: false }, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo                        
            { operationName: 'formula', destinationColumn: 'I', formula: '=(G{row}+((0-E{row})*F{row})-H{row})*D{row}'},
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000'},
        ],[{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 138, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 138, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'J', // Columna donde se almacenará el resultado
            formula: '=SUMA(J{startRow}:J{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 138, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ]
    ],
}