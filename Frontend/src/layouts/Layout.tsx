// src/layouts/Layout.tsx
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navigation from '../components/Layout/Navigation';
import Header from '../components/Layout/Header';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

// Asegúrate de definir correctamente los props
interface LayoutProps {
  profilePic: string | null;  // Esperamos la foto de perfil del usuario como prop
}

const Layout: React.FC<LayoutProps> = ({ profilePic }) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header handleLogout={handleLogout} isLoggingOut={isLoggingOut} profilePic={profilePic} />

      {/* Navigation */}
      <Navigation />

      {/* Contenido principal */}
      <main className="flex-grow p-6 bg-login"
        style={{paddingLeft: '15%', paddingRight: '15%' }}
        >
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navegator font-bold text-navegator-text text-center p-4">
        © 2024 Instituto Forestal
      </footer>
    </div>
  );
};

export default Layout;
