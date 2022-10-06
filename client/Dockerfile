# La imagen y la versión
FROM node:18 as build

# Crear la carpeta APP || -p crear todo el directorio por si no existe
RUN mkdir -p /usr/src/client

# Hacer referencia al directorio creado donde se instalará todo
WORKDIR /usr/src/client

# Copiar el archivo (source), al directorio (dest)
COPY package*.json ./

# Ejecutar un comando
RUN npm install

# Copiar todos los archivos del proyecto al directorio anterior
COPY . .

# Empaquetar la aplicación de ReactJS
RUN npm run build

# Ejecutarlo en un puerto
EXPOSE 5173

# Ejecutar comando con parametros ["ejecutable", "comando"]
CMD [ "npm", "start" ]