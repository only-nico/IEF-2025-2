module.exports = {
    name: 'Pattern12',
    sheetIndex: 12, // Hoja de salida en el workbook de plantilla
    primaryKeySheetIndex: 12, // Índice de la hoja para llaves primarias
    primaryKeyColumn: 'M', // Columna para llaves primarias
    baseStartRow: 133,
    basePrimaryKeyStartRow: 133,
    startRowIncrement: 40, // Incremento de startRow para cada región
    primaryKeyStartRowIncrement: 40, // Incremento de primaryKeyStartRow para cada región
    names: ['A', 'B', 'C', 'D','E','F','G','H','I','J','U','V','X','Y','Z'],
    baseDataStartRowBDA: [5, 6, 5, 6, 5, 6, 5, 6, 5, 6,0,0,0,0,0],
    dataStartRowIncrementBDA: [21, 0, 21, 0, 21, 0, 21, 0, 21, 0,0,0,0,0,0],
    baseDataStartRowBFE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0], //la operacion 'workbookBFE' no se ocupa en este pattern 
    dataStartRowIncrementBFE: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
    defaultRowGap: [0, 1, 0, 1, 0, 1, 0, 1, 0, 0,0,0,0,0,0],
    defaultTotalRows: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,0,0,0,0,0],
    sourceWorkbook1Sheets: ['Tierras convertidas_año a BN', 'Tierras convertidas a FP', 'Tierras convertidas_año a BN', 'Tierras convertidas a FP',
                            'Tierras convertidas_año a BN', 'Tierras convertidas a FP', 'Tierras convertidas_año a BN', 'Tierras convertidas a FP',
                            'Tierras convertidas_año a BN', 'Tierras convertidas a FP','Tierras convertidas a FP','Tierras convertidas a FP','Tierras convertidas a FP','Tierras convertidas a FP','Tierras convertidas a FP'],
    sourceWorkbook2Sheets: ['Increm_Biom_ConversionBN_ponder', 'IMA_PF_ponderado','Increm_Biom_ConversionBN_ponder', 'IMA_PF_ponderado',
                            'Increm_Biom_ConversionBN_ponder', 'IMA_PF_ponderado','Increm_Biom_ConversionBN_ponder', 'IMA_PF_ponderado',
                            'Increm_Biom_ConversionBN_ponder', 'IMA_PF_ponderado','IMA_PF_ponderado','IMA_PF_ponderado','IMA_PF_ponderado','IMA_PF_ponderado','IMA_PF_ponderado'],
    sourceExtractColumns1Base: ['D', 'G', 'D', 'G', 'D', 'G', 'D', 'G', 'D', 'G','G', 'D', 'G', 'D', 'G'],
    sourceExtractColumns2Base: ['D', 'G', 'D', 'G','D', 'G', 'D', 'G','D', 'G','G', 'D', 'G', 'D', 'G'], //la operacion 'workbookBFE' no se ocupa en este pattern 
    useDirectRange: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
    directRangeStart: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ],
    directRangeEnd: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    specialRowIndex: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    specialRowIndexIncrement: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0],
    fixedRangePKboolBDA: [true,true,true,true,true,true,true,true,true,true,,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [105,107,105,107,105,107,105,107,105,107,107,105,107,105,107], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //rango de filas en que va a buscar
    destinationColumns: [
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'D{16}'  },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D',  specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'D{16}'  },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'G{16}'  },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'G{16}'  },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D',},
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'J{16}'  },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D',specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'J{16}'  },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D'},
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'M{16}'  },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D',specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'M{16}'  },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'P{16}'  },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],
        [
            { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition:true },
            { operationName: 'fixed', destinationColumn: 'F', sourceSheetName: 'Stock_Otras Tierras', fixedCell: 'P{16}'  },
            { operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Factores emisión', fixedCell: 'B6'},
            { operationName: 'formula', destinationColumn: 'H', formula: '=(E{row}-F{row})*D{row}*G{row}'},
            { operationName: 'formula', destinationColumn: 'I', formula: '=(H{row} * {factorEmisionB12})/1000'},
        ],[{
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
            },
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
        ],[{
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
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 136, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
          
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 136, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,       
            }      
        ], [{
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
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 139, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
           
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 139, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,    
    
            }      
        ],[{
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
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 142, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
           
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 142, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,    
                    }      
        ],[{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 145, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 145, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,
          
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 145, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 2, // Cantidad de filas dentro de cada rango
            suma:false,    
    
            }      
        ]
        
    ],
}
