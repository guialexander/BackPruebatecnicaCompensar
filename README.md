# Prueba Técnica - Backend
## Construido con:
- Express: Framework de Node.js
- MongoDB Atlas: Base de datos
- Mongoose: Modelado de objetos MongoDB para Node.js
- Bcrypt: Librería utilizada para el hashing de contraseñas en Node.js. 


Se desarrolló el backend de nuestra aplicación, utilizamos MongoDB Atlas como nuestra base de datos y Express.js como nuestro framework de servidor. 
Para implementar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de usuarios, configuramos las rutas en nuestro servidor Express para manejar las solicitudes HTTP correspondientes.
Por ejemplo:


**Crear Usuario (POST):**
Configuramos una ruta POST en Express para manejar las solicitudes de creación de usuarios y Encuestas. 
Cuando se recibe una solicitud POST en esta ruta, el servidor crea un nuevo documento de usuario en la base
 de datos MongoDB Atlas utilizando el modelo de usuario y encuesta(survey) que definimos.
 
 
**Leer Usuario (GET):** 
Configuramos una ruta GET en Express para manejar las solicitudes de lectura de usuarios.
Cuando se recibe una solicitud GET en esta ruta, el servidor consulta la base de datos MongoDB Atlas y
devuelve los datos de los usuario y encuestas solicitadas por cliente.

**Actualizar Usuario (PUT/PATCH):** 
Configuramos una ruta PUT o PATCH en Express para manejar las solicitudes de actualización.
Cuando se recibe una solicitud PUT o PATCH en esta ruta, el servidor actualiza el documento de usuario 
o encuesta correspondiente en la base de datos MongoDB Atlas con los datos proporcionados en la solicitud.


**Eliminar Usuario (DELETE):** 
Configuramos una ruta DELETE en Express para manejar las solicitudes de eliminación.
Cuando se recibe una solicitud DELETE en esta ruta, 
el servidor elimina el documento de usuario o encuesta correspondiente de la base de datos MongoDB Atlas.


en la imagen se observa cómo se realizan las peticiones:
imagen1:
![image](https://github.com/guialexander/BackPruebatecnicaCompensar/assets/71296562/1a1843d7-9ae8-464b-a8f6-2369cd1c0772)




### Implementación del Login de Usuario
Para el proceso de login de usuarios, hemos configurado una ruta en nuestro servidor Express para manejar las solicitudes de autenticación de usuarios.
Esta ruta se encuentra en http://localhost:8080/auth/local/login.


# Proceso de Autenticación:


## Ruta de autenticación: 
Configuramos una ruta POST en Express para manejar las solicitudes de login de usuarios.
Esta ruta se encuentra en http://localhost:8080/auth/local/login. Cuando se recibe una solicitud POST en esta ruta, el servidor procesa la autenticación del usuario.


## Autenticación de Usuario:
Cuando se recibe una solicitud POST en la ruta de autenticación, 
el servidor verifica las credenciales proporcionadas por el usuario. 
Para este caso, se compara el **email y contraseña** proporcionados en la solicitud con los datos almacenados en la base de datos MongoDB Atlas.


## Respuestas del Servidor:
Dependiendo del resultado de la autenticación, el servidor responde con un código de estado HTTP y un mensaje correspondiente.
Si la autenticación es exitosa.


## Probar el Login:
Ruta de Autenticación:
POST: http://localhost:8080/auth/local/login Esta ruta maneja las solicitudes de login de usuarios. 
El cliente debe enviar el email y la contraseña 

{  "email": "4test@compensar.com",
   "password": "12345" }


Además de configurar estas rutas, implementamos la lógica necesaria en cada controlador de ruta 
para interactuar correctamente con la base de datos MongoDB Atlas.


### Para probar la funcionalidad de la aplicación, sigue estos pasos:

1. Descargar archivo .zip adjunto, a la máquina local. También se puede descargar el proyecto del repositorio :
 https://github.com/guialexander/BackPruebatecnicaCompensar o clonar en la pc local(si se clona pasar al paso 3.)

2. Descomprimir el archivo

3. Abrir una terminal, ingresar a la carpeta BackPruebaTecnica

4. Ejecuta npm install para instalar todas las dependencias del proyecto.
 
5. Inicia la aplicación ejecutando npm start ...
   
> backend@1.0.0 start
> node index.js

Server running ��:Alien: at http://localhost:8080/
Connected to MongoDB: ok

### Realizar las pruebas de las rutas en nuestro servidor Express para manejar las  solicitudes.

Crear usuario:
POST: http://localhost:8080/api/users
{
  "email":"5test@compensar.com",
  "name":"5test",
  "phone": "300000000",
  "password": "12345",
 }

Iniciar sesión(Login):
{
  "email":"5test@compensar.com",
  "password": "12345",
 } 

### Author
Guillermo Alexander Herrera Rodriguez
[github](https://github.com/guialexander/BackPruebatecnicaCompensar)


