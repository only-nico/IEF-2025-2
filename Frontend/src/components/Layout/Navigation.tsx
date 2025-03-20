// src/components/Navigation.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="flex justify-between bg-navegator p-4">
      <ul className="flex  space-x-20 pl-20">
        <li>
          <Link
            to={ROUTES.HOME_PATH}
            className={`text-lg font-semibold text-bg-navegator_text ${currentPath === ROUTES.HOME_PATH ? 'active' : ''}`}
            onClick={(e) => {
              if (currentPath === ROUTES.HOME_PATH) {
                e.preventDefault();
              }
            }}
          >
            Página Principal
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.UPLOAD_PAGE_PATH}
            className={`text-lg font-semibold text-bg-navegator_text ${currentPath === ROUTES.UPLOAD_PAGE_PATH ? 'active' : ''}`}
            onClick={(e) => {
              if (currentPath === ROUTES.UPLOAD_PAGE_PATH) {
                e.preventDefault();
              }
            }}
          >
            Archivos Subidos
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.GRAPH_PATH}
            className={`text-lg font-semibold text-bg-navegator_text ${currentPath === ROUTES.GRAPH_PATH ? 'active' : ''}`}
            onClick={(e) => {
              if (currentPath === ROUTES.GRAPH_PATH) {
                e.preventDefault();
              }
            }}
          >
            Gráficos Generados
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
