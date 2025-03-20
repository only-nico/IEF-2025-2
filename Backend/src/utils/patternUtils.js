//Backend/src/patternspattern2.js

// Funciones relacionadas con la generación de patrones y regiones

// Función para crear configuraciones de operaciones para cada sección
function createOperations(config) {
    const {
        patternName,
        sourceWorkbook1,
        sheet1,
        sourceWorkbook2,
        templateWorkbook_without46,
        sheet2,
        primaryKeySheet,
        primaryKeyColumn,
        startRow,
        totalRows,
        primaryKeyStartRow,
        primaryKeyTotalRows,
        dataStartRowBDA,
        dataStartRowBFE,
        sourceExtractColumn1,
        sourceExtractColumn2,
        factorEmisionB12,
        factorEmisionNo_CO2,
        arrayD_G_J_P,
        factorEmisionB6,
        otrasTierrasF9,
        otrasTierrasG9,
        factorEmisionB5,
        DiagramaflugoBincendiosL30,
        DiagramaflugoBincendiosC34,
        DiagramaflugoBincendiosF30,
        carbonoSueloB66,
        carbonoSueloC66,
        carbonoSueloD66,
        carbonoSueloB117,
        carbonoSueloC117,
        carbonoSueloD117,     
        useDirectRange = false,
        directRangeStart = null,
        directRangeEnd = null,
        specialCondition = false,
        specialRowIndex = null,
        specialRowIndexIncrement = 0,
        regionIndex = 0,
        destinationColumns,
        fixedRangePKboolBDA = false,
        fixedRangePKboolBFE = false,
        specialRangePKBDA = null,
        specialRangePKBFE = null,
        totalRowsFormula=0,
        destinationStartRowFormula=0,
        rangeOffsetFormula=0,
        rangeSize=0,
        suma=false,
        distancia=0,
        condicionSuma=false,
    } = config;

    const operations = [];

    for (const opConfig of destinationColumns) {
        const { operationName, destinationColumn } = opConfig;

        let dataStartRow;
        let fixedRangePKbool;
        let specialRangePK;

        // Utilizar la columna de llave primaria de opConfig si se proporciona, de lo contrario usar la predeterminada
        const opPrimaryKeyColumn = opConfig.primaryKeyColumn || primaryKeyColumn;

        if (operationName === 'workbookBDA') {
            dataStartRow = dataStartRowBDA;
            fixedRangePKbool = fixedRangePKboolBDA;
            specialRangePK = specialRangePKBDA;
        } else if (operationName === 'workbookBFE') {
            dataStartRow = dataStartRowBFE;
            fixedRangePKbool = fixedRangePKboolBFE;
            specialRangePK = specialRangePKBFE;
        } else {
            dataStartRow = config.dataStartRow;
            fixedRangePKbool = false;
            specialRangePK = null;
        }

        // Adjust totalRows and primaryKeyTotalRows if specialCondition is true for this operation
        let adjustedTotalRows = totalRows;
        let adjustedPrimaryKeyTotalRows = primaryKeyTotalRows;
        const operationSpecialCondition = opConfig.specialCondition || specialCondition;
        if (operationSpecialCondition) {
            adjustedTotalRows += 1;
            adjustedPrimaryKeyTotalRows += 1;
        }

        // Now create the operation object with adjusted values
        switch (operationName) {
            case 'workbookBDA':
                operations.push({
                    sourceWorkbook: sourceWorkbook1,
                    sourceSheetName: sheet1,
                    searchColumn: 'A',
                    extractColumn: sourceExtractColumn1,
                    destinationColumn: destinationColumn,
                    primaryKeySheet,
                    primaryKeyColumn: opPrimaryKeyColumn,
                    primaryKeyStartRow,
                    primaryKeyTotalRows: adjustedPrimaryKeyTotalRows,
                    destinationStartRow: startRow,
                    dataStartRow,
                    totalRows: adjustedTotalRows,
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: operationSpecialCondition,
                    specialRowIndex,
                    specialRowIndexIncrement,
                    regionIndex,
                    fixedRangePKbool,
                    specialRangePK,
                    operationType: 'extract',
                    useDirectRange: false,
                    directRangeStart: null,
                    directRangeEnd: null,
                });
                break;

            case 'workbookBFE':
                operations.push({
                    sourceWorkbook: sourceWorkbook2,
                    sourceSheetName: sheet2,
                    searchColumn: 'A',
                    extractColumn: sourceExtractColumn2,
                    destinationColumn: destinationColumn,
                    primaryKeySheet,
                    primaryKeyColumn: opPrimaryKeyColumn,
                    primaryKeyStartRow,
                    primaryKeyTotalRows: adjustedPrimaryKeyTotalRows,
                    destinationStartRow: startRow,
                    dataStartRow,
                    useDirectRange,
                    directRangeStart,
                    directRangeEnd,
                    totalRows: adjustedTotalRows,
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: operationSpecialCondition,
                    specialRowIndex,
                    specialRowIndexIncrement,
                    regionIndex,
                    fixedRangePKbool,
                    specialRangePK,
                    operationType: 'extract',
                });
                break;
                
                // Agrega este caso en el switch de createOperations
            case 'storeVariable':
                operations.push({
                    sourceWorkbook: opConfig.sourceWorkbook || sourceWorkbook2,
                    sourceSheetName: opConfig.sourceSheetName,
                    primaryKeySheet,
                    primaryKeyColumn: opConfig.primaryKeyColumn || primaryKeyColumn,
                    primaryKeyStartRow: opConfig.primaryKeyColumn || primaryKeyStartRow,
                    primaryKeyTotalRows: opConfig.primaryKeyTotalRows || totalRows,
                    searchColumn: opConfig.searchColumn || 'A',
                    extractColumn: opConfig.extractColumn || sourceExtractColumn2,
                    dataStartRow: opConfig.dataStartRow || dataStartRowBFE,
                    variableName: opConfig.variableName,
                    operationType: 'storeVariable',
                    extractColumnBase: opConfig.extractColumnBase,
                    fixedRangePKbool: opConfig.fixedRangePKbool !== undefined ? opConfig.fixedRangePKbool : false,
                    specialRangePK: opConfig.specialRangePK !== undefined ? opConfig.specialRangePK : null,
                    // Otros parámetros si es necesario
                });
                break;

            case 'fixed':
                let fixedCell = opConfig.fixedCell;
                let cellColumn = '';
                let startNumber = 0;

                const fixedCellMatch = fixedCell.match(/^([A-Z]+)\{(\d+)\}$/);
                if (fixedCellMatch) {
                    cellColumn = fixedCellMatch[1]; // 'K'
                    startNumber = parseInt(fixedCellMatch[2], 10); // Número inicial desde '{}'
                    const rowNumber = startNumber + regionIndex;
                    fixedCell = `${cellColumn}${rowNumber}`;
                }

                operations.push({
                    sourceWorkbook: opConfig.sourceWorkbook || sourceWorkbook2,
                    sourceSheetName: opConfig.sourceSheetName,
                    fixedCell: fixedCell,
                    destinationColumn: destinationColumn,
                    destinationStartRow: startRow,
                    totalRows: adjustedTotalRows,
                    isFixedValue: true,
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: operationSpecialCondition,
                    operationType: 'fixed',
                });
                break;

            case 'fixed-dornersito':
                let fixedCell_d = opConfig.fixedCell;
                let cellColumn_d = '';
                let startNumber_d = 0;

                const fixedCellMatch_d = fixedCell_d.match(/^([A-Z]+)\{(\d+)\}$/);
                if (fixedCellMatch_d) {
                    cellColumn_d = fixedCellMatch_d[1]; // 'K'
                    startNumber_d = parseInt(fixedCellMatch_d[2], 10); // Número inicial desde '{}'
                    const rowNumber_d = startNumber_d + 40 * regionIndex;
                    fixedCell_d = `${cellColumn_d}${rowNumber_d}`;
                }

                operations.push({
                    sourceWorkbook: templateWorkbook_without46,
                    sourceSheetName: "Soils 1 of 2_Land to CL",
                    fixedCell: fixedCell_d,
                    destinationColumn: destinationColumn,
                    destinationStartRow: startRow,
                    totalRows: adjustedTotalRows,
                    isFixedValue: true,
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: operationSpecialCondition,
                    operationType: 'fixed-dornersito',
                });
                break;

            case 'fixed-dornersito2':
                let fixedCell_d2 = opConfig.fixedCell;
                let cellColumn_d2 = '';
                let startNumber_d2 = 0;

                const fixedCellMatch_d2 = fixedCell_d2.match(/^([A-Z]+)\{(\d+)\}$/);
                if (fixedCellMatch_d2) {
                    cellColumn_d2 = fixedCellMatch_d2[1]; // 'K'
                    startNumber_d2 = parseInt(fixedCellMatch_d2[2], 10); // Número inicial desde '{}'
                    const rowNumber_d2 = startNumber_d2 + 40 * regionIndex;
                    fixedCell_d2 = `${cellColumn_d2}${rowNumber_d2}`;
                }

                operations.push({
                    sourceWorkbook: templateWorkbook_without46,
                    sourceSheetName: "Soils 1 of 2_Land to SL",
                    fixedCell: fixedCell_d2,
                    destinationColumn: destinationColumn,
                    destinationStartRow: startRow,
                    totalRows: adjustedTotalRows,
                    isFixedValue: true,
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: operationSpecialCondition,
                    operationType: 'fixed-dornersito2',
                });
                break;                
                
            case 'custom':
                operations.push({
                    sourceWorkbook: sourceWorkbook2,
                    sourceSheetName: opConfig.sourceSheetName,
                    cellsToExtract: opConfig.cellsToExtract,
                    destinationColumn: destinationColumn,
                    destinationStartRow: startRow,
                    totalRows: adjustedTotalRows,
                    isCustomValues: true,
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: operationSpecialCondition,
                    operationType: 'custom',
                });
                break;
            
            case 'manualValue':
                operations.push({
                    manualValue: opConfig.manualValue, // El valor entero que se debe insertar
                    destinationColumn: destinationColumn,
                    destinationStartRow: startRow,
                    totalRows: adjustedTotalRows,
                    operationType: 'manualValue', // Identifica el tipo de operación
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: operationSpecialCondition,
                });
                break;

            case 'formula':
                let formula = opConfig.formula;
                // Reemplazar placeholders en la fórmula
                if (factorEmisionB12 !== undefined) {
                    formula = formula.replace('{factorEmisionB12}', factorEmisionB12);
                }

                if (DiagramaflugoBincendiosL30 !== undefined) {
                    formula = formula.replace('{DiagramaflugoBincendiosL30}', DiagramaflugoBincendiosL30);
                }

                if (DiagramaflugoBincendiosC34 !== undefined) {
                    formula = formula.replace('{DiagramaflugoBincendiosC34}', DiagramaflugoBincendiosC34);
                }

                if (DiagramaflugoBincendiosF30 !== undefined) {
                    formula = formula.replace('{DiagramaflugoBincendiosF30}', DiagramaflugoBincendiosF30);
                }

                if (factorEmisionNo_CO2 !== undefined) {
                    formula = formula.replace('{factorEmisionNo_CO2}', factorEmisionNo_CO2);
                }

                if (factorEmisionB6 !== undefined) {
                    formula = formula.replace('{factorEmisionB6}', factorEmisionB6);
                }
                if (otrasTierrasF9 !== undefined) {
                    formula = formula.replace('{otrasTierrasF9}', otrasTierrasF9);
                }
                if (otrasTierrasG9 !== undefined) {
                    formula = formula.replace('{otrasTierrasG9}', otrasTierrasG9);
                }
                if (factorEmisionB5 !== undefined) {
                    formula = formula.replace('{factorEmisionB5}', factorEmisionB5);
                }     
                if (carbonoSueloB66 !== undefined) {
                    formula = formula.replace('{carbonoSueloB66}', carbonoSueloB66);
                }
                if (carbonoSueloC66 !== undefined) {
                    formula = formula.replace('{carbonoSueloC66}', carbonoSueloC66);
                }
                if (carbonoSueloD66 !== undefined) {
                    formula = formula.replace('{carbonoSueloD66}', carbonoSueloD66);
                }
                if (carbonoSueloB117 !== undefined) {
                    formula = formula.replace('{carbonoSueloB117}', carbonoSueloB117);
                } 
                if (carbonoSueloC117 !== undefined) {
                    formula = formula.replace('{carbonoSueloC117}', carbonoSueloC117);
                }
                if (carbonoSueloD117 !== undefined) {
                    formula = formula.replace('{carbonoSueloD117}', carbonoSueloD117);
                }

                operations.push({
                    formula: formula,
                    destinationColumn: destinationColumn,
                    destinationStartRow: startRow,
                    totalRows: adjustedTotalRows,
                    operationType: 'formula',
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: operationSpecialCondition,
                    
                });
                break;
            case 'formula-niconii':
                let formulaniconii = opConfig.formula;
                // Reemplazar placeholders en la fórmula
                if (factorEmisionB12 !== undefined) {
                    formulaniconii = formulaniconii.replace('{factorEmisionB12}', factorEmisionB12);
                }

                if (DiagramaflugoBincendiosL30 !== undefined) {
                    formulaniconii = formulaniconii.replace('{DiagramaflugoBincendiosL30}', DiagramaflugoBincendiosL30);
                }

                if (DiagramaflugoBincendiosC34 !== undefined) {
                    formulaniconii = formulaniconii.replace('{DiagramaflugoBincendiosC34}', DiagramaflugoBincendiosC34);
                }

                if (DiagramaflugoBincendiosF30 !== undefined) {
                    formulaniconii = formulaniconii.replace('{DiagramaflugoBincendiosF30}', DiagramaflugoBincendiosF30);
                }

                if (factorEmisionNo_CO2 !== undefined) {
                    formulaniconii = formulaniconii.replace('{factorEmisionNo_CO2}', factorEmisionNo_CO2);
                }

                if (factorEmisionB6 !== undefined) {
                    formulaniconii = formulaniconii.replace('{factorEmisionB6}', factorEmisionB6);
                }
                if (otrasTierrasF9 !== undefined) {
                    formulaniconii = formulaniconii.replace('{otrasTierrasF9}', otrasTierrasF9);
                }
                if (otrasTierrasG9 !== undefined) {
                    formulaniconii = formulaniconii.replace('{otrasTierrasG9}', otrasTierrasG9);
                }
                if (factorEmisionB5 !== undefined) {
                    formulaniconii = formulaniconii.replace('{factorEmisionB5}', factorEmisionB5);
                }     
                if (carbonoSueloB66 !== undefined) {
                    formulaniconii = formulaniconii.replace('{carbonoSueloB66}', carbonoSueloB66);
                }
                if (carbonoSueloC66 !== undefined) {
                    formulaniconii = formulaniconii.replace('{carbonoSueloC66}', carbonoSueloC66);
                }
                if (carbonoSueloD66 !== undefined) {
                    formulaniconii = formulaniconii.replace('{carbonoSueloD66}', carbonoSueloD66);
                }
                if (carbonoSueloB117 !== undefined) {
                    formulaniconii = formulaniconii.replace('{carbonoSueloB117}', carbonoSueloB117);
                } 
                if (carbonoSueloC117 !== undefined) {
                    formulaniconii = formulaniconii.replace('{carbonoSueloC117}', carbonoSueloC117);
                }
                if (carbonoSueloD117 !== undefined) {
                    formulaniconii = formulaniconii.replace('{carbonoSueloD117}', carbonoSueloD117);
                }

                operations.push({
                    formula: formulaniconii,
                    destinationColumn: destinationColumn,
                    destinationStartRow: startRow,
                    totalRows: adjustedTotalRows,
                    operationType: 'formula-niconii',
                    specialCondition: operationSpecialCondition,
                    totalRowsFormula: opConfig.totalRowsFormula,
                    destinationStartRowFormula: opConfig.destinationStartRowFormula,
                    rangeOffsetFormula: opConfig.rangeOffsetFormula,
                    rangeSize:opConfig.rangeSize,
                    suma: opConfig.suma||false,
                    distancia: opConfig.distancia,
                    condicionSuma:opConfig.condicionSuma||false,
                    
                });
                break;

            case "formula-dornersito":
                let formula2 = opConfig.formula;
                let diff = regionIndex;
                const arrD = arrayD_G_J_P[0];
                const arrG = arrayD_G_J_P[1];
                const arrJ = arrayD_G_J_P[2];
                const arrP = arrayD_G_J_P[3];

                formula2 = formula2.replace('{D}', arrD[diff]);                     
                formula2 = formula2.replace('{G}', arrG[diff]); 
                formula2 = formula2.replace('{J}', arrJ[diff]); 
                formula2 = formula2.replace('{P}', arrP[diff]);                    
                 
                operations.push({
                    formula: formula2,
                    destinationColumn: destinationColumn,
                    destinationStartRow: startRow,
                    totalRows: adjustedTotalRows,
                    operationType: 'formula-dornersito',
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: opConfig.specialCondition || false,
                });                             
                break;

            case 'customWorkbookBFE':
                operations.push({
                    sourceWorkbook: opConfig.sourceWorkbook || sourceWorkbook2,
                    sourceSheetName: opConfig.sourceSheetName || sheet2,
                    searchColumn: opConfig.searchColumn ||'A',
                    extractColumn: opConfig.extractColumn || sourceExtractColumn2,
                    destinationColumn: destinationColumn,
                    primaryKeySheet: opConfig.primaryKeySheet || primaryKeySheet,
                    primaryKeyColumn: opConfig.primaryKeyColumn || primaryKeyColumn,
                    primaryKeyStartRow: opConfig.primaryKeyStartRow || primaryKeyStartRow,
                    primaryKeyTotalRows: adjustedPrimaryKeyTotalRows, // Usamos adjustedTotalRows del patrón
                    destinationStartRow: startRow,
                    dataStartRow: opConfig.dataStartRow || dataStartRowBFE,
                    useDirectRange: opConfig.useDirectRange !== undefined ? opConfig.useDirectRange : useDirectRange,
                    directRangeStart: opConfig.directRangeStart || directRangeStart,
                    directRangeEnd: opConfig.directRangeEnd || directRangeEnd,
                    totalRows: adjustedTotalRows, // Siempre usamos adjustedTotalRows del patrón
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: opConfig.specialCondition !== undefined ? opConfig.specialCondition : specialCondition,
                    specialRowIndex: opConfig.specialRowIndex || specialRowIndex,
                    specialRowIndexIncrement: opConfig.specialRowIndexIncrement || specialRowIndexIncrement,
                    regionIndex,
                    fixedRangePKbool: opConfig.fixedRangePKbool !== undefined ? opConfig.fixedRangePKbool : fixedRangePKboolBFE,
                    specialRangePK: opConfig.specialRangePK !== undefined ? opConfig.specialRangePK : specialRangePKBFE,
                    operationType: 'extract',
                    operationName: 'customWorkbookBFE', // Agregado para identificar la operación
                });
                break;

            case 'formula-dornersito2':
                operations.push({
                    sourceWorkbook: opConfig.sourceWorkbook || sourceWorkbook2,
                    sourceSheetName: opConfig.sourceSheetName,
                    fixedCell: opConfig.fixedCell,
                    destinationColumn: destinationColumn,
                    destinationStartRow: startRow,
                    totalRows,
                    isFixedValue: true,
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: opConfig.specialCondition || false,
                    operationType: 'formula-dornersito2',
                });
                break;
                
            case 'formula-diagonal':
                operations.push({
                    formula: opConfig.formula,
                    destinationColumn: opConfig.destinationColumn,
                    destinationStartRow: startRow,
                    totalRows: adjustedTotalRows,
                    operationType: 'formula-diagonal',
                    isSummed: opConfig.isSummed || false,
                    condicion: opConfig.condicion || false,
                    specialCondition: opConfig.specialCondition || false,
                });
                break;

            default:
                console.warn(`Operación desconocida: ${operationName}`);
        }
    }

    return operations;
}

// Función para generar regiones según el patrón
function generateRegiones(pattern, numberOfRegions) {
    const {
        name,
        baseStartRow = 1,
        basePrimaryKeyStartRow = 1,
        startRowIncrement = 0,
        primaryKeyStartRowIncrement = 0,
        names = [],
        baseDataStartRowBDA = [],
        baseDataStartRowBFE = [],
        dataStartRowIncrementBDA = [],
        dataStartRowIncrementBFE = [],
        defaultRowGap = [],
        defaultTotalRows = [],
        sourceWorkbook1Sheets = [],
        sourceWorkbook2Sheets = [],
        sourceExtractColumns1 = [],
        sourceExtractColumns2 = [],
        useDirectRange = [],
        directRangeStart = [],
        directRangeEnd = [],
        specialRowIndex = [],
        specialRowIndexIncrement = [],
        fixedRangePKboolBDA = [],
        fixedRangePKboolBFE = [],
        specialRangePKBDA = [],
        specialRangePKBFE = [],
        destinationColumns = [],
    } = pattern;

    const regiones = [];
    let currentBaseStartRow = baseStartRow;
    let currentBasePrimaryKeyStartRow = basePrimaryKeyStartRow;

    for (let r = 0; r < numberOfRegions; r++) {
        const regionNombre = `Región ${r + 1} - ${name}`;
        const region = {
            nombre: regionNombre,
            primaryKeyStartRow: currentBasePrimaryKeyStartRow,
            startRow: currentBaseStartRow,
            regionIndex: r,
            sections: [],
        };

        for (let s = 0; s < names.length; s++) {
            const section = {
                name: names[s],
                dataStartRowBDA: fixedRangePKboolBDA[s]
                    ? baseDataStartRowBDA[s] || 0
                    : (baseDataStartRowBDA[s] || 0) + r * (dataStartRowIncrementBDA[s] || 0),
                dataStartRowBFE: fixedRangePKboolBFE[s]
                    ? baseDataStartRowBFE[s] || 0
                    : (baseDataStartRowBFE[s] || 0) + r * (dataStartRowIncrementBFE[s] || 0),
                totalRows: defaultTotalRows[s] || 0,
                sourceWorkbook1Sheet: sourceWorkbook1Sheets[s],
                sourceWorkbook2Sheet: sourceWorkbook2Sheets[s],
                sourceExtractColumn1: sourceExtractColumns1[s],
                sourceExtractColumn2: sourceExtractColumns2[s],
                useDirectRange: useDirectRange[s] || false,
                directRangeStart: directRangeStart[s] || null,
                directRangeEnd: directRangeEnd[s] || null,
                rowGap: defaultRowGap[s] || 0,
                specialRowIndex: specialRowIndex[s] || null,
                specialRowIndexIncrement: specialRowIndexIncrement[s] || 0,
                fixedRangePKboolBDA: fixedRangePKboolBDA[s] || false,
                fixedRangePKboolBFE: fixedRangePKboolBFE[s] || false,
                specialRangePKBDA: specialRangePKBDA[s],
                specialRangePKBFE: specialRangePKBFE[s],
                destinationColumns: destinationColumns[s] || destinationColumns[0],
            };
            region.sections.push(section);
        }

        regiones.push(region);

        currentBaseStartRow += startRowIncrement;
        currentBasePrimaryKeyStartRow += primaryKeyStartRowIncrement;
    }

    return regiones;
}

module.exports = {
    createOperations,
    generateRegiones,
};