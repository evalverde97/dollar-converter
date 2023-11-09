# Conversor de Moneda

Este script en Node.js convierte un precio de USD a pesos argentinos utilizando la tasa de cambio del dólar blue (tomando la cotizacion de venta) obtenida dinámicamente desde el sitio web dolarhoy.com.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/evalverde97/dollar-converter.git

Instala las dependencias:

 ```bash
npm install
```

## Uso
Ejecuta el script con el siguiente comando:

``` bash
node conversor.js
```
Sigue las instrucciones para ingresar el precio en USD.

## Dependencias
axios: Para hacer solicitudes HTTP.
cheerio: Para analizar HTML.

## Contribución
Si encuentras algún problema o tienes sugerencias para mejorar el proyecto, no dudes en abrir un problema o enviar un pull request.

## Aviso Legal
Este proyecto utiliza scraping para obtener la tasa de cambio del dólar blue desde dolarhoy.com. Asegúrate de cumplir con los términos de servicio del sitio web antes de usar este script en producción.
