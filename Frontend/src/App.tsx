// src/App.tsx
import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import routes from "./routes/routes";
import Login from './pages/Login';
import { auth } from "./services/firebase";
import AuthChecker from "./context/AuthChecker";
import LoadingSpinner from './components/LoadingSpinner';
import Layout from './layouts/Layout';
import { AlertProvider } from "./components/Alerts/AlertProvider";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);  // Guardamos la URL de la foto de perfil

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        setProfilePic(user.photoURL);  // Si el usuario está logueado, obtenemos su foto de perfil
      } else {
        setProfilePic(null);  // Si el usuario se desloguea, eliminamos la foto
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <AlertProvider>
        <Routes>
          {/* Rutas públicas sin Layout */}
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" replace />} />

          {/* Rutas protegidas dentro de Layout */}
          <Route element={user ? <Layout profilePic={profilePic} /> : <Navigate to="/login" replace />}>
            {routes.map((route, index) =>
              route.protected && (
                <Route
                  key={index}
                  path={route.path}
                  element={<AuthChecker><route.component /></AuthChecker>}
                />
              )
            )}
          </Route>

          {/* Ruta de fallback en caso de rutas no definidas */}
          <Route path="*" element={<Navigate to={user ? "/home" : "/login"} replace />} />
        </Routes>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
