CREATE TABLE `persona` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `ciudad` varchar(255) NOT NULL
);

CREATE TABLE `producto` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nombre` varchar(75) NOT NULL,
  `costo` int NOT NULL,
  `stock` int NOT NULL
);

CREATE TABLE `relacionesenvio` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `remitente` integer NOT NULL,
  `destinatario` integer NOT NULL
);

CREATE TABLE `factura` (
  id varchar(20) PRIMARY KEY NOT NULL,
  `idRelacionesEnvio` int,
  `fechaCreacion` timestamp NOT NULL, 
  `fechaVencimiento` timestamp NOT NULL
);

CREATE TABLE `pedidoproducto` (
  `idFactura` varchar(20),
  `idProducto` integer,
  `cantidad` integer NOT NULL
);

ALTER TABLE `relacionesenvio` ADD FOREIGN KEY (`remitente`) REFERENCES `persona` (`id`);

ALTER TABLE `relacionesenvio` ADD FOREIGN KEY (`destinatario`) REFERENCES `persona` (`id`);

ALTER TABLE `factura` ADD FOREIGN KEY (`idRelacionesEnvio`) REFERENCES `relacionesenvio` (`id`);

ALTER TABLE `pedidoproducto` ADD FOREIGN KEY (`idFactura`) REFERENCES `factura` (`id`);

ALTER TABLE `pedidoproducto` ADD FOREIGN KEY (`idProducto`) REFERENCES `producto` (`id`);
