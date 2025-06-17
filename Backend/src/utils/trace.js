// src/utils/trace.js

/**
 * Envuelve una función async y emite logs de entrada y salida.
 * @param {Function} fn   La función a instrumentar.
 * @param {string} name   Nombre que aparecerá en el log.
 */
function trace(fn, name) {
  return async function traced(...args) {
    console.log(`>> ${name}`);           // inicio
    try {
      const res = await fn.apply(this, args);
      console.log(`<< ${name}`);         // fin exitoso
      return res;
    } catch (err) {
      console.log(`!! ${name} ERROR:`, err.message);
      throw err;
    }
  };
}

module.exports = { trace };