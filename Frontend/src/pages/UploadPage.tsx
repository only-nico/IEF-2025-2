import React, { useState, useEffect } from 'react';
import Refresh from '../assets/Icon/refresh.svg';
import ojoIcon from "../assets/Icon/ojo.svg";
import basuraIcon from "../assets/Icon/basura.svg";
import descargaIcon from "../assets/Icon/descarga.svg";
import { fetchFilesFromServer, deleteFileFromServer, downloadFileFromServer } from '../api/uploadpage/UploadPage';

interface FileInfo {
  name: string;
  createdAt: string;
}

const UploadPage: React.FC = () => {
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<FileInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
  const [activeFilter, setActiveFilter] = useState<'todos' | 'bda' | 'bfe' | 'resultados'>('todos');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filesPerPage] = useState<number>(5); // Archivos por página

  useEffect(() => {
    fetchFiles();
  }, []);

  useEffect(() => {
    filterFiles(activeFilter);
  }, [files, activeFilter]);

  const filterFiles = (filterType: 'todos' | 'bda' | 'bfe' | 'resultados') => {
    setActiveFilter(filterType);
    setCurrentPage(1); // Resetear la página cuando el filtro cambie
    
    switch (filterType) {
      case 'bda':
        setFilteredFiles(files.filter(file => 
          file.name.toLowerCase().includes('bda')
        ));
        break;
      case 'bfe':
        setFilteredFiles(files.filter(file => 
          file.name.toLowerCase().includes('bfe')
        ));
        break;
      case 'resultados':
        setFilteredFiles(files.filter(file => 
          (file.name.match(/_/g) || []).length === 1
        ));
        break;
      default:
        setFilteredFiles(files);
        break;
    }
  };

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => {
      setAlertMessage(null);
      setAlertType(null);
    }, 5000);
  };

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const fetchedFiles = await fetchFilesFromServer();
      // Assuming the server now returns an array of FileInfo objects
      setFiles(fetchedFiles);
      if (fetchedFiles.length > 0) {
        showAlert('Archivos cargados correctamente.', 'success');
      } else {
        showAlert('No hay archivos subidos.', 'error');
      }
    } catch (error) {
      showAlert('Error al cargar los archivos.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (fileName: string) => {
    try {
      const isDeleted = await deleteFileFromServer(fileName);
      if (isDeleted) {
        setFiles(files.filter(f => f.name !== fileName));
        showAlert(`El archivo "${fileName}" ha sido eliminado.`, 'success');
      } else {
        showAlert(`No se pudo eliminar el archivo "${fileName}".`, 'error');
      }
    } catch (error) {
      showAlert(`Error al eliminar el archivo "${fileName}".`, 'error');
    }
  };

  const handleDownload = (fileName: string) => {
    try {
      downloadFileFromServer(fileName);
      showAlert(`Descargando el archivo "${fileName}".`, 'success');
    } catch (error) {
      showAlert(`Error al descargar el archivo "${fileName}".`, 'error');
    }
  };

  // Paginación: obtener los archivos para la página actual
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = filteredFiles.slice(indexOfFirstFile, indexOfLastFile);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredFiles.length / filesPerPage);

  // Funciones de navegación de la página
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="container" className="flex-1 bg-login flex-row min-h-screen w-full" style={{ paddingTop: '4%', paddingLeft: '10%', paddingRight: '10%' }}>
      {alertMessage && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg z-50 ${
          alertType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {alertMessage}
        </div>
      )}
      <div id="factor_numbers" className="space-y-1 p-8 pl-10 pr-10 max-h-screen min-w-full border-4 border-solid rounded-3xl border-[#C1E1C1] border-dashed">
        <div className="flex justify-between items-center">
          <h3 className="pl-10 pr-8 text-xl text-left font-bold">Archivos Subidos</h3>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              {(['todos', 'bda', 'bfe', 'resultados'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => filterFiles(filter)}
                  className={`px-4 py-2 rounded-xl font-semibold ${
                    activeFilter === filter
                      ? 'bg-[#C1E1C1] text-black'
                      : 'bg-navegator hover:bg-login text-black'
                  }`}
                >
                  {filter.toUpperCase()}
                </button>
              ))}
            </div>
            <button 
              onClick={fetchFiles} 
              className="bg-navegator hover:bg-login text-black font-semibold rounded-xl p-2 mr-10"
              disabled={loading}
            >
              {loading ? "Cargando..." : <img src={Refresh} alt="Refresh" className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <div className="separator-container pb-3 pl-10 pr-10">
          <div className="separator-left"></div>
          <div className="separator-right"></div>
        </div>
        <ul className="max-h-[calc(100vh-2rem)] space-y-6 p-2 pb-10 pl-6 pr-6 bg-login">
          {currentFiles.length > 0 ? (
            currentFiles.map((file, index) => (
              <li key={index} className='flex flex-col bg-cream_claro p-3 pl-5 pr-5 rounded-xl'>
                <div className='flex items-center justify-between'>
                  <p className='font-semibold'>{file.name}</p>
                  <div className='flex items-center space-x-4'>
                    <button onClick={() => console.log('Viewing', file.name)} className="bg-navegator hover:bg-login text-black font-semibold rounded-xl p-2">
                      <img src={ojoIcon} alt="View" className="w-6 h-6" />
                    </button>
                    <button onClick={() => handleDelete(file.name)} className="bg-navegator hover:bg-login text-black font-semibold rounded-xl p-2">
                      <img src={basuraIcon} alt="Delete" className="w-6 h-6" />
                    </button>
                    <button onClick={() => handleDownload(file.name)} className="bg-navegator hover:bg-login text-black font-semibold rounded-xl p-2">
                      <img src={descargaIcon} alt="Download" className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Creado: {new Date(file.createdAt).toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">
              {loading ? "Cargando archivos..." : "No hay archivos que coincidan con el filtro seleccionado"}
            </li>
          )}
        </ul>
        {/* Paginación */}
        <div className="flex justify-center items-center space-x-4 mt-4">
          <button 
            onClick={prevPage} 
            className="bg-navegator hover:bg-login text-black font-semibold rounded-xl p-2"
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span className="text-black">Página {currentPage} de {totalPages}</span>
          <button 
            onClick={nextPage} 
            className="bg-navegator hover:bg-login text-black font-semibold rounded-xl p-2"
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
