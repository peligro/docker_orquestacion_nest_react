# Usar una imagen base de nginx
FROM nginx:alpine

# Copiar los archivos de construcción al directorio de nginx
COPY build /usr/share/nginx/html

# Configurar nginx para manejar rutas de React
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 3000
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]