// src/api/home/SheetView.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;
export interface CSVFile {
    name: string;
  }

// Función para obtener los datos de la hoja Excel
export const fetchExcelData = async (fileName: string, sheetName: string): Promise<Record<string, any>[]> => {
    try {
      const response = await axios.get(`${API_URL}/excel-data/${fileName}/${sheetName}`);
      const data = response.data as string;
  
      // Procesar los datos CSV
      const rows = data.split('\n').map(row => row.split(',')).filter(row => row.length > 1);
      if (rows.length === 0) return [];
  
      const headers = rows[0].map(header => header.trim());
      return rows.slice(1).map(row => {
        return headers.reduce((acc, header, index) => {
          acc[header] = row[index] ? row[index].trim() : '';
          return acc;
        }, {} as Record<string, any>);
      });
    } catch (error) {
      console.error('Error al obtener los datos de la hoja Excel:', error);
      throw error;
    }
  };