

CREATE TABLE `urls` (
  `id` bigint(20) NOT NULL,
  `code` varchar(7) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `link` text COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
)