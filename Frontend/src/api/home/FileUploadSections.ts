// src/api/FileUploadSections.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

// Función para subir el archivo
export const uploadFile = async (file: File, fileType: string) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileType', fileType);

  try {
    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Error al subir el archivo');
    }
    return await response.text(); // Respuesta de éxito
  } catch (error) {
    throw error;
  }
};

// Función para eliminar el archivo
export const deleteFile = async (fileName: string) => {
  try {
    const response = await fetch(`${API_URL}/delete/${fileName}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Error al eliminar el archivo');
    }
    return await response.text(); // Respuesta de éxito
  } catch (error) {
    throw error;
  }
};

// Función para descargar el archivo
export const downloadFile = (fileName: string) => {
  window.open(`${API_URL}/download/${fileName}`);
};

// Función para obtener la lista de archivos
export const fetchFiles = async () => {
  try {
    const response = await fetch(`${API_URL}/files`);
    if (!response.ok) {
      throw new Error('Error al obtener los archivos');
    }
    const data = await response.json();
    return data.files;
  } catch (error) {
    throw error;
  }
};

interface ExcelSheetsResponse {
  sheetNames: string[];
}

export const fetchExcelSheets = async (fileName: string): Promise<string[]> => {
  try {
    const response = await axios.get<ExcelSheetsResponse>(`${API_URL}/excel-sheets/${fileName}`);

    // Verificamos si la respuesta tiene la propiedad 'sheetNames' y la retornamos
    if (response.data && Array.isArray(response.data.sheetNames)) {
      return response.data.sheetNames;  // Devuelve el array de nombres de hojas.
    } else {
      // Si la respuesta no tiene la propiedad 'sheetNames' o no es un array, lanzamos un error
      throw new Error('La respuesta no contiene un array de hojas');
    }
  } catch (error) {
    console.error('Error al obtener las hojas del archivo Excel:', error);
    throw error;  // Lanzamos el error para manejarlo en el frontend
  }
};
