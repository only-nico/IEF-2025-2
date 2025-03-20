//src / pages / Excel.tsx
import React, { useEffect, useState } from 'react';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

interface ExcelProps {
  selectedFile: string;
  sheetName: string;
  data: Record<string, any>[];
}

const Excel: React.FC<ExcelProps> = ({ data }) => {
  const [excelData, setExcelData] = useState<Record<string, any>[]>(data);

  useEffect(() => {
    if (data && data.length > 0) {
      setExcelData(data);
    }
  }, [data]);
  // Solicita planillas automaticamente
  if (!excelData || excelData.length === 0) {
    return <div>Seleccione la planilla a mostrar.</div>;
  }

  // Inicio Desactivar el retroceso de la página
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Prevent the default behavior of the back action
      event.preventDefault();
    };

    // Push a new state into the history stack to avoid backward navigation
    window.history.pushState(null, '', window.location.href);

    // Listen for the popstate event (which is triggered on back action)
    window.addEventListener('popstate', handlePopState);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
    // Fin Desactivar el retroceso de la página


  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    // Prevenir el comportamiento de retroceso al hacer scroll horizontal
    if (event.currentTarget.scrollLeft === event.currentTarget.scrollWidth - event.currentTarget.clientWidth) {
      event.preventDefault();
    }
  };


  const columns = Object.keys(excelData[0]).map((key) => ({
    key,
    name: key.charAt(0).toUpperCase() + key.slice(1),
    resizable: true,      // Hacer que las columnas sean redimensionables
    width: 120,           // Definir un ancho inicial para cada columna
    flex: 0,              // No permitir que las columnas se expandan para llenar todo el espacio
  }));

  const handleRowsChange = (updatedRows: Record<string, any>[], { indexes }: any) => {
    const updatedData = [...excelData];
    indexes.forEach((index: number) => {
      updatedData[index] = { ...updatedRows[index] };
    });
    setExcelData(updatedData);
  };
  return (
    <div style={{ width: '100%', height: '80vh', backgroundColor: '#bg-cream' }}>
      <div
        className="bg-cream rounded-lg" // Usa la clase bg-login para el fondo y border para el borde redondeado
        onScroll={handleScroll}
        style={{
          overflowX: 'auto',
          overflowY: 'auto',
          height: '100%', // Asegura que el DataGrid ocupe todo el espacio disponible
          padding: '20px', // Agrega un padding de 10px
        }}
      >
        <DataGrid //Todos los estilos estan al final de /* //src /styles/index.css */
        className="custom-data-grid"  // Nueva clase CSS
        columns={columns}
        rows={excelData}
        onRowsChange={handleRowsChange}
      />
      </div>
    </div>
  );
};

export default Excel;
