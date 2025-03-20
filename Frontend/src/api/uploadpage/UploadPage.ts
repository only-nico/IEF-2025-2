// src/api/uploadpage/UploadPage.ts

// Definición de tipos
export interface FileInfo {
    name: string;
    createdAt: string;
  }
  
  // Definición de la constante API_URL
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  
  export const fetchFilesFromServer = async (): Promise<FileInfo[]> => {
      try {
          const response = await fetch(`${API_URL}/files`);
          if (!response.ok) {
              throw new Error('Error fetching files');
          }
          const data = await response.json();
          
          // Asumiendo que el backend devuelve un array de objetos con name y createdAt
          // Si el backend solo devuelve nombres, transformamos los datos aquí
          if (Array.isArray(data.files)) {
              if (typeof data.files[0] === 'string') {
                  // Si el backend solo devuelve strings, creamos objetos FileInfo
                  return data.files.map((fileName: string) => ({
                      name: fileName,
                      createdAt: new Date().toISOString() // Idealmente esto vendría del backend
                  }));
              } else {
                  // Si el backend ya devuelve objetos FileInfo
                  return data.files;
              }
          }
          return [];
      } catch (error) {
          console.error('Error fetching files:', error);
          return [];
      }
  };
  
  export const deleteFileFromServer = async (fileName: string): Promise<boolean> => {
      try {
          const response = await fetch(`${API_URL}/delete/${encodeURIComponent(fileName)}`, {
              method: 'DELETE',
          });
          return response.ok;
      } catch (error) {
          console.error('Error deleting file:', error);
          return false;
      }
  };
  
  export const downloadFileFromServer = (fileName: string): void => {
      window.open(`${API_URL}/download/${encodeURIComponent(fileName)}`, '_blank');
  };