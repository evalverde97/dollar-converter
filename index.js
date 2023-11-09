const axios = require('axios');
const cheerio = require('cheerio');

async function obtenerTasaDeCambio() {
  try {
    const response = await axios.get('https://dolarhoy.com/cotizaciondolarblue');
    const $ = cheerio.load(response.data);
    const dolarBlue = $('div.value').last().text();
    const conversion = parseFloat(dolarBlue.replace('$', ''));
    return conversion;
  } catch (error) {
    console.error('Error al obtener la tasa de cambio:', error.message);
    throw error;
  }
}

async function convertirUSDAPesos(precioUSD) {
  const tasaDeCambio = await obtenerTasaDeCambio();
  const precioPesos = precioUSD * tasaDeCambio;
  return precioPesos.toFixed(2); // Redondea a dos decimales
}

// Ejemplo de uso
// const precioUSD = 50;
// convertirUSDAPesos(precioUSD)
//   .then((precioPesos) => console.log(`$${precioUSD} USD equivale a $${precioPesos} ARS`))
//   .catch((error) => console.error('Error:', error.message));
