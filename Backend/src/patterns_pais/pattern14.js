module.exports = {
    name: 'Pattern14',
    sheetIndex: 14,
    primaryKeySheetIndex: 14, 
    primaryKeyColumn: 'R', 
    baseStartRow: 12,
    basePrimaryKeyStartRow: 2,
    startRowIncrement: 37,// Como se llena aqui si es solo una tabla?
    primaryKeyStartRowIncrement: 37,
    names: ['A','B','C','D','E','F','G','H','I','J'], 
    baseDataStartRowBDA: [4], // donde esta la primera clave de bda
    baseDataStartRowBFE: [185,185,185,185,185], // donde esta la primera clave de bda
    dataStartRowIncrementBFE: [21,21,21,21,21,21], //salto de claves bda
    defaultRowGap: [1,2,2,2,0], //si hay que saltarse algo en la plantilla (fila vacia)
    defaultTotalRows: [0,0,2,0,0,2,0,0,2,0,0,2,0,0,2], /// catidad de filas
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
            // Iteración 1
        [
            { operationName: 'formula', destinationColumn: 'D', formula: '=D147+D192+D237+D282+D327+D372+D417+D462+D507+D552+D597+D642+D687+D732+D777+D822', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'E', formula: '=(E147*D147+E192*D192+E237*D237+E282*D282+E327*D327+E372*D372+E417*D417+E462*D462+E507*D507+E552*D552+E597*D597+E642*D642+E687*D687+E732*D732+E777*D777+E822*D822)/D12', specialCondition: true },
            { operationName: "manualValue", destinationColumn: "F", manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'M', formula: '=M147+M192+M237+M282+M327+M372+M417+M462+M507+M552+M597+M642+M687+M732+M777+M822', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'N', formula: '=N147+N192+N237+N282+N327+N372+N417+N462+N507+N552+N597+N642+N687+N732+N777+N822', specialCondition: true },
        ],
        // Iteración 2
        [
            { operationName: 'formula', destinationColumn: 'D', formula: '=D148+D193+D238+D283+D328+D373+D418+D463+D508+D553+D598+D643+D688+D733+D778+D823', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'E', formula: '=(E148*D148+E193*D193+E238*D238+E283*D283+E328*D328+E373*D373+E418*D418+E463*D463+E508*D508+E553*D553+E598*D598+E643*D643+E688*D688+E733*D733+E778*D778+E823*D823)/D13', specialCondition: true },
            { operationName: "manualValue", destinationColumn: "F", manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'M', formula: '=M148+M193+M238+M283+M328+M373+M418+M463+M508+M553+M598+M643+M688+M733+M778+M823', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'N', formula: '=N148+N193+N238+N283+N328+N373+N418+N463+N508+N553+N598+N643+N688+N733+N778+N823', specialCondition: true },
        ],
        // Iteración 3
        [
            { operationName: 'formula', destinationColumn: 'D', formula: '=D151+D196+D241+D286+D331+D376+D421+D466+D511+D556+D601+D646+D691+D736+D781+D826', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'E', formula: '=(E151*D151+E196*D196+E241*D241+E286*D286+E331*D331+E376*D376+E421*D421+E466*D466+E511*D511+E556*D556+E601*D601+E646*D646+E691*D691+E736*D736+E781*D781+E826*D826)/D16', specialCondition: true },
            { operationName: "manualValue", destinationColumn: "F", manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'M', formula: '=M151+M196+M241+M286+M331+M376+M421+M466+M511+M556+M601+M646+M691+M736+M781+M826', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'N', formula: '=N151+N196+N241+N286+N331+N376+N421+N466+N511+N556+N601+N646+N691+N736+N781+N826', specialCondition: true },
        ],
        // Iteración 4
        [
            { operationName: 'formula', destinationColumn: 'D', formula: '=D152+D197+D242+D287+D332+D377+D422+D467+D512+D557+D602+D647+D692+D737+D782+D827', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'E', formula: '=(E152*D152+E197*D197+E242*D242+E287*D287+E332*D332+E377*D377+E422*D422+E467*D467+E512*D512+E557*D557+E602*D602+E647*D647+E692*D692+E737*D737+E782*D782+E827*D827)/D17', specialCondition: true },
            { operationName: "manualValue", destinationColumn: "F", manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'M', formula: '=M152+M197+M242+M287+M332+M377+M422+M467+M512+M557+M602+M647+M692+M737+M782+M827', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'N', formula: '=N152+N197+N242+N287+N332+N377+N422+N467+N512+N557+N602+N647+N692+N737+N782+N827', specialCondition: true },
        ],
        // Iteración 5
        [
            { operationName: 'formula', destinationColumn: 'D', formula: '=D155+D200+D245+D290+D335+D380+D425+D470+D515+D560+D605+D650+D695+D740+D785+D830', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'E', formula: '=(E155*D155+E200*D200+E245*D245+E290*D290+E335*D335+E380*D380+E425*D425+E470*D470+E515*D515+E560*D560+E605*D605+E650*D650+E695*D695+E740*D740+E785*D785+E830*D830)/D20', specialCondition: true },
            { operationName: "manualValue", destinationColumn: "F", manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'M', formula: '=M155+M200+M245+M290+M335+M380+M425+M470+M515+M560+M605+M650+M695+M740+M785+M830', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'N', formula: '=N155+N200+N245+N290+N335+N380+N425+N470+N515+N560+N605+N650+N695+N740+N785+N830', specialCondition: true },
        ],
        // Iteración 6
        [
            { operationName: 'formula', destinationColumn: 'D', formula: '=D156+D201+D246+D291+D336+D381+D426+D471+D516+D561+D606+D651+D696+D741+D786+D831', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'E', formula: '=(E156*D156+E201*D201+E246*D246+E291*D291+E336*D336+E381*D381+E426*D426+E471*D471+E516*D516+E561*D561+E606*D606+E651*D651+E696*D696+E741*D741+E786*D786+E831*D831)/D21', specialCondition: true },
            { operationName: "manualValue", destinationColumn: "F", manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'M', formula: '=M156+M201+M246+M291+M336+M381+M426+M471+M516+M561+M606+M651+M696+M741+M786+M831', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'N', formula: '=N156+N201+N246+N291+N336+N381+N426+N471+N516+N561+N606+N651+N696+N741+N786+N831', specialCondition: true },
        ],
        // Iteración 7
        [
            { operationName: 'formula', destinationColumn: 'D', formula: '=D159+D204+D249+D294+D339+D384+D429+D474+D519+D564+D609+D654+D699+D744+D789+D834', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'E', formula: '=(E159*D159+E204*D204+E249*D249+E294*D294+E339*D339+E384*D384+E429*D429+E474*D474+E519*D519+E564*D564+E609*D609+E654*D654+E699*D699+E744*D744+E789*D789+E834*D834)/D24', specialCondition: true },
            { operationName: "manualValue", destinationColumn: "F", manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'M', formula: '=M159+M204+M249+M294+M339+M384+M429+M474+M519+M564+M609+M654+M699+M744+M789+M834', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'N', formula: '=N159+N204+N249+N294+N339+N384+N429+N474+N519+N564+N609+N654+N699+N744+N789+N834', specialCondition: true },
        ],
        // Iteración 8
        [
            { operationName: 'formula', destinationColumn: 'D', formula: '=D160+D205+D250+D295+D340+D385+D430+D475+D520+D565+D610+D655+D700+D745+D790+D835', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'E', formula: '=(E160*D160+E205*D205+E250*D250+E295*D295+E340*D340+E385*D385+E430*D430+E475*D475+E520*D520+E565*D565+E610*D610+E655*D655+E700*D700+E745*D745+E790*D790+E835*D835)/D25', specialCondition: true },
            { operationName: "manualValue", destinationColumn: "F", manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'M', formula: '=M160+M205+M250+M295+M340+M385+M430+M475+M520+M565+M610+M655+M700+M745+M790+M835', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'N', formula: '=N160+N205+N250+N295+N340+N385+N430+N475+N520+N565+N610+N655+N700+N745+N790+N835', specialCondition: true },
        ],
        // Iteración 9
        [
            { operationName: 'formula', destinationColumn: 'D', formula: '=D163+D208+D253+D298+D343+D388+D433+D478+D523+D568+D613+D658+D703+D748+D793+D838', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'E', formula: '=(E163*D163+E208*D208+E253*D253+E298*D298+E343*D343+E388*D388+E433*D433+E478*D478+E523*D523+E568*D568+E613*D613+E658*D658+E703*D703+E748*D748+E793*D793+E838*D838)/D28', specialCondition: true },
            { operationName: "manualValue", destinationColumn: "F", manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'M', formula: '=M163+M208+M253+M298+M343+M388+M433+M478+M523+M568+M613+M658+M703+M748+M793+M838', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'N', formula: '=N163+N208+N253+N298+N343+N388+N433+N478+N523+N568+N613+N658+N703+N748+N793+N838', specialCondition: true },
        ],
        // Iteración 10
        [
            { operationName: 'formula', destinationColumn: 'D', formula: '=D164+D209+D254+D299+D344+D389+D434+D479+D524+D569+D614+D659+D704+D749+D794+D839', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'E', formula: '=(E164*D164+E209*D209+E254*D254+E299*D299+E344*D344+E389*D389+E434*D434+E479*D479+E524*D524+E569*D569+E614*D614+E659*D659+E704*D704+E749*D749+E794*D794+E839*D839)/D29', specialCondition: true },
            { operationName: "manualValue", destinationColumn: "F", manualValue: 20 },
            { operationName: 'formula', destinationColumn: 'M', formula: '=M164+M209+M254+M299+M344+M389+M434+M479+M524+M569+M614+M659+M704+M749+M794+M839', specialCondition: true },
            { operationName: 'formula', destinationColumn: 'N', formula: '=N164+N209+N254+N299+N344+N389+N434+N479+N524+N569+N614+N659+N704+N749+N794+N839', specialCondition: true },
        ],
    ]
}