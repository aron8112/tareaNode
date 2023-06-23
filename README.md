## Tarea Node - XAcademy 2023

## Pasos realizados:

# 1) INICIALIZACIÓN DEL PROYECTO:

1. se inicializó el repositorio .git en el local,
2. creación del archivo README.md para ir detallando los pasos,
3. ejecución comnado npm init -y para comenzar el proyecto e instalar las dependencias fundamentales (express, sequelize, sqlite),
4. crear .gitignore para crear el primer commit,
5. creación de la estructura de carpetas en el proyecto: config, controllers, models, providers, routes, services, con sus archivos index.js (excepto en la carpeta config) y el archivo app.js para inicializar el proyecto,
6. instalación del paquete dotenv para ocultar las credenciales en el repositorio de GitHub a futuro, creación del archivo .env para escribir las variables (en una primera instancia solo PORT),
7. instalar nodemon como dependencia de desarrollo para empezar a desarrollar el proyecto,
8. creación de las rutas básicas requeridas: /library, /book y /user >>>>PERO a partir de la ruta /api/v1 para crear desde routes/index.js
9. creación archivo db-config.js para generar la BD.

# 2) DESARROLLO DEL PROYECTO:

10. se comenzó con el desarrollo del router para user, y para tener el conocimiento de las acciones ejecutadas por consola, se utilizó el paquete morgan para seguir el resultado de las peticiones http, ´posteriormente se siguió con el enrutado para book y library,
11. creación de los modelos para cada entidad,

# USER

12. creación de user providers, e instalación del paquete bcrypt para la encriptación de contraseña al guardar en la BD, para esto se generó la carpeta helpers adonde van a estar las funciones que, justamente, "ayudan" a la lógica del negocio como la encriptación y la tokenización (a futuro),
13. encriptación en el archivo helpers/bcrypt.js, en donde se generan 2 funciones, una para crear el hash de la contraseña y otra para chequearla cuando se haga el login,
14. se agregó al .gitignore el archivo .env y se creó el archivo .env.example para que esten especificadas las variables utilzadas,
15. Después de varios errores e intentos se modificó en la creación del usuario la encriptación de la contraseña, dejando de lado la opción del archivo hashPassword.js,
    --> para esto se hizo una desestructuración del req.body para poder separar los campos, particularmente el de password para lograr la encriptación <--
16. generación de las rutas para la creación de nuevos usuarios (/api/v1/user/) y buscar usuario (/api/v1/user/login) para un "login" que más adelante generará un token de acceso,

# LIBRARY

17. creación de las funciones en providers, services y controllers, además del enrutado para acceder a los datos. Aclaración: no está contemplado que se agreguen libros en esta etapa.

# BOOK

18. creación de las funciones en providers, services y controllers, además del enrutado para acceder a los datos. Aclaración: no hay relación entre tablas books y library

# VALIDACIÓN DE INPUTS

19. Instalación del paquete 'express-validator' e implementación como middleware para validar inputs en las rutas en donde se hagan peticiones http (POST, PUT, DELETE) que modifiquen algún dato en la BD.
20. creación del archivo 'validators.js' en donde se implementarán las funciones para hacer de middlewares en las rutas de cada entidad (User, Book, Library). En un primer término se implementó la función 'checkPostUserData' para que valide los campos al crear un usuario (hacer un registro de usuario) y luego 'validateFields' para que si error/es corte el envío de datos y devuelva la respuesta con un status de 400 y un array con el/los error/es que van en el req body.
21. A continuación se implementaron funciones similares para las otras entidades de Books y Library.

# MIDDLEWARE PARA AUTORIZACIÓN Y AUTENTICACIÓN

22. Instalación del paquete 'jsonwebtoken' e implementación con 'passport' de un middleware de autorización,
23. se generó la variable JWT_SECRET en el archivo .env para usar en la implementación, también el archivo token.js para que cree el token, en el que el payload es el id, username y role. Se reutilizó la autenticación hecha en clases, pero se modificó para adaptarla al role = 0 usado en esta API.
24. Modificación en el userProvider, para que devuelva el token solamente y, también, se implementó el middleware de autorización para admin (role=0) en las rutas distintas de GET, y autenticación para las rutas GET(/:id) para cualquier usuario(role=1). Es decir, que el visitante solo tendrá acceso a las rutas de User (para registrarse o loguearse) y a las listas para acceder a las listas, sin poder buscarla por id.
    --> además se agregó en las validaciones el uso del email, si ya está en uso tiene que usar otro.

# ASOCIACIONES ENTRE ENTIDADES

25. en el modelo de Book, se generaron las asociaciones correspondientes de Book a Library con hasMany y de Library a Book con belongsTo. También se agregó la opción "include: { all: true }" cuando busque, ya sea por id o el listado total en libros y bibliotecas, para que devuelva el conjunto de datos.
26. se agregaron en el router los middleware para validar la entrada de datos y chequear que sea admin quien genera el cambio para la ruta library/:id/addbook
