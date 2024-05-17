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
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idRelacionesEnvio` int,
  `fechaCreacion` timestamp NOT NULL,
  `fechaVencimiento` timestamp NOT NULL
);

CREATE TABLE `pedidoproducto` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idFactura` int,
  `idProducto` integer,
  `cantidad` integer NOT NULL
);

ALTER TABLE `remitenteDestinatario` ADD FOREIGN KEY (`idRemitente`) REFERENCES `persona` (`id`);

ALTER TABLE `remitenteDestinatario` ADD FOREIGN KEY (`idDestinatario`) REFERENCES `persona` (`id`);

ALTER TABLE `factura` ADD FOREIGN KEY (`idRelacionesEnvio`) REFERENCES `remitenteDestinatario` (`id`);

ALTER TABLE `pedidoproducto` ADD FOREIGN KEY (`idFactura`) REFERENCES `factura` (`id`);

ALTER TABLE `pedidoproducto` ADD FOREIGN KEY (`idProducto`) REFERENCES `producto` (`id`);
