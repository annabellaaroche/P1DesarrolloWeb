# Desarrollo Web - Proyecto 1

El objetivo de este proyecto es la realizacion de una pagina web donde se puedan realizar marcajes, y la administracion de usuarios, para ello existen dos tipos de usuario: 0 (usuario normal), 1 (usuario administrador). Unicamente el usuario administrador tendra acceso a un CRUD de usuarios.

Ambos usuarios pueden realizar marcajes, para ingresar a la pagina se debe contar con un usuario, debido a que se administran los marcajes, unicamente un administrador puede crear un usuario nuevo.

**Para BackEnd** 
1. Instalar Dependencias:
  1. composer install
  2. npm install
  3. crear base de datos laravel: ver archivo con SQl
  
 **tabla user**

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `tipo_usuario` int(11) NOT NULL,
  `activo` int(11) DEFAULT 1,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

  **tabla marcaje_detail**

CREATE TABLE `marcaje_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` varchar(100) NOT NULL,
  `hora` varchar(27) NOT NULL,
  `fk_idUsuario` int(11) NOT NULL,
  `fk_idestado` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `marcaje_detail_FK` (`fk_idestado`),
  KEY `marcaje_detail_FK_1` (`fk_idUsuario`),
  CONSTRAINT `marcaje_detail_FK` FOREIGN KEY (`fk_idestado`) REFERENCES `estado` (`id_estado`),
  CONSTRAINT `marcaje_detail_FK_1` FOREIGN KEY (`fk_idUsuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
  
  **tabla estado**

CREATE TABLE `estado` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) CHARACTER SET armscii8 NOT NULL,
  PRIMARY KEY (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

<sub>Para este debes de agregar los datos:</sub>
INSERT INTO desarrollow.estado
(descripcion)
VALUES('Entrada');
INSERT INTO desarrollow.estado
(descripcion)
VALUES('Salida');


  5. crear archivo .env
  6. generar llave : php artisan key:generate
  7. Ejecutar Migraciones: php artisan migrate
 
**Front end**
1. npm install 
2. ng serve -o
