// src/components/LoadingSpinner.js
import logoinfor from '../assets/Header/logo-infor.png';
import '../styles/index.css'

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img 
        src={logoinfor} 
        className="w-14" 
        alt="Logo Infor" 
      />
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;