create database PRODUCTOS;
use PRODUCTOS;

create table almacen (

    id_almacen VARCHAR(10),
    capacidad INTEGER(5),
    num_trabajadores INTEGER(5),

    constraint PK_ALMACEN primary key (id_almacen)

);

create table productos(

    id_producto VARCHAR(10),
    nombre VARCHAR(20),
    material VARCHAR(10),
    id_almacen VARCHAR(10),

    constraint PK_PRODUCTOS primary key (id_producto),
    constraint FK_PRODUCTOS foreign key (id_almacen) references almacen(id_almacen)

);

create table tienda(

    nombre VARCHAR(20),
    ciudad VARCHAR(10),
    calle VARCHAR(20),

    constraint PK_TIENDA primary key ( nombre)

);

create table vende(
    id_producto VARCHAR(10),
    nombre_tienda VARCHAR(20),

    constraint PK_VENDE primary key (id_producto, nombre_tienda),
    constraint FK_vende1 foreign key (id_producto) references productos(id_producto),
    constraint FK_vende2 foreign key (nombre_tienda) references tienda(nombre)

);