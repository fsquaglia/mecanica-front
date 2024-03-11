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

### BREVE RESUMEN, SEGUIRÉ AMPLIANDO...

Posteriormente se verá la posibilidad de que en la web se muestren los productos
que se vendern el el taller, como aceites, correas, etc... se agruparán en categorías
Por lo que existe un `Modelo Category, y otro Modelo Product`
También podrán llevar un Modelo de sus proveedores, es decir los mayoristas a donde
ellos compran los productos que utilizan y venden en el taller
Por lo que existe un `Modelo Provider y otro modelo Province` el proveedor tiene sus datos
como ser su nro de TE, localidad, y la provincia.

### Ruta /reinit

Lo que hace esta ruta, es cargar las provincias en la tabla correspondiente, agregar
algunas categorías, algunos productos, y Proveedores. Cuando necesitemos hacer un
`force:true` luego desde, por ejemplo, Insomnia, podremos darle a esta ruta para que
realice estas cargas para tener de ejemplo.

### Post y CategoryPost

Son los modelos y rutas para el blog, las estoy editando...

### Sigue editando...
