/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
    options: {
      // Solo analiza lo que está bajo src
      includeOnly: { path: ["^src"] },
  
      // No cruces node_modules
      doNotFollow: { path: "node_modules" },
  
      // Si patterns te saturan el grafo, los excluimos
      exclude: { path: ["^src/patterns"] },
  
      // Configuración específica para el reporte 'dot'
      reporterOptions: {
        dot: {
          // Estas expresiones “colapsan” todos los archivos de cada carpeta
          collapsePattern: [
            "^src/controllers",
            "^src/middleware",
            "^src/routes",
            "^src/services",
            "^src/utils",
            "^src/patterns"
          ],
          theme: {
            graph: {
              splines: "ortho"
            }
          }
        }
      }
    }
  };