# project_taller
proyecto de Taller de Ingeniería software IEF, Version Typescript

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
## Seccion manual de usuario (Frontend)
## Introduccion 
## Breve resumen
Las tecnologias utilizadas son (React , typescript, Vite, Firebase, Tailwind)


1) Clonar 
2) configurar .env
3) npm install
4) npm run dev

## Estructura de Carpetas Frontend/src

1) api/: Métodos y configuraciones para interactuar con servicios externos o API. 
  Se encuentran todas las rutas para comunicar al backend o APIs
  Al agregar mas rutas deben mantener el orden dentro de esta carpeta por componente
  Ej: Si la nueva ruta interactua con /pages/Graph.tsx
  en /api/ se crea un directorio /api/graph  
  Donde mantiene todas las rutas asociadas a esa pagina y se puede subdividir de igual manera por componente
2) assets/: Archivos estáticos, como imágenes o íconos.
3) components/: Componentes reutilizables para la interfaz de usuario.
    Se encuetran los componentes de las paginas con las que interactuan 
    Ej: Existe la /pages/Login.tsx
      por tanto se encuentra /src/components/Login donde
      permanecen de forma ramificada las funcionalidades de Login
4) constants/: Variables y constantes globales del proyecto.
5) context/: Configuración de los contextos de React.
6) layouts/: Plantillas de diseño que envuelven las páginas.

7) pages/: Páginas principales del proyecto.
  
8) routes/: Definición de rutas de la aplicación.
    Definir rutas :

9) services/:  integración con Firebase.
    Se implementa firebase para funcionalidad Login (  getAuth, GoogleAuthProvider,)

10) styles/: Archivos de estilos globales o configuraciones adicionales de Tailwind CSS.
    En index.css esta documentado los bloques de codigo (Estilo para login, spinner loading, hover, paleta de color...)

11) main.tsx: Punto de entrada principal del proyecto.



## Seccion de manual modo componentes

1) Login 
2) rutas
3) paginas
4) Visualizar
5) 
