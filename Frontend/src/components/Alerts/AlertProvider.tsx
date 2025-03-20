//src/components/Alerts/AlertProvider.tsx
import React, { createContext, useContext, useState } from "react";
import ErrorAlert from "../Alerts/ErrorAlert";

interface AlertContextProps {
  showError: (message: string) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const showError = (message: string) => {
    setErrorMessage(message);
  };

  return (
    <AlertContext.Provider value={{ showError }}>
      {children}
      {errorMessage && <ErrorAlert message={errorMessage} type="error" onClose={() => setErrorMessage("")} />}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert must be used within an AlertProvider");
  return context;
};
