CREATE TABLE `persona` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(255),
  `apellido` VARCHAR(255),
  `direccion` VARCHAR(255),
  `telefono` VARCHAR(20),
  `correo` VARCHAR(255)
);

CREATE TABLE `relacionesEnvio` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `remitente` INT,
  `destinatario` INT,
  FOREIGN KEY (`remitente`) REFERENCES `persona` (`id`),
  FOREIGN KEY (`destinatario`) REFERENCES `persona` (`id`)
);

CREATE TABLE `Producto` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(255),
  `costo` INT,
  `stock` INT
);

CREATE TABLE `Factura` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `fechaCreacion` DATETIME,
  `fechaVencimiento` DATETIME
);

CREATE TABLE `FacturaProducto` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `idFactura` INT,
  `idProducto` INT,
  `cantidad` INT,
  FOREIGN KEY (`idFactura`) REFERENCES `Factura` (`id`),
  FOREIGN KEY (`idProducto`) REFERENCES `Producto` (`id`)
);

CREATE TABLE `PedidoProducto` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `idPedido` INT,
  `idProducto` INT,
  `cantidad` INT,
  FOREIGN KEY (`idProducto`) REFERENCES `Producto` (`id`)
);

INSERT INTO `persona` (nombre,apellido,direccion,telefono,correo) VALUES (
  ?.
  ?,
  ?,
  ?,
  ?
)