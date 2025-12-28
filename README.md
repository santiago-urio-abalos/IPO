# Plataforma de Fichaje empresarial
## Trabajo IPO (Interacción Persona-Ordenador)

La plataforma de fichaje esta empaquetada en un contenedor Docker para facilitar su portabilidad, será necesario desplegar dicho contenedor para acceder a la plataforma, a continuación se indican los pasos a seguir para llevarlo a cabo:

1. Construir la imagen del proyecto: `docker build -t ipo_app .`
2. Ejecutar el contenedor docker: `docker run -p 8080:8080 ipo_app`
3. Abrir la ruta `http://localhost:8080` en el navegador (la web se abrirá en el puerto 8080)
