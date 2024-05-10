# titulo
como probar:
paso el .env por el email.
http://localhost:8080/api/users ulr de pruebas.


## Description
Para el desarrollo del backend de nuestra aplicación, utilizamos MongoDB Atlas como nuestra base de datos y Express.js como nuestro framework de servidor. MongoDB Atlas 

Para implementar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de usuarios, configuramos las rutas en nuestro servidor Express para manejar las solicitudes HTTP correspondientes. Por ejemplo:

Crear Usuario (POST): Configuramos una ruta POST en Express para manejar las solicitudes de creación de usuarios. Cuando se recibe una solicitud POST en esta ruta, el servidor crea un nuevo documento de usuario en la base de datos MongoDB Atlas utilizando el modelo de usuario que definimos.

Leer Usuario (GET): Configuramos una ruta GET en Express para manejar las solicitudes de lectura de usuarios. Cuando se recibe una solicitud GET en esta ruta, el servidor consulta la base de datos MongoDB Atlas y devuelve los datos del usuario solicitado al cliente.

Actualizar Usuario (PUT/PATCH): Configuramos una ruta PUT o PATCH en Express para manejar las solicitudes de actualización de usuarios. Cuando se recibe una solicitud PUT o PATCH en esta ruta, el servidor actualiza el documento de usuario correspondiente en la base de datos MongoDB Atlas con los datos proporcionados en la solicitud.

Eliminar Usuario (DELETE): Configuramos una ruta DELETE en Express para manejar las solicitudes de eliminación de usuarios. Cuando se recibe una solicitud DELETE en esta ruta, el servidor elimina el documento de usuario correspondiente de la base de datos MongoDB Atlas.

Además de configurar estas rutas, implementamos la lógica necesaria en cada controlador de ruta para interactuar correctamente con la base de datos MongoDB Atlas. Utilizamos el cliente de MongoDB Atlas para Node.js para conectarnos a nuestra base de datos y ejecutar consultas y operaciones en ella de manera eficiente y segura.



## Author

Guillermo Alexander Herrera Rodriguez

## Acknowledgments


