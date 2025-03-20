module.exports = {
    name: 'Pattern21',
    sheetIndex: 21,
    primaryKeySheetIndex: 21, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 124,
    basePrimaryKeyStartRow: 124,
    startRowIncrement: 37,
    primaryKeyStartRowIncrement: 37,
    names: ['X','B','Y','C','Z','D','W','E','A','F'], //no se que es
    baseDataStartRowBDA: [2,2,2,2,2,2,2,2,2,2], // donde esta la primera clave de bda
    baseDataStartRowBFE: [102,102,102,102,102,102,102,102,102,102], // donde esta la primera clave de bda
    defaultRowGap: [1,0,1,0,1,0,1,0,1,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [2,1,1,1,1,1,1,1,1], /// catidad de filas a llenar
    sourceWorkbook1Sheets: ['Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL','Superficie_ Tierras convert CL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN','Stock_Otras Tierras','Biomasa Stock_BN','Biomasa Stock_BN','Stock_Otras Tierras','Stock_Otras Tierras','Stock_Otras Tierras','Stock_Otras Tierras','Stock_Otras Tierras','Stock_Otras Tierras','Stock_Otras Tierras'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D','D','D','D','D','D','D','D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['D','D','D','D','D','D','D','D','D','D'], //columna de donde esta el año bfe
    useDirectRange: [false,false,false,false,false,false,false,false,false,false], // la usa para el workbookBF cuando itera de 1 en 1
    specialRowIndex: [null,null,null,null,null,null,null,null,null,null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [943,943,943,943,943,943,943,943,943,943], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [140,140,140,140,140,140,140,140,140,140], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'workbookBFE', destinationColumn:'E'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión', fixedCell: 'B5'},
            { operationName: 'formula', destinationColumn: 'I', formula: ' =G{row}+((0-E{row})*D{row})*F{row}-H{row}' },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000' }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 124, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 3, // Cantidad de filas dentro de cada rango
            suma:false,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'H', // Columna donde se almacenará el resultado
            formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 124, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 3, // Cantidad de filas dentro de cada rango
            suma:false,
            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'I', // Columna donde se almacenará el resultado
            formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 124, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 3, // Cantidad de filas dentro de cada rango
            suma:false,
                
            }      
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'G{16}'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'I', formula: ' =G{row}+((0-E{row})*D{row})*F{row}-H{row}' },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000' }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 128, // Fila de inicio para las operaciones
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
            destinationStartRowFormula: 128, // Fila de inicio para las operaciones
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
            destinationStartRowFormula: 128, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
                
            }      
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'J31'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'I', formula: ' =G{row}+((0-E{row})*D{row})*F{row}-H{row}' },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000' }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 131, // Fila de inicio para las operaciones
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
            destinationStartRowFormula: 131, // Fila de inicio para las operaciones
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
            destinationStartRowFormula: 131, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
                
            }      
        ],

        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'M31'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'I', formula: ' =G{row}+((0-E{row})*D{row})*F{row}-H{row}' },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000' }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 134, // Fila de inicio para las operaciones
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
            destinationStartRowFormula: 134, // Fila de inicio para las operaciones
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
            destinationStartRowFormula: 134, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
                
            }      
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'E' ,sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'P31'},
            { operationName: 'fixed', destinationColumn: 'F' ,sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'I', formula: ' =G{row}+((0-E{row})*D{row})*F{row}-H{row}' },
            { operationName: 'formula', destinationColumn: 'J', formula: '=(I{row} * {factorEmisionB12})/1000' }
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 137, // Fila de inicio para las operaciones
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
            destinationStartRowFormula: 137, // Fila de inicio para las operaciones
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
            destinationStartRowFormula: 137, // Fila de inicio para las operaciones
            rangeOffsetFormula: 37, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
                
            }      
        ]
    ],
}