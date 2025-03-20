module.exports = {
    name: 'Pattern14',
    sheetIndex: 14,
    primaryKeySheetIndex: 14, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'R', // Columna para llaves primarias
    baseStartRow: 147,
    basePrimaryKeyStartRow: 147,
    startRowIncrement: 45,
    primaryKeyStartRowIncrement: 45,
    names: ['sec1','sec2','X','sec3','sec4','Y','sec5','sec6','W','sec7','sec8','T','sec9','sec10','Z'], // division de tabla 
    baseDataStartRowBDA: [3,598,3,3,598,3,3,598,3,3,598,3,3,598,3], // donde esta la primera clave de bda
    baseDataStartRowBFE: [74,219,219,74,219,219,74,219,219,74,219,219,74,219,219], // donde esta la primera clave de bda
    defaultTotalRows: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], /// catidad de filas
    defaultRowGap:    [0,1,0,0,1,0,0,1,0,0,1,0,0,1,0], //si hay que saltarse algo en la plantilla (fila vacia)
    sourceWorkbook1Sheets: ['Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierras_transición_PF','Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierras_transición_PF',
        'Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierras_transición_PF',
        'Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierras_transición_PF','Tierratransicion-BN_DOM-Suelo','Tierras_transición_PF','Tierras_transición_PF'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo','Carbono del suelo'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','G','G','D','G','G','D','G','G','D','G','G','D','G','G'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['F','F','F','F','F','F','F','F','F','F','F','F','F','F','F'], //columna de donde esta el año bfe
    fixedRangePKboolBDA: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [105,694,694,105,694,694,105,694,694,105,694,694,105,694,694], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [154,315,315,154,315,315,154,315,315,154,315,315,154,315,315], //rango de filas en que va a buscar
    destinationColumns: [
        // los fixedCell : 'B{45}, van entre llaver porque aumenta en 1 cada region'
        [
            // sec1 -> primera fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'H{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'J{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec2 -> segunda fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'H{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'J{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 147, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 147, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 147, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ],
        [
            // sec3 -> tercera fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'L{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'M{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec4 -> cuarta fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'L{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'M{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 151, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 151, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 151, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ],
        [
            // sec5 -> quinta fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'N{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'O{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'P{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec6 -> sexta fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'N{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'O{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'P{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 155, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 155, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 155, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ],
        [
            // sec7 -> septima fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'Q{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'R{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'S{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec8 -> octava fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'Q{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'R{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'S{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 159, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 159, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 159, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ],
        [
            // sec9 -> novena fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'T{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'U{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'V{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [
            // sec10 -> decima fila
            { operationName: 'workbookBDA', destinationColumn: 'D'}, // isSummed:True suma de filas pero que el resultado va en la de arriba, false: suma abajo
            { operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}' },
            { operationName: 'manualValue', destinationColumn: 'F', manualValue: 20},
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{45}' },
            { operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{45}' },
            { operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{45}' },
            { operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'T{45}' },
            { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'U{45}' },
            { operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'V{45}' },
            { operationName: 'formula', destinationColumn: 'M', formula: '=((E{row}*G{row}*H{row}*I{row}*D{row})-(E{row}*J{row}*K{row}*L{row}*D{row}))/F{row}'},
            { operationName: 'formula', destinationColumn: 'N', formula: '=(M{row} * {factorEmisionB12})/1000'},
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 163, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 163, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 163, // Fila de inicio para las operaciones
            rangeOffsetFormula: 45, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ]
    ],
}