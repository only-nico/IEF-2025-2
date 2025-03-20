module.exports = {
    name: 'Pattern43',
    sheetIndex: 43,
    primaryKeySheetIndex: 43, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'Q', // Columna para llaves primarias
    baseStartRow: 15,
    basePrimaryKeyStartRow: 15,
    startRowIncrement: 40, //
    primaryKeyStartRowIncrement: 40,
    names: ['A', 'B', 'C', 'D', 'E'], //no se que es
    baseDataStartRowBDA: [3,3,3,3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBDA: [,21,21,21,21,21,21], //salto de claves bda
    baseDataStartRowBFE: [3,3,3,3,3], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [21,21,21,21,21,21], //salto de claves bda
    defaultRowGap: [1,1,1,1,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [6,2,2,2,2], /// catidad de filas
    sourceWorkbook1Sheets: ['Superf_transicion_SL', 'Superf_transicion_SL', 'Superf_transicion_SL', 'Superf_transicion_SL', 'Superf_transicion_SL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN','Biomasa Stock_BN','Biomasa Stock_BN', 'Biomasa Stock_BN', 'Biomasa Stock_BN'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D','D','D', 'D', 'D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['X', 'X', 'X', 'X', 'X'], //columna de donde esta el año bfe
    useDirectRange: [false, false, false, false, false], // la usa para el workbookBF cuando itera de 1 en 1
    directRangeStart: [null, null, null, null, null], //donde empieza a iterar
    directRangeEnd: [null, null, null, null, null], //donde termina de iterar
    specialRowIndex: [null, null, null, null, null], // donde va air a buscar la clave estra para la condicion especial anterior
    specialRowIndexIncrement: [0,0,0,0,0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [680,680,680,680,680], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true,true,true,true,true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [680,680,680,680,680], //rango de filas en que va a buscar
    destinationColumns: [
        [            
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},
            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},
        ],   
        [            
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},
            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},
        ], 
        [            
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},
            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},
        ], 
        [            
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},
            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},
        ], 
        [            
            {operationName: 'formula', destinationColumn: 'F', formula: '20'},
            {operationName: 'formula', destinationColumn: 'M', formula: '=((D{row}*E{row}*G{row}*H{row}*I{row})-(D{row}*E{row}*J{row}*K{row}*L{row}))/F{row}'},
            {operationName: 'formula', destinationColumn: 'N', formula: '=(M{row}*{factorEmisionB12})/1000'},
        ],                                                                     
    ],
}