# Sentencias para poner en marcha el servidor

## Conectar a servidor MySQL - 16:19

``` Console
mysql -u root -p
```

## Crear base de datos agencia y entrar en ella

``` MySQL
create database agencia;
use agencia;
```

## Crear tabla roles - 16:23

``` MySQL
create table roles
( idRol int unsigned not null auto_increment primary key,
  descripcion varchar(30) not null
)ENGINE = INNODB;
```

## Crear tabla usuarios - 16:24

``` MySQL
create table usuarios
( idUsuario int unsigned not null auto_increment primary key,
  email nvarchar(75) not null,
  password nvarchar(1000) not null,
  token nvarchar(500) not null,
  roles_idRol int unsigned not null,
  index (roles_idRol),
  foreign key (roles_idRol) references roles(idRol)
)ENGINE = INNODB;
```

## Tabla categorias - 16:35

``` MySQL
create table categorias
( idCategoria int unsigned not null auto_increment primary key,
  descripcion nvarchar(50) not null
)ENGINE = INNODB;
```

## Tabla productos - 16:36

``` MySQL
create table productos
( idProducto int unsigned not null auto_increment primary key,
  descripcion varchar(50) not null,
  precio decimal(6,2),
  existencias int,
  categorias_idCategoria int unsigned not null,
  index (categorias_idCategoria),
  foreign key (categorias_idCategoria) references categorias(idCategoria)
)ENGINE = INNODB;
```

## Insertart roles - 16:37

``` MySQL
insert into roles values
  (Default, "admin"),
  (Default, "user");
```

## Documentación sequelize - 16:52

[Documentación de Sequelize](https://sequelize.org/docs/v6/getting-started/)

## Instalación de dependencias - 16:54

``` Console
npm install sequelize
npm install --save-dev @types/sequelize
npm install mysql2
npm install bcryptjs
npm install --save-dev @types/bcryptjs
npm install express-validator
```

## .env - 17:03

``` Console
PORT=3000
DB_NAME=almacen
DB_USER=root
DB_PASSWORD=123456
```
