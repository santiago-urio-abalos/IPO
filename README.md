# Plataforma de Fichaje empresarial
## Trabajo IPO (Interacción Persona-Ordenador)

La plataforma de fichaje esta empaquetada en un contenedor Docker para facilitar su portabilidad, será necesario desplegar dicho contenedor para acceder a la plataforma, a continuación se indican los pasos a seguir para llevarlo a cabo:

1. Construir la imagen del proyecto: `docker build -t ipo_app .`
2. Ejecutar el contenedor docker: `docker run -p 8080:8080 ipo_app`
3. Abrir la ruta `http://localhost:8080` en el navegador (la web se abrirá en el puerto 8080)
__________________________________________________________________________________________________________________________________

La plataforma cuenta con credenciales establecidas para poder acceder a todas sus funcionalidades en función del perfil del usuario
y las tareas a realiazar. Los usuarios son:

1. Administrador => Usuario: admin@click.com // Contraseña: 1234asdf
2. Recursos Humanos => Usuario: rrhh@click.com // Contraseña: 1234asdf
3. Usuario predeterminado => Usuario: usuario@click.com // Contraseña: 1234asdf