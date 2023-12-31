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
12. creación de user providers, e instalación del paquete bcrypt para la encriptación de contraseña al guardar en la BD, para esto se generó la carpeta helpers adonde van a estar las funciones que, justamente, "ayudan" a la lógica del negocio como la encriptación y la tokenización (a futuro),
13. encriptación en el archivo helpers/bcrypt.js, en donde se generan 2 funciones, una para crear el hash de la contraseña y otra para chequearla cuando se haga el login,
14. se agregó al .gitignore el archivo .env y se creó el archivo .env.example para que esten especificadas las variables utilzadas,
15. se instaló sequelize-cli mediante el comando 'npm install sequelize-cli --global' para poder generar registros previos (seeds) mediante la opción de las migraciones de datos, a continuación se ejecutó el comando 'sequelize init' por consola lo que generó las carpetas config, migrations y seeders, dentro de la carpeta config se cambió el dialect a 'sqlite' que por defecto viene en 'mysql',
    --> esta idea surgió a la hora de generar el usuario Admin, en donde se deja pre-configurado, agregando un campo de rol que puede variar entre: 'Admin', 'loggedUser' y 'invitedUser', cada uno con un acceso distintoa la API, el primero va a poder ejecutar todas las acciones, el segundo va a poder ejecutar las acciones excepto aquellas señaladas y el tercero solo podrá acceder a las opciones de 'findAll' en /books y /library
