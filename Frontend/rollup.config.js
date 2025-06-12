// rollup.config.js
import url           from '@rollup/plugin-url';
import resolve       from '@rollup/plugin-node-resolve';
import commonjs      from '@rollup/plugin-commonjs';
import json          from '@rollup/plugin-json';
import typescript    from '@rollup/plugin-typescript';
import postcss       from 'rollup-plugin-postcss';
import tailwindcss   from 'tailwindcss';
import autoprefixer  from 'autoprefixer';
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  // Punto de entrada de tu aplicación
  input: 'src/main.tsx',

  // Salida del bundle
  output: {
    file:      'dist/bundle.js',
    format:    'es',
    sourcemap: true,
  },

  plugins: [
    // 0) Gestiona assets (SVG, PNG, JPG, GIF)
    url({
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif'],
      limit:   0,                   // 0 = siempre copia el archivo, no inline
      fileName: '[dirname][name][extname]'
    }),

    // 1) Procesa imports de JSON (e.g. mime-db)
    json(),

    // 2) Resuelve imports de node_modules y extensiones TS/JSX
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),

    // 3) Convierte CommonJS a ESModules
    commonjs(),

    // 4) Procesa CSS con Tailwind y Autoprefixer, sin postcss.config.js externo
    postcss({
      extensions: ['.css'],
      extract:    false,   // inyecta el CSS en el JS
      config:     false,   // no busca postcss.config.js
      plugins: [
        tailwindcss(),
        autoprefixer()
      ]
    }),

    // 5) Compila TypeScript/TSX usando tu tsconfig.json
    typescript({
      tsconfig:      './tsconfig.json',
      sourceMap:     true,
      inlineSources: true
    }),

    // 6) Genera un reporte interactivo de dependencias
    visualizer({
      filename: 'reports/rollup-visualizer.html',
      title:    'Rollup Bundle Analysis',
      template: 'treemap',    // 'treemap' | 'sunburst' | 'network'
      open:     true,         // abre automáticamente el reporte
      gzipSize: true,         // muestra tamaños gzip
      brotliSize: true        // muestra tamaños brotli
    }),
  ]
};