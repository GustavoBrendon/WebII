CREATE DATABASE  IF NOT EXISTS `devweb2025`;

USE `devweb2025`;

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(128) DEFAULT NULL,
  `descricao` varchar(256) DEFAULT NULL,
  `idade`int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
