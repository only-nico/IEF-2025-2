/**
 * scripts/gen-uml.js
 * Genera diagramas de clases PlantUML para componentes React (ES Module)
 * Filtra solo importaciones relativas para evitar relaciones externas inválidas.
 * Uso:
 *   1. Instalar dependencias: npm install @babel/parser @babel/traverse
 *   2. Ejecutar: node scripts/gen-uml.js
 * Salida: archivos .puml en /docs/diagrams
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import parser from '@babel/parser';
import traverseModule from '@babel/traverse';
const traverse = traverseModule.default;

// Obtener __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directorio de componentes y salida de diagramas
const srcDir = path.join(__dirname, '../src/components');
const outputDir = path.join(__dirname, '../docs/diagrams');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

/**
 * Parsea un componente y extrae nombre, props e importaciones relativas
 */
function parseComponent(filePath) {
  const code = fs.readFileSync(filePath, 'utf-8');
  const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript', 'classProperties']
  });
  const componentName = path.basename(filePath, path.extname(filePath));
  const props = new Set();
  const imports = new Set();

  traverse(ast, {
    ImportDeclaration({ node }) {
      const src = node.source.value;
      // Solo importaciones relativas (locales)
      if (src.startsWith('.')) {
        // Extraer nombre base sin extensión
        const impName = path.basename(src).replace(/\.(js|jsx|ts|tsx)$/, '');
        imports.add(impName);
      }
    },
    FunctionDeclaration({ node }) {
      if (node.id && node.id.name === componentName) {
        const param = node.params[0];
        if (param && param.type === 'ObjectPattern') {
          param.properties.forEach(p => props.add(p.key.name));
        }
      }
    },
    VariableDeclarator({ node }) {
      if (node.id.name === componentName && node.init) {
        const init = node.init;
        if (['ArrowFunctionExpression', 'FunctionExpression'].includes(init.type)) {
          const param = init.params[0];
          if (param && param.type === 'ObjectPattern') {
            param.properties.forEach(p => props.add(p.key.name));
          }
        }
      }
    }
  });

  return { 
    componentName, 
    props: Array.from(props).sort(), 
    imports: Array.from(imports).sort() 
  };
}

/**
 * Genera el contenido PlantUML para un componente
 */
function generatePuml({ componentName, props, imports }) {
  let puml = '@startuml\n';
  puml += `class ${componentName} {\n`;
  props.forEach(prop => {
    puml += `  +${prop}\n`;
  });
  puml += '}\n';

  imports.forEach(rel => {
    // Relación unidireccional a componente local
    puml += `${componentName} --> ${rel}\n`;
  });

  puml += '@enduml\n';
  return puml;
}

/**
 * Función principal: recorre directorios y genera .puml
 */
async function main() {
  try {
    const dirs = fs.readdirSync(srcDir);
    for (const dir of dirs) {
      const dirPath = path.join(srcDir, dir);
      if (fs.lstatSync(dirPath).isDirectory()) {
        const files = fs.readdirSync(dirPath).filter(f => /\.(js|jsx|ts|tsx)$/.test(f));
        for (const file of files) {
          const filePath = path.join(dirPath, file);
          const info = parseComponent(filePath);
          const puml = generatePuml(info);
          const outFile = path.join(outputDir, `${info.componentName}.puml`);
          fs.writeFileSync(outFile, puml, 'utf-8');
          console.log(`Generado: ${outFile}`);
        }
      }
    }
  } catch (err) {
    console.error('Error al generar diagramas:', err);
  }
}

main();