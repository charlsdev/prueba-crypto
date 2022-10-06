# La imagen y la versión
FROM node:18

# Crear la carpeta APP || -p crear todo el directorio por si no existe
RUN mkdir -p /usr/src/backend

# Hacer referencia al directorio creado donde se instalará todo
WORKDIR /usr/src/backend

# Copiar el archivo (source), al directorio (dest)
COPY package*.json ./

# Ejecutar un comando
RUN npm install

# Copiar todos los archivos del proyecto al directorio anterior
COPY . .

# Ejecutarlo en un puerto
EXPOSE 3000

# Ejecutar comando con parametros ["ejecutable", "comando"]
CMD [ "npm", "start" ]