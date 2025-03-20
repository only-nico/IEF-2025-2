import React, { useEffect } from "react";
import { AlertCircle, X } from "lucide-react";

interface ErrorAlertProps {
  message: string;
  type: 'success' | 'error'; // Nuevo: añade el tipo de alerta
  onClose: () => void;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Desaparece después de 5 segundos
    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, [onClose]);

  const alertStyles = type === 'success'
    ? "bg-green-100 text-green-700 border-green-400"
    : "bg-red-100 text-red-700 border-red-400";

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${alertStyles} rounded-lg p-4 flex items-center shadow-lg z-50 max-w-md w-full`}>
      <AlertCircle className="mr-2 w-5 h-5" />
      <span className="flex-1">{message}</span>
      <button
        className="hover:opacity-80"
        onClick={onClose}
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ErrorAlert;
