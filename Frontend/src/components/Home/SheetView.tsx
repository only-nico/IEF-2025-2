import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { fetchExcelData } from '../../api/home/SheetView';
import Excel from '../../pages/Excel';
import useExcelSheets from './useExcelSheets'; // Importar el custom hook

const SheetView: React.FC = () => {
  const { fileName = '', sheetName = '' } = useParams(); // Accede a los parámetros de la ruta
  const [excelData, setExcelData] = useState<Record<string, any>[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Hook personalizado para manejar las hojas del archivo Excel
  const { excelSheets, isLoading, selectedSheet, handleSheetSelect, toggleMenuAndFetchSheets } = useExcelSheets(fileName || null);

  // Memoizar las hojas de Excel para evitar recálculos innecesarios
  const memoizedSheets = useMemo(() => {
    return excelSheets;
  }, [excelSheets]);

  // Función para obtener los datos de la hoja seleccionada
  const fetchData = async (sheetName: string) => {
    if (!fileName) return;
    try {
      const data = await fetchExcelData(fileName, sheetName);
      setExcelData(data);
    } catch (error) {
      console.error('Error al obtener los datos de la hoja:', error);
      setError('Hubo un problema al cargar los datos. Intenta de nuevo más tarde.');
    }
  };

  // Cargar las hojas cuando se selecciona un archivo
  useEffect(() => {
    if (fileName) {
      console.log(`Cargando hojas del archivo: ${fileName}`);
    }
  }, [fileName]);

  // Cargar los datos de la hoja cuando se selecciona una hoja
  useEffect(() => {
    if (fileName && sheetName) {
      console.log(`Cargando la hoja: ${sheetName} del archivo: ${fileName}`);
      fetchData(sheetName);
    }
  }, [fileName, sheetName]);

  // Sincronizar selectedSheet con sheetName de la URL
  useEffect(() => {
    if (sheetName && !selectedSheet) {
      handleSheetSelect(sheetName); // Seleccionamos la hoja si no hay ninguna seleccionada
    }
  }, [sheetName, selectedSheet, handleSheetSelect]);

  // Imprimir en consola las hojas cargadas y la hoja seleccionada
  useEffect(() => {
    console.log('Hojas disponibles:', memoizedSheets);
    console.log('Hoja seleccionada:', selectedSheet);
  }, [memoizedSheets, selectedSheet]);

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Archivo: {fileName}</h3>

      {/* Selector de hoja usando un <select> */}
      <div className="flex flex-col space-y-2">

        <select
          id="sheetSelect"
          className="w-full max-w-md mx-auto pl-3 pr-10 py-2 text-base border-0 focus:outline-none focus:ring-2 focus:ring-[#C1E1C1] sm:text-sm rounded-full bg-[#F0EAD6] text-[#2F4F4F] shadow-md transition-all hover:shadow-lg"
          value={selectedSheet || ''}
          onChange={(e) => handleSheetSelect(e.target.value)}
          disabled={isLoading || memoizedSheets.length <= 1}
        >
          {/* Mostrar opción predeterminaxda */}
          <option value="" disabled>
            Selecciona una hoja
          </option>

          {/* Si están cargando las hojas, mostrar mensaje en el select */}
          {isLoading ? (
            <option disabled>..</option>
          ) : (
            // Mostrar las hojas disponibles
            memoizedSheets.map((sheet, index) => (
              <option key={index} value={sheet}>
                {sheet}
              </option>
            ))
          )}
        </select>

        {isLoading && <p className="mt-2 text-sm text-gray-500">Cargando hoja...</p>}
      </div>

      {/* Mostrar datos de la hoja */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <h3 className="text-xl font-bold mb-4">Datos de la Hoja</h3>
      {excelData.length > 0 ? (
        <Excel selectedFile={fileName} sheetName={sheetName} data={excelData} />
      ) : (
        <p>{isLoading ? 'Cargando los datos de la hoja...' : 'No hay datos disponibles.'}</p>
      )}
    </div>
  );
};

export default SheetView;