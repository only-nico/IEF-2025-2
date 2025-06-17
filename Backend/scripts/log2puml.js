// scripts/log2puml.js

const fs = require('fs');
const path = require('path');

const logPath    = path.join(__dirname, '../trace.log');
const outputDir  = path.join(__dirname, '../diagrams');
const pumlPath   = path.join(outputDir, 'sequence.puml');

if (!fs.existsSync(logPath)) {
  console.error(' No se encontró trace.log. Ejecuta tu app con trazas primero.');
  process.exit(1);
}

// Filtrar solo trazas de entrada (>>) salida (<<) y errores (!!)
const rawLines = fs.readFileSync(logPath, 'utf8').split('\n');
const lines = rawLines.filter(l => /^(>>|<<|!!)\s+\w+/.test(l));

// Recoger todos los nombres de función únicos
const fnames = new Set();
lines.forEach(l => {
  const m = l.match(/^(?:>>|<<|!!)\s+(\w+)/);
  if (m) fnames.add(m[1]);
});

// Asegurar carpeta de salida
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// PlantUML header
const puml = [
  '@startuml',
  'autonumber',
  'actor Client as Client',
  '',
  // Declara participantes
  ...[...fnames].map(fn => `participant ${fn} as ${fn}`),
  ''
];

const stack = [];  // para seguimiento de llamadas

lines.forEach(line => {
  let m;

  // Error
  if (m = line.match(/^!!\s+(\w+)\s+ERROR:\s+(.*)$/)) {
    const [_, fn, msg] = m;
    puml.push(`alt Error en ${fn}`, `  note right of ${fn}: ${msg}`, 'end');
    return;
  }

  // Llamada entrante
  if (m = line.match(/^>>\s+(\w+)/)) {
    const fn = m[1];
    const caller = stack.length ? stack[stack.length - 1] : 'Client';
    puml.push(
      `${caller} -> ${fn}: ${fn}()`,
      `activate ${fn}`
    );
    stack.push(fn);
    return;
  }

  // Retorno
  if (m = line.match(/^<<\s+(\w+)/)) {
    const fn = m[1];
    // Desapila (idealmente coincide con fn)
    const popped = stack.pop();
    const caller = stack.length ? stack[stack.length - 1] : 'Client';
    puml.push(
      `${fn} --> ${caller}: return`,
      `deactivate ${fn}`
    );
    return;
  }
});

// PlantUML footer
puml.push('@enduml');

// Escribe el archivo .puml
fs.writeFileSync(pumlPath, puml.join('\n'), 'utf8');
console.log(`PlantUML generado en ${pumlPath}`);