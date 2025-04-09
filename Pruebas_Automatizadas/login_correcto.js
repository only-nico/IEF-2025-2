//test-login.js
const { chromium } = require('playwright');  // o 'firefox' o 'webkit'

(async () => {
  const browser = await chromium.launch({ headless: false });  // `headless: false` para ver el navegador
  const page = await browser.newPage();
  
  // Navegar a la página de login
  await page.goto('http://localhost:3009/login');
  
  // Llenar el formulario de login
  await page.fill('#email', 'ief_infor@test.cl');  // Completar campo de email usando el selector #email
  await page.fill('input[type="password"]', 'ief_infor123'); // Completar el campo de la contraseña usando el tipo 'password'
  
  // Hacer clic en el botón de login (ajusta el selector si es necesario)
  await page.click('button[type="submit"]');  // Asegúrate de que el selector corresponda al botón de login
  
  // Esperar a que la página se redirija o que el login sea exitoso
  await page.waitForNavigation();  // Esto espera una redirección (si es que ocurre)
  
  // Verificar si la redirección fue exitosa o si aparece un mensaje
  const currentURL = page.url();
  console.log('URL actual después del login:', currentURL);

  // Opcional: Verificar si un elemento de la página indica que el login fue exitoso
  // await page.waitForSelector('.dashboard'); // Ejemplo: Espera que aparezca el dashboard después del login
  
  // Cerrar el navegador
  await browser.close();
})();
