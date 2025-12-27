# Se aisla la plataforma web en un contenedor de Docker usando Nginx

# Usar Nginx oficial
FROM nginx:alpine

# Eliminar la configuración por defecto
RUN rm /etc/nginx/conf.d/default.conf

# Copiar nuestra configuración personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar todo el proyecto al directorio público de Nginx
COPY . /usr/share/nginx/html

# Exponemos el puerto 8080
EXPOSE 8080