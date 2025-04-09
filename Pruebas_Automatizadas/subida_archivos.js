const { chromium } = require('playwright');  // o 'firefox' o 'webkit'

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navegar a la página de login
  await page.goto('http://localhost:3009/login');
  
  // Llenar el formulario de login
  await page.fill('#email', 'ief_infor@test.cl');
  await page.fill('input[type="password"]', 'ief_infor123');
  
  // Hacer clic en el botón de login
  await page.click('button[type="submit"]');
  
  // Esperar a que la página se redirija al home
  await page.waitForNavigation();
  
  // Navegar al home directamente si es necesario
  await page.goto('http://localhost:3009/home');
  
  // Esperar que el componente de carga esté visible (ajusta el selector según tu HTML)
  await page.waitForSelector('input[type="file"]');
  
  // Seleccionar el archivo desde tu sistema local (ajusta la ruta si es necesario)
  const filePath = '/Users/laptop6138/Downloads/2024_BDA_4UTCUTS.xlsx';  // Cambia la ruta según corresponda
  
  // Establecer el archivo en el campo de carga
  await page.setInputFiles('input[type="file"]', filePath);
  
  // Hacer clic en el botón de subir utilizando el ID del botón
  await page.click('#upload-button');  // Usando el ID del botón para hacer clic
  
  // Verificar que el archivo haya sido seleccionado correctamente (puedes verificar que el nombre del archivo aparezca en la página)
  const fileName = await page.innerText('.bg-navegator');  // Asegúrate que el selector sea el correcto
  console.log(`Archivo seleccionado: ${fileName}`);
  
 await page.waitForResponse(response => 
    response.url().includes('/upload') && response.status() === 200
  );
  
  // Capturar el mensaje de éxito
  const successMessage = await page.innerText('.alert-success');  // Asegúrate de que esta clase esté correcta
  console.log('Mensaje de éxito:', successMessage);
  
  // Verificar que el mensaje contiene la confirmación de éxito
  if (successMessage.includes('ha sido subido correctamente')) {
    console.log('El archivo fue subido con éxito.');
  } else {
    console.log('Hubo un problema al subir el archivo.');
  }

  // Verificar que el nombre del archivo subido es el correcto
  const uploadedFileName = await page.innerText('.bg-navegator');
  if (uploadedFileName.includes('2024_BDA_4UTCUTS.xlsx')) {
    console.log('El nombre del archivo subido es correcto.');
  } else {
    console.log('El nombre del archivo subido no es el esperado.');
  }

  // Cerrar el navegador
  await browser.close();
})();
