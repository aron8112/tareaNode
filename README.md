## Tarea Node - XAcademy 2023

## Pasos realizados:

# INICIALIZACIÓN DEL PROYECTO:

1. se inicializó el repositorio .git en el local,
2. creación del archivo README.md para ir detallando los pasos,
3. ejecución comnado npm init -y para comenzar el proyecto e instalar las dependencias fundamentales (express, sequelize, sqlite),
4. crear .gitignore para crear el primer commit,
5. creación de la estructura de carpetas en el proyecto: config, controllers, models, providers, routes, services, con sus archivos index.js (excepto en la carpeta config) y el archivo app.js para inicializar el proyecto,
6. instalación del paquete dotenv para ocultar las credenciales en el repositorio de GitHub a futuro, creación del archivo .env para escribir las variables (en una primera instancia solo PORT),
7. instalar nodemon como dependencia de desarrollo para empezar a desarrollar el proyecto,
8. creación de las rutas básicas requeridas: /library, /book y /user >>>>PERO a partir de la ruta /api/v1 para crear desde routes/index.js
9. creación archivo db-config.js para generar la BD.

# DESARROLLO DEL PROYECTO:

10. se comenzó con el desarrollo del router para user, y para tener el conocimiento de las acciones ejecutadas por consola, se utilizó el paquete morgan para seguir el resultado de las peticiones http, ´posteriormente se siguió con el enrutado para book y library,
11. creación de los modelos para cada entidad,
    S
