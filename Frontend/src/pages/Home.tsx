// Home.tsx
import React, { useState, useEffect } from 'react';
import FileUploadSection from '../components/Home/FileUploadSection';
import FileTable from '../components/Home/FileTable';
import { fetchFiles } from '../api/home/HandleFile';
import ErrorAlert from '../components/Alerts/ErrorAlert';

interface File {
  id: string;
  name: string;
  type: string;
  date: string;
}

const Home: React.FC = () => {
  const [fileHistory, setFileHistory] = useState<File[]>([]);
  const [selectedBDA, setSelectedBDA] = useState<string | null>(null);
  const [selectedBFE, setSelectedBFE] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);

  const fetchFilesFromServer = async () => {
    try {
      const files = await fetchFiles();
      if (Array.isArray(files)) {
         const formattedFiles = files.map((fileName: string, index: number) => ({
             id: index.toString(),
             name: fileName,
             type: fileName.toLowerCase().includes('bda') ? 'BDA' : 'BFE',
             date: new Date().toISOString().split('T')[0]
           }));
        setFileHistory(formattedFiles);
      } else {
        console.error('Fetched files is not an array:', files);
        setFileHistory([]);
      }
    } catch (error) {
      console.error('Error fetching files:', error);
      setFileHistory([]);
    }
  };

  useEffect(() => {
    fetchFilesFromServer();
  }, []);

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => {
      setAlertMessage(null);
      setAlertType(null);
    }, 5000);
  };

  const handleGenerateCalculations = async () => {
    if (!selectedBDA || !selectedBFE || !selectedYear) {
      showAlert('Por favor selecciona ambos archivos BDA, BFE y un año antes de generar cálculos.', 'error');
      return;
    }

    setIsGenerating(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/generate-template`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileBDA: selectedBDA,
          fileBFE: selectedBFE,
          fileYear: selectedYear,
        }),
      });
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `2024_${selectedYear}-4UTCUTS.xlsx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        fetchFilesFromServer();
        showAlert('Cálculos generados correctamente.', 'success');
      } else {
        const errorText = await response.text();
        showAlert(`Error al generar los cálculos: ${errorText}`, 'error');
      }
    } catch (error) {
      console.error('Error en la conexión con el servidor:', error);
      showAlert('Error en la conexión con el servidor.', 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  const yearOptions = Array.from({ length: 2022 - 1990 + 1 }, (_, i) => 1990 + i);

  return (
    <div className="min-h-screen bg-login">
      {alertMessage && alertType && (
        <ErrorAlert
          message={alertMessage}
          type={alertType}
          onClose={() => {
            setAlertMessage(null);
            setAlertType(null);
          }}
        />
      )}

      <main className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex space-x-6">
            <div className="flex-1">
              <FileUploadSection
                title="Archivo BDA"
                fileType="BDA"
                fetchFilesFromServer={fetchFilesFromServer}
                onFileSelect={(file) => setSelectedBDA(file)}
              />
            </div>
            <div className="flex-1">
              <FileUploadSection
                title="Archivo BFE"
                fileType="BFE"
                fetchFilesFromServer={fetchFilesFromServer}
                onFileSelect={(file) => setSelectedBFE(file)}
              />
            </div>
          </div>

          <div className="bg-[#C1E1C1] shadow-md rounded-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-full md:w-auto">
                <label className="block text-[#2F4F4F] font-semibold mb-2">Selecciona un año:</label>
                <select
                  value={selectedYear || ''}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full md:w-auto bg-[#F0EAD6] text-[#2F4F4F] rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3D6F6F] focus:ring-offset-2"
                >
                  <option value="" disabled>Seleccione un año</option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleGenerateCalculations}
                disabled={isGenerating}
                className="w-full md:w-auto bg-[#2F4F4F] text-[#F0EAD6] px-8 py-3 font-semibold rounded-md shadow-sm hover:bg-[#3D6F6F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F4F4F] disabled:opacity-50"
              >
                {isGenerating ? 'Generando...' : 'Generar Cálculos'}
              </button>
            </div>
          </div>

          <div className="mt-8">
            <FileTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;