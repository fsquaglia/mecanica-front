# HELP-SERVER

Proyecto con Base de datos PostgresSQL. Iniciado el día 06/03/2024

Estas son las rutas y sus respectivas caracteristicas:
## Usuarios

### Creación de Usuario

- Método: `POST`
- Ruta: `/user/create`
- Descripción: Crea un nuevo usuario.
- Parámetros:
  - `email` (string): Correo electrónico del usuario.
  - `name` (string): Nombre y apellido del usuario o razón social.
  - `typeId` (string): Tipo de identificacion (DNI, CUIT, etc).
  - `numberId` (string): Número de documento.
  - `country` (string): País del usuario.
> Nota: Tanto el password como la imagen de usuario son colocados por default en el momento de la creación (Variables de entorno en el backend)

### Inicio de Sesión de Usuario

- Método: `POST`
- Ruta: `/user/login`
- Descripción: Inicia sesión para obtener un token de acceso.
- Parámetros:
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario.

### Obtener Todos los Usuarios (necesita permiso de moderator o admin)

- Método: `GET`
- Ruta: `/user`
- Descripción: Obtiene la lista de todos los usuarios.

### Editar usuarios:(Necesita validacion)

- Método: `PUT`
 - Ruta: `/user/:id`
- Descripción: Edita cualquier usuario, cambia sus permisos y puede bloquearlo y desbloquearlo.
- Parámetros:
  - email: `string`
  - password: `string`
  - pictuer: `string`
  - name: `string`
  - typeId: `string`
  - numberId: `string`
  - country: `string`
  - role (selecciona)
  - enable (selecciona)

> Nota: Cada usuario en particular puede editar su propio perfil desde la sección "configuración".

### Sigue editando...


