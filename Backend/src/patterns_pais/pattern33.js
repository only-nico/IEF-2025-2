module.exports = {
    name: 'Pattern33',
    sheetIndex: 33,
    primaryKeySheetIndex: 33, // Índice de la hoja para llaves primarias, no se que es
    primaryKeyColumn: 'O', // Columna para llaves primarias
    baseStartRow: 14,
    basePrimaryKeyStartRow: 15,
    startRowIncrement: 37,// Como se llena aqui si es solo una tabla?
    primaryKeyStartRowIncrement: 37,
    names: ['A'], 
    baseDataStartRowBDA: [4], // donde esta la primera clave de bda
    baseDataStartRowBFE: [185,185,185,185,185], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [21,21,21,21,21,21], //salto de claves bda
    defaultRowGap: [1,2,2,2,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [3,1,1,1,1], /// catidad de filas
    sourceWorkbook1Sheets: ['Incendios', 'Superficie_ Tierras convert WL', 'Superficie_ Tierras convert WL', 'Superficie_ Tierras convert WL', 'Superficie_ Tierras convert WL'], //plantillas bda workbookBDA buscarb
    sourceWorkbook2Sheets: ['Biomasa Stock_BN','Stock_Otras Tierras','Stock_Otras Tierras','Stock_Otras Tierras','Stock_Otras Tierras'], //plantillas para bfe workbookBFE buscarb o useDirectRange
    sourceExtractColumns1Base: ['D'], //columna de donde esta el año bda
    sourceExtractColumns2Base: ['E', 'E', 'E', 'E', 'E'], //columna de donde esta el año bfe
    specialRowIndexIncrement: [0], // salto de claves para condicion especial
    fixedRangePKboolBDA: [true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBDA: [129], //rango de filas en que va a buscar
    fixedRangePKboolBFE: [true], // para buscar en un range especifico en caso de que las claves no sean seguidas
    specialRangePKBFE: [222, 222,222,222,222], //rango de filas en que va a buscar
    destinationColumns: [
        [
        { operationName: 'workbookBDA', destinationColumn: 'D', specialCondition: true},
        { operationName: 'formula', destinationColumn: 'I', formula: '=IF(D{row}>0;((E74*D74+E104*D104+E134*D134+E164*D164+E194*D194+E224*D224+E254*D254+E284*D284+E314*D314+E344*D344+E374*D374+E404*D404+E434*D434+E464*D464+E494*D494+E524*D524)/D14);0)', specialCondition: true},
        { operationName: 'fixed', destinationColumn: 'K', sourceSheetName: 'Carbono del suelo', fixedCell: 'I{45}' },
        { operationName: "custom", destinationColumn: "H", sourceSheetName: "Factores emisión No-CO2", cellsToExtract: ['B5', 'B6', 'B7', 'B8']},  
        {
            operationName: "formula-diagonal",
            destinationColumn: 'I',
            formula: "=(D{row}*E{row}*F{row}*H{row})/1000"
          }
        ],
    ]
}