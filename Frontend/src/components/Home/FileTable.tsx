import React, { useState, useEffect, useCallback } from 'react';
import { Trash2, Download } from 'lucide-react';
import { fetchFilesFromServer, deleteFileFromServer, downloadFileFromServer } from '../../api/uploadpage/UploadPage';

interface FileItem {
  name: string;
  createdAt: string;
}

interface FileRowProps {
  file: FileItem;
  onShowAlert: (message: string, type: 'success' | 'error') => void;
  onFileDeleted: () => void;
}

interface AlertProps {
  message: string;
  type: 'success' | 'error';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => (
  <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg z-50 ${
    type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  }`}>
    {message}
  </div>
);

const FileRow: React.FC<FileRowProps> = ({ file, onShowAlert, onFileDeleted }) => {
  const fileName = file.name;
  const fileType = file.name.toLowerCase().includes('bda') ? 'BDA' : file.name.toLowerCase().includes('bfe') ? 'BFE' : null;

  if (!fileType) {
    return null;
  }

  const handleDelete = async () => {
    try {
      const isDeleted = await deleteFileFromServer(fileName);
      if (isDeleted) {
        onShowAlert(`El archivo "${fileName}" ha sido eliminado.`, 'success');
        onFileDeleted();
      } else {
        onShowAlert(`No se pudo eliminar el archivo "${fileName}".`, 'error');
      }
    } catch (error) {
      onShowAlert(`Error al eliminar el archivo "${fileName}".`, 'error');
    }
  };

  const handleDownload = () => {
    try {
      downloadFileFromServer(fileName);
      onShowAlert(`Descargando el archivo "${fileName}".`, 'success');
    } catch (error) {
      onShowAlert(`Error al descargar el archivo "${fileName}".`, 'error');
    }
  };

  const formattedDate = new Date(file.createdAt).toLocaleDateString('es-ES', {
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
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const fetchFiles = useCallback(async () => {
    try {
      const fetchedFiles = await fetchFilesFromServer();
      
      // Comparar si hay nuevos archivos
      const currentFileNames = new Set(files.map(f => f.name));
      const newFiles = fetchedFiles.filter(f => !currentFileNames.has(f.name));
      
      if (newFiles.length > 0) {
        setFiles(fetchedFiles);
        setLastUpdate(new Date());
      } else {
        // Si no hay archivos nuevos, actualizar silenciosamente
        setFiles(fetchedFiles);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  }, [files]);

  // Efecto inicial para cargar archivos
  useEffect(() => {
    const initialFetch = async () => {
      setLoading(true);
      try {
        await fetchFiles();
      } finally {
        setLoading(false);
      }
    };
    initialFetch();
  }, []);

  // Efecto para actualización periódica
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchFiles();
    }, 5000); // Actualizar cada 5 segundos

    return () => clearInterval(intervalId);
  }, [fetchFiles]);

  const sortedFileHistory = React.useMemo(() => {
    const filteredFiles = files.filter(file =>
      file.name.toLowerCase().includes('bda') || file.name.toLowerCase().includes('bfe')
    );

    return [...filteredFiles]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3);
  }, [files]);

  return (
    <div className="mt-8 bg-[#F0EAD6] shadow overflow-hidden sm:rounded-lg">
      {alert && <Alert message={alert.message} type={alert.type} />}
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-[#2F4F4F] mb-4">
          Últimos Archivos Subidos
        </h3>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="text-center py-6 text-[#2F4F4F]">
              <p className="text-sm font-medium">Cargando archivos...</p>
            </div>
          ) : sortedFileHistory.length > 0 ? (
            <table className="min-w-full divide-y divide-[#2F4F4F]">
              <thead className="bg-[#F0EAD6]">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider">
                    Tipo
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider">
                    Fecha
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#2F4F4F] uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#F0EAD6] divide-y divide-[#2F4F4F]">
                {sortedFileHistory.map((file) => (
                  <FileRow
                    key={file.name}
                    file={file}
                    onShowAlert={showAlert}
                    onFileDeleted={fetchFiles}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-6 text-[#2F4F4F]">
              <p className="text-sm font-medium">No hay archivos subidos todavía.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileTable;