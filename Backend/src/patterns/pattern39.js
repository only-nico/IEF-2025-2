module.exports = {
    name: 'Pattern39',
    sheetIndex: 39,
    primaryKeySheetIndex: 39, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'L', // Columna para llaves primarias
    baseStartRow: 125,
    basePrimaryKeyStartRow: 125,
    startRowIncrement: 37,// -> aki voy
    primaryKeyStartRowIncrement: 37,
    names: ['A', 'B', 'C', 'D', 'E','X','Y','Z','W','U'], //no se que es
    baseDataStartRowBDA: [2,2,2,2,2,2,2,2,2,2], // donde esta la primera clave de bda
    baseDataStartRowBFE: [185,185,185,185,185,185,185,185,185,185], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [21,21,21,21,21,21,21,21,21,21,21,21], //salto de claves bda
    defaultRowGap:    [0,0,1,0,1,0,1,0,1,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [3,1,1,1,1,1,1,1,1,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert WL','Superficie_ Tierras convert WL','Superficie_ Tierras convert WL','Superficie_ Tierras convert WL','Superficie_ Tierras convert WL', 'Superficie_ Tierras convert WL', 'Superficie_ Tierras convert WL', 'Superficie_ Tierras convert WL', 'Superficie_ Tierras convert WL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Stock_Otras Tierras','Stock_Otras Tierras','Stock_Otras Tierras','Stock_Otras Tierras'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D','D','D','D','D','D','D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['E', 'E', 'E', 'E', 'E','E', 'E', 'E', 'E', 'E'], //columna de donde esta el año bfe
    useDirectRange: [false, false, false, false, false,], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null, null, null, null, null], //donde empieza a iterar
    directRangeEnd: [null, null, null, null, null], //donde termina de iterar
    specialRowIndex: [null, null, null, null, null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0,0,0,0,0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true, true,true,true,true,true, true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [680, 680,680,680,680,680, 680,680,680,680], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true, true,true,true,true,true, true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [222, 222,222,222,222,222, 222,222,222,222], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition: false},
            { operationName: 'formula', destinationColumn: 'E', formula: "0", specialCondition: false},
            { operationName: 'workbookBFE', destinationColumn: 'F'},
            { operationName: 'formula', destinationColumn: 'G', formula: '={factorEmisionB5}', specialCondition: false},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))*G{row}', specialCondition: false},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12} / 1000)', specialCondition: false},
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
            destinationColumn: 'H', // Columna donde se almacenará el resultado
            formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
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
            }      
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'formula', destinationColumn: 'E', formula: "0"},
            {operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'D{16}'},
            { operationName: 'formula', destinationColumn: 'G', formula: '={factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12} / 1000)'},
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
            destinationColumn: 'H', // Columna donde se almacenará el resultado
            formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
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
            }      
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'formula', destinationColumn: 'E', formula: "0"},
            {operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'G{16}'},
            { operationName: 'formula', destinationColumn: 'G', formula: '={factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12} / 1000)'},
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
            destinationColumn: 'H', // Columna donde se almacenará el resultado
            formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
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
            }      
        ],
        
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'formula', destinationColumn: 'E', formula: "0"},
            {operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'M{16}'},
            { operationName: 'formula', destinationColumn: 'G', formula: '={factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12} / 1000)'},
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
            destinationColumn: 'H', // Columna donde se almacenará el resultado
            formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
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
            }      
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'formula', destinationColumn: 'E', formula: "0"},
            {operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'P{16}'},
            { operationName: 'formula', destinationColumn: 'G', formula: '={factorEmisionB6}'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12} / 1000)'},
        ],
        [{
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
            destinationColumn: 'H', // Columna donde se almacenará el resultado
            formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
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
            }      
        ],
    ],
}