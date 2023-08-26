DESAFÍO EQUIPZILLA “INSTITUTO DE ARTE DE CHICAGO”


Este proyecto utiliza la tecnología Node Js, y como framework Express, esta conectado a la base de datos relacional PostgreSql y utiliza como ORM Prisma.
Desde el back se consume las diferentes apis otorgadas por el "Instituto de Arte de Chicago http://api.artic.edu/docs/#introduction", confeccionandose
los direfentes endpoint que luego van a ser consumidos por el frontend.

Instalación y Ejecución, “Guía de Pasos”: 
1.	Crear una carpeta en tu ordenador (aquí es donde descargaras el proyecto).
2.	Abrir la carpeta creada, paso anterior, con un editor de código (Visual Studio Code).
3.	Abrir la terminal del editor.
4.	Insertar el comando "git clone https://github.com/Fernandoojeda7/Arte-de-Chicago-back.git"
5.	En la raiz del proyecto debes crear un archivo con la extensión .env en el cual cargaras tu variable de entorno (ejemplo: DATABASE_URL='postgres://postgres:root@localhost:5432/apparts').
6.	Luego crearas dos variables más para para tu usuario secreto y tu encriptación (ejemplos: JWT_SECRET_USUARIO=secret
CRYPTO_SECRET=AVIONAUTOTREN).
7.	Insertar el la terminal de tu editor el comando "npm install" (instalaras todas las dependencias para que el proyecto funcione correctamente)
8.	Insertar el comando "npm run dev" (se ejecutará el proyecto activando el servidor).


•	Sitio Web mediante la plataforma de nube Vercel
https://arte-de-chicago-front.vercel.app/
