-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: janfir_db
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `images` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (10,'Sarung',80000,50,'http://localhost:4001/file/images-1652762641814-772715962-Sarung_Sholat_Keren_Katun_Hitam_Putih_SRG_82.jpg'),(11,'Peci',45000,30,'http://localhost:4001/file/images-1652762749713-286605664-3271281dcaab95adcb809c6803038f1e.jpg'),(12,'Koko',75000,175,'http://localhost:4001/file/images-1652762826518-835858864-koko.png'),(16,'Sajadah',75000,25,'http://localhost:4001/file/images-1652780991915-493749638-baju_koko_toyobo_1649803529_49220e25_progressive.jpg'),(17,'Sajadah 2',1000,1000,'http://localhost:4001/file/images-1652781176368-980115313-koko.png'),(18,'Sarung 2',100,100,'http://localhost:4001/file/images-1652781622141-114782405-Sarung_Sholat_Keren_Katun_Hitam_Putih_SRG_82.jpg'),(19,'Koko 3',100,10000,'http://localhost:4001/file/images-1652781639130-764443891-koko.png'),(20,'Sarung 3',10,10,'http://localhost:4001/file/images-1652781674024-974468488-Sarung_Sholat_Keren_Katun_Hitam_Putih_SRG_82.jpg'),(21,'Peci 2',100,1000,'http://localhost:4001/file/images-1652781689416-962463474-3271281dcaab95adcb809c6803038f1e.jpg'),(22,'Koko 4',100,100,'http://localhost:4001/file/images-1652781703153-181149021-baju_koko_toyobo_1649803529_49220e25_progressive.jpg'),(23,'Koko 5',100,100,'http://localhost:4001/file/images-1652781745103-469148949-koko.png'),(24,'Sarung 4',100,100,'http://localhost:4001/file/images-1652781778959-547218782-Sarung_Sholat_Keren_Katun_Hitam_Putih_SRG_82.jpg');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-17 19:30:07
