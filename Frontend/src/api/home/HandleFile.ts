//src / api / home / HandleFile.ts

{/*
  Este archivo contiene las funciones que se encargan de realizar las 
  peticiones al servidor para obtener los archivos, 
    eliminar,
    descargar 
    generar los cálculos.
  
  */}
const API_URL = import.meta.env.VITE_BACKEND_URL;
//Esta funcion se encarga de obtener los archivos del servidor
export const fetchFiles = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_URL}/files`);
    if (!response.ok) {
      throw new Error('Error fetching files');
    }
    const data = await response.json();
    return data.files;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching files from the server');
  }
};
//Esta funcion se encarga de eliminar un archivo del servidor
export const deleteFile = async (fileName: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/delete/${fileName}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return true;
    }
    throw new Error('Failed to delete file');
  } catch (error) {
    console.error(error);
    return false;
  }
};
//Esta funcion se encarga de descargar un archivo del servidor
export const downloadFile = (fileName: string): void => {
  window.open(`${API_URL}/download/${fileName}`, '_blank');
};

//Esta funcion se encarga de generar los calculos
export const generateCalculations = async (
  fileBDA: string,
  fileBFE: string
): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/generate-template`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileBDA,
        fileBFE,
      }),
    });
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'resultado_operaciones.xlsx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return true;
    } else {
      const errorText = await response.text();
      console.error(errorText);
      return false;
    }
  } catch (error) {
    console.error('Error generating calculations:', error);
    return false;
  }
};
