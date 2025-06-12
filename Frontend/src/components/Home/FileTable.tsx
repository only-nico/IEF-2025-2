// src /components/home/FileTable.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Trash2, Download } from 'lucide-react';
import {
  fetchFilesFromServer,
  deleteFileFromServer,
  downloadFileFromServer,
  type FileInfo
} from '../../api/uploadpage/UploadPage';

// Este tipo describe la forma que FileTable manejará internamente
interface FileItem {
  name: string;
  date: string; // fecha formateada o raw de FileInfo.createdAt
}

interface AlertProps {
  message: string;
  type: 'success' | 'error';
}

interface FileRowProps {
  file: FileItem;
  onShowAlert: (message: string, type: 'success' | 'error') => void;
  onFileDeleted: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type }) => (
  <div
    className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg z-50 ${
      type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    }`}
  >
    {message}
  </div>
);

const FileRow: React.FC<FileRowProps> = ({ file, onShowAlert, onFileDeleted }) => {
  const { name: fileName, date } = file;
  const fileType = fileName.toLowerCase().includes('bda')
    ? 'BDA'
    : fileName.toLowerCase().includes('bfe')
    ? 'BFE'
    : null;

  if (!fileType) return null;

  const handleDelete = async () => {
    try {
      const isDeleted = await deleteFileFromServer(fileName);
      if (isDeleted) {
        onShowAlert(`El archivo "${fileName}" ha sido eliminado.`, 'success');
        onFileDeleted();
      } else {
        onShowAlert(`No se pudo eliminar el archivo "${fileName}".`, 'error');
      }
    } catch {
      onShowAlert(`Error al eliminar el archivo "${fileName}".`, 'error');
    }
  };

  const handleDownload = () => {
    try {
      downloadFileFromServer(fileName);
      onShowAlert(`Descargando el archivo "${fileName}".`, 'success');
    } catch {
      onShowAlert(`Error al descargar el archivo "${fileName}".`, 'error');
    }
  };

  // Formatear la fecha proveniente de FileInfo.createdAt
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#2F4F4F]">
        {fileName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#2F4F4F]">
        {fileType}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#2F4F4F]">
        {formattedDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={handleDownload}
          className="text-[#2F4F4F] hover:text-[#3D6F6F] mr-2"
          aria-label={`Descargar ${fileName}`}
        >
          <Download className="h-5 w-5" />
        </button>
        <button
          onClick={handleDelete}
          className="text-[#2F4F4F] hover:text-[#3D6F6F]"
          aria-label={`Eliminar ${fileName}`}
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
};

const FileTable: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [alert, setAlert] = useState<AlertProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 5000);
  };

  // Convertir FileInfo[] a FileItem[] incluyendo 'date'
  const fetchFiles = useCallback(async () => {
    try {
      const fetched: FileInfo[] = await fetchFilesFromServer();
      const mapped: FileItem[] = fetched.map(f => ({
        name: f.name,
        date: f.createdAt || new Date().toISOString()
      }));
      setFiles(mapped);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchFiles().finally(() => setLoading(false));
  }, [fetchFiles]);

  useEffect(() => {
    const intervalId = setInterval(fetchFiles, 5000);
    return () => clearInterval(intervalId);
  }, [fetchFiles]);

  return (
    <div className="mt-8 bg-[#F0EAD6] shadow overflow-hidden sm:rounded-lg">
      {alert && <Alert message={alert.message} type={alert.type} />}
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-[#2F4F4F] mb-4">
          Últimos Archivos Subidos (Última actualización: {lastUpdate.toLocaleTimeString()})
        </h3>
        {loading ? (
          <div className="text-center py-6 text-[#2F4F4F]">
            <p className="text-sm font-medium">Cargando archivos...</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-[#2F4F4F]">
            <thead className="bg-[#F0EAD6]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#F0EAD6] divide-y divide-[#2F4F4F]">
              {files.map(file => (
                <FileRow
                  key={file.name}
                  file={file}
                  onShowAlert={showAlert}
                  onFileDeleted={fetchFiles}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default FileTable;
