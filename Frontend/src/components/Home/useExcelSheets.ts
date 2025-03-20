//src /components / Home / useExcelSheets.ts
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchExcelSheets } from '../../api/home/FileUploadSections'; // Importar la función para obtener hojas

// Custom hook para gestionar las hojas de Excel
const useExcelSheets = (fileName: string | null) => {
  const [excelSheets, setExcelSheets] = useState<string[]>([]); // Estado para las hojas
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú
  const [isLoading, setIsLoading] = useState(false); // Estado para saber si está cargando las hojas
  const [selectedSheet, setSelectedSheet] = useState<string | null>(null); // Estado para la hoja seleccionada
  const navigate = useNavigate(); // Hook de navegación

  // Función para obtener las hojas del archivo seleccionado
  const handleFileSelect = async (fileName: string) => {
    if (!fileName) return [];
    try {
      const response = await fetchExcelSheets(fileName); // Llamada a la API para obtener las hojas
      return response; // Devuelve las hojas
    } catch (error) {
      console.error('Error al obtener las hojas:', error);
      return [];
    }
  };

  // Función que alterna la visibilidad del menú y obtiene las hojas si no se han cargado
  const toggleMenuAndFetchSheets = async (p0: boolean) => {
    if (!fileName) return;
    if (excelSheets.length === 0) {  // Si no hay hojas cargadas, obtenemos las hojas
      setIsLoading(true);
      const sheets = await handleFileSelect(fileName);
      setExcelSheets(sheets);
      setIsLoading(false);
    }
    setIsMenuOpen(prevState => !prevState);  // Alternamos el estado del menú
  };

  // Función que maneja la selección de una hoja
  const handleSheetSelect = (sheetName: string) => {
    setSelectedSheet(sheetName);
    if (fileName) {
      navigate(`/home/${fileName}/${sheetName}`);
    }
  };

  // Usamos useEffect para obtener las hojas cuando el archivo cambia
  useEffect(() => {
    if (fileName) {
      handleFileSelect(fileName).then(sheets => {
        setExcelSheets(sheets);
      });
    }
  }, [fileName]);  // Esto asegura que las hojas se obtienen cada vez que cambia el archivo

  return {
    excelSheets,
    isMenuOpen,
    isLoading,
    selectedSheet,
    toggleMenuAndFetchSheets,
    handleSheetSelect,
  };
};

export default useExcelSheets;
