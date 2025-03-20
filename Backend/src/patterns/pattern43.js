module.exports = {
    name: 'Pattern43',
    sheetIndex: 43,
    primaryKeySheetIndex: 43, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'Q', // Columna para llaves primarias
    baseStartRow: 139,
    basePrimaryKeyStartRow: 139,
    startRowIncrement: 40, //
    primaryKeyStartRowIncrement: 40,
    names: ['A', 'B', 'C', 'D', 'E', 'F', 'G','X','Y','Z','W','H'], //no se que es
    baseDataStartRowBDA: [3,3,3,3,3,3,33,3,3,3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBDA: [21,21,21,21,21,21,21,21,21,21,21,21,21], //salto de claves bda
    baseDataStartRowBFE: [3,3,3,3,3,3,3,3,3,3,3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [21,21,21,21,21,21,21,21,21,21,21,21,21], //salto de claves bda
    defaultRowGap: [0,0,0,0,1,0,1,0,1,0,1,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [1,1,1,1,1,1,1,1,1,1,1,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Superf_transicion_SL','Superf_transicion_SL','Superf_transicion_SL','Superf_transicion_SL','Superf_transicion_SL','Superf_transicion_SL', 'Superf_transicion_SL', 'Superf_transicion_SL', 'Superf_transicion_SL', 'Superf_transicion_SL', 'Superf_transicion_SL', 'Superf_transicion_SL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN', 'Biomasa Stock_BN', 'Biomasa Stock_BN'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D','D','D', 'D', 'D','D','D','D', 'D', 'D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['X', 'X', 'X', 'X', 'X', 'X', 'X','X', 'X', 'X', 'X', 'X'], //columna de donde esta el año bfe
    useDirectRange: [false, false, false, false, false, false, false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null, null, null, null, null, null, null], //donde empieza a iterar
    directRangeEnd: [null, null, null, null, null, null, null], //donde termina de iterar
    specialRowIndex: [null, null, null, null, null, null, null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0,0,0,0,0,0,0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true, true,true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [680, 680,680,680,680,680,680,680,680,680,680,680], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true, true,true,true,true,true,true,true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [680, 680,680,680,680,680,680,680,680,680,680,680], //rango de filas en que va a buscar
    destinationColumns: [
        [
            {operationName: 'workbookBDA', destinationColumn: 'D'},
            {operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},
            {operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'B{65}'},
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'C{65}'},
            {operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'D{65}'},
            {operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'B117' },
            {operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'C117' },
            {operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'D117' },
            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},
        ], 
        [
            {operationName: 'workbookBDA', destinationColumn: 'D'},

            {operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},
            {operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{65}'},
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{65}'},
            {operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{65}'},

            {operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'B118' },
            {operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'C118' },
            {operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'D118' },
            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},                        
        ],    
        [
            {operationName: 'workbookBDA', destinationColumn: 'D'},
            {operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},
            {operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'E{65}'},
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'F{65}'},
            {operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'G{65}'},
            {operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'B118' },
            {operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'C118' },
            {operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'D118' },
            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},                        
        ],
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 139, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 3, // Cantidad de filas dentro de cada rango
            suma:false,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 139, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 3, // Cantidad de filas dentro de cada rango
            suma:false,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 139, // Fila de inicio para las operaciones
            rangeOffsetFormula: 30, // Diferencia entre bloques de rangos
            rangeSize: 3, // Cantidad de filas dentro de cada rango
            suma:false,         
            }      
        ],
        [
            {operationName: 'workbookBDA', destinationColumn: 'D'},
            {operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},

            {operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'H{65}'},
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'I{65}'},
            {operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'J{65}'},
            {operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'H{45}'}, //diferenetes
            {operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}'}, //diferentes
            {operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'J{45}'}, //diferentes

            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},                        
        ],   
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 143, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 143, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 143, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ],
        [
            {operationName: 'workbookBDA', destinationColumn: 'D'},
            {operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},
            {operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{65}'},
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'L{65}'},
            {operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'M{65}'},
            {operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'B119' },
            {operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'C119' },
            {operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'D119' },
            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},                        
        ],   
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 146, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 146, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 146, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ],
        [
            {operationName: 'workbookBDA', destinationColumn: 'D'},
            {operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},
            {operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'N{65}'},
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'O{65}'},
            {operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'P{65}'},
            {operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'B120' },
            {operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'C120' },
            {operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'D120' },
            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},                        
        ],  
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 149, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 149, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 149, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ],
        [
            {operationName: 'workbookBDA', destinationColumn: 'D'},
            {operationName: 'fixed', destinationColumn: 'E', sourceSheetName: 'Carbono del suelo', fixedCell: 'K{2}'},
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},
            {operationName: 'fixed', destinationColumn: 'G', sourceSheetName: 'Carbono del suelo', fixedCell: 'T{45}'},
            {operationName: 'fixed', destinationColumn: 'H', sourceSheetName: 'Carbono del suelo', fixedCell: 'U{45}'},
            {operationName: 'fixed', destinationColumn: 'I', sourceSheetName: 'Carbono del suelo', fixedCell: 'V{45}'},
            {operationName: 'fixed', destinationColumn: 'J', sourceSheetName: 'Carbono del suelo', fixedCell: 'T{45}'}, //dif
            {operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'U{45}'}, //dif
            {operationName: 'fixed', destinationColumn: 'L', sourceSheetName: 'Carbono del suelo', fixedCell: 'V{45}'}, //dif
            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},                        
        ],   
        [{
            operationName: 'formula-niconii',
            destinationColumn: 'D', // Columna donde se almacenará el resultado
            formula: '=SUMA(D{startRow}:D{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 152, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,
            
            },
          {
            operationName: 'formula-niconii',
            destinationColumn: 'M', // Columna donde se almacenará el resultado
            formula: '=SUMA(M{startRow}:M{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 152, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,
            distancia:1,            
            },
            {
            operationName: 'formula-niconii',
            destinationColumn: 'N', // Columna donde se almacenará el resultado
            formula: '=SUMA(N{startRow}:N{endRow})', // Fórmula con rangos dinámicos
            totalRowsFormula: 16, // Total de iteraciones (por ejemplo, 5 bloques de SUMA)
            destinationStartRowFormula: 152, // Fila de inicio para las operaciones
            rangeOffsetFormula: 40, // Diferencia entre bloques de rangos
            rangeSize: 1, // Cantidad de filas dentro de cada rango
            suma:false,    
            distancia:1,     
            }      
        ]                                    
    ],
}