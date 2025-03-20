module.exports = {
    name: 'Pattern13',
    sheetIndex: 13,
    primaryKeySheetIndex: 13, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 130,
    basePrimaryKeyStartRow: 130,
    startRowIncrement: 40,
    primaryKeyStartRowIncrement: 40,
    names: ['sec1','sec2','X','sec3','sec4','Y','sec5','sec6','W','sec7','sec8','Z','sec9','sec10','A'], // division de tabla 
    baseDataStartRowBDA: [3,598,598,3,598,598,3,598,598,3,598,598,3,598,598], // donde esta la primera clave de bda
    baseDataStartRowBFE: [74,219,219,74,219,219,74,219,219,74,219,219,74,219,219], // donde esta la primera clave de bda
    defaultTotalRows: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], /// catidad de filas
    defaultRowGap: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //si hay que saltarse algo en la plantilla (fila vacia)
    sourceWorkbook1Sheets: ['Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierras_transición_PF','Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierras_transición_PF',
        'Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierras_transición_PF',
        'Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierras_transición_PF','Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierras_transición_PF'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM ','DOM '], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','G','G','D','G','G','D','G','G','D','G','G','D','G','G'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['F','F','F','F','F','F','F','F','F','F','F','F','F','F','F'], //columna de donde esta el año bfe
    fixedRangePKboolBDA: [true,true,true,true,true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [105,694,694,105,694,695,105,694,694,105,694,694,105,694], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [154,315,315,154,315,315,154,315,315,154,315,315,154,315], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            {
                operationName: 'formula-niconii',
                destinationColumn: 'D', // Columna donde se almacenará el resultado
                formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 130, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                },
                {
                operationName: 'formula-niconii',
                destinationColumn: 'H', // Columna donde se almacenará el resultado
                formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 130, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                    }  ,
                    {
                operationName: 'formula-niconii',
                destinationColumn: 'I', // Columna donde se almacenará el resultado
                formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 130, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                        }    
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            {
                operationName: 'formula-niconii',
                destinationColumn: 'D', // Columna donde se almacenará el resultado
                formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 133, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                },
                {
                operationName: 'formula-niconii',
                destinationColumn: 'H', // Columna donde se almacenará el resultado
                formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 133, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                    }  ,
                    {
                operationName: 'formula-niconii',
                destinationColumn: 'I', // Columna donde se almacenará el resultado
                formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 133, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                        }    
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            {
                operationName: 'formula-niconii',
                destinationColumn: 'D', // Columna donde se almacenará el resultado
                formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 136, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                },
                {
                operationName: 'formula-niconii',
                destinationColumn: 'H', // Columna donde se almacenará el resultado
                formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 136, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                    }  ,
                    {
                operationName: 'formula-niconii',
                destinationColumn: 'I', // Columna donde se almacenará el resultado
                formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 136, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                        }    
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            {
                operationName: 'formula-niconii',
                destinationColumn: 'D', // Columna donde se almacenará el resultado
                formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 139, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                },
                {
                operationName: 'formula-niconii',
                destinationColumn: 'H', // Columna donde se almacenará el resultado
                formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 139, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                    }  ,
                    {
                operationName: 'formula-niconii',
                destinationColumn: 'I', // Columna donde se almacenará el resultado
                formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 139, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                        }    
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'workbookBFE', destinationColumn: 'E'},
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 0},
            { operationName: 'manualValue', destinationColumn: 'G', manualValue: 20},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(D{row}*(E{row}-F{row}))/G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            {
                operationName: 'formula-niconii',
                destinationColumn: 'D', // Columna donde se almacenará el resultado
                formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 142, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                },
                {
                operationName: 'formula-niconii',
                destinationColumn: 'H', // Columna donde se almacenará el resultado
                formula: '=SUMA(H{startRow}:H{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 142, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                    }  ,
                    {
                operationName: 'formula-niconii',
                destinationColumn: 'I', // Columna donde se almacenará el resultado
                formula: '=SUMA(I{startRow}:I{endRow})', // Fórmula con rangos dinámicos
                totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
                destinationStartRowFormula: 142, // Fila de inicio para las operaciones
                rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
                rangeSize: 2, // Cantidad de filas dentro de cada rango
                suma:false,
                        }    
        ],

    ],
}