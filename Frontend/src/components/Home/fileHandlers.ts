//src /components / Home / fileHandlers.ts
import { uploadFile ,deleteFile, downloadFile} from '../../api/home/FileUploadSections'; // O la ruta correspondiente
import { DragEvent, ChangeEvent } from 'react';


export const handleFileDrop = (
    event: DragEvent<HTMLDivElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    setIsError: React.Dispatch<React.SetStateAction<boolean>>,
    onFileSelect: (fileName: string | null) => void
  ) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (
      droppedFile &&
      droppedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      setFile(droppedFile);
      setMessage('');
      setIsError(false);
      onFileSelect(droppedFile.name);
    } else {
      setMessage('Solo se permiten archivos Excel (.xlsx)');
      setIsError(true);
    }
  };
  
export const handleFileInput = (
    event: ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    setIsError: React.Dispatch<React.SetStateAction<boolean>>,
    onFileSelect: (fileName: string | null) => void
  ) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      setMessage('');
      setIsError(false);
      onFileSelect(selectedFile.name);
    }
  };

export const handleFileUpload = async (
  file: File | null,
  fileType: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setUploaded: React.Dispatch<React.SetStateAction<boolean>>,
  fetchFilesFromServer: () => void,
  onFileSelect: (fileName: string | null) => void
) => {
  if (!file) {
    setMessage('Por favor selecciona un archivo');
    setIsError(true);
    return;
  }

  try {
    const result = await uploadFile(file, fileType);
    setMessage(result);
    setIsError(false);
    setUploaded(true);
    fetchFilesFromServer();
    onFileSelect(file.name);
  } catch (error) {
    setMessage((error as Error).message || 'Error al subir el archivo');
    setIsError(true);
  }
};


export const handleFileDelete = async (
  file: File | null,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setFile: React.Dispatch<React.SetStateAction<File | null>>,
  setUploaded: React.Dispatch<React.SetStateAction<boolean>>,
  fetchFilesFromServer: () => void,
  onFileSelect: (fileName: string | null) => void
) => {
  if (!file || !file.name) {
    setMessage('No hay archivo para eliminar');
    setIsError(true);
    return;
  }

  try {
    const result = await deleteFile(file.name);
    setMessage(result);
    setIsError(false);
    setFile(null);
    setUploaded(false);
    fetchFilesFromServer();
    onFileSelect(null);
  } catch (error) {
    setMessage((error as Error).message || 'Error al eliminar el archivo');
    setIsError(true);
  }
};

export const handleFileDownload = (
  file: File | null,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (file && file.name) {
    downloadFile(file.name);
  } else {
    setMessage('No hay archivo para descargar');
    setIsError(true);
  }
};
