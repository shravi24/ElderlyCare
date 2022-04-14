-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: fdatabase
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `user_id` bigint NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'infoway','123','admin');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assistant_service`
--

DROP TABLE IF EXISTS `assistant_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assistant_service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_id` int DEFAULT NULL,
  `profile_photo` varchar(1000) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email_id` varchar(128) NOT NULL,
  `phone_no` varchar(45) NOT NULL,
  `experience` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `emailId` (`email_id`),
  UNIQUE KEY `phoneNo` (`phone_no`),
  KEY `assistantibfk1` (`service_id`),
  CONSTRAINT `assistantibfk1` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assistant_service`
--

LOCK TABLES `assistant_service` WRITE;
/*!40000 ALTER TABLE `assistant_service` DISABLE KEYS */;
INSERT INTO `assistant_service` VALUES (1,1,NULL,'Pranita inamdar','pranita@gmail.com','4545454545','10 years'),(2,1,NULL,'Geeta Wajpe','Geeta@gmail.com','','25 years'),(3,1,NULL,'Mihir Rajguru','mihir@gmail.com','8989896554','10 years');
/*!40000 ALTER TABLE `assistant_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emergency_doctor_service`
--

DROP TABLE IF EXISTS `emergency_doctor_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emergency_doctor_service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_id` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email_id` varchar(128) NOT NULL,
  `phone_no` varchar(45) NOT NULL,
  `experience` varchar(45) DEFAULT NULL,
  `specialization` varchar(45) DEFAULT NULL,
  `visitDate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `emailId` (`email_id`),
  KEY `serviceId` (`service_id`),
  CONSTRAINT `emergency_doctor_service_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emergency_doctor_service`
--

LOCK TABLES `emergency_doctor_service` WRITE;
/*!40000 ALTER TABLE `emergency_doctor_service` DISABLE KEYS */;
INSERT INTO `emergency_doctor_service` VALUES (1,2,'Shraddha Inamdar','s@gmail.com','5656565656','24 years','Ph.D',NULL),(2,2,'Pranita Paranjape','p@gmail.com','7878787878','10 years','Ph.D',NULL);
/*!40000 ALTER TABLE `emergency_doctor_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meal_service`
--

DROP TABLE IF EXISTS `meal_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meal_service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_id` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `serviceId` (`service_id`),
  CONSTRAINT `meal_service_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal_service`
--

LOCK TABLES `meal_service` WRITE;
/*!40000 ALTER TABLE `meal_service` DISABLE KEYS */;
INSERT INTO `meal_service` VALUES (1,3,'Diabetic Meal'),(2,3,'Healthy Meal');
/*!40000 ALTER TABLE `meal_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_service`
--

DROP TABLE IF EXISTS `product_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_id` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `serviceId` (`service_id`),
  CONSTRAINT `product_service_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_service`
--

LOCK TABLES `product_service` WRITE;
/*!40000 ALTER TABLE `product_service` DISABLE KEYS */;
INSERT INTO `product_service` VALUES (1,4,'Walker'),(2,4,'Compression Support');
/*!40000 ALTER TABLE `product_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registrant`
--

DROP TABLE IF EXISTS `registrant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `confirm_password` varchar(45) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrant`
--

LOCK TABLES `registrant` WRITE;
/*!40000 ALTER TABLE `registrant` DISABLE KEYS */;
INSERT INTO `registrant` VALUES (1,'shraddha','shraddha1234','shraddha1234','shraddha1234','Female','s@gmail.com','6767676767'),(2,'Barkha','Barkha','Barkha','Barkha','Female','Barkha@test.com','67676767676');
/*!40000 ALTER TABLE `registrant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_name` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,'Assistant',10000),(2,'Doctor',20000),(3,'Meal',5000),(4,'Product',5000);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscriptions`
--

DROP TABLE IF EXISTS `subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `registrant_id` int DEFAULT NULL,
  `assistant_service` tinyint(1) DEFAULT NULL,
  `doctor_service` tinyint(1) DEFAULT NULL,
  `meal_service` tinyint(1) DEFAULT NULL,
  `products_service` tinyint(1) DEFAULT NULL,
  `totalcost` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ibfk1` (`registrant_id`),
  CONSTRAINT `ibfk1` FOREIGN KEY (`registrant_id`) REFERENCES `registrant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscriptions`
--

LOCK TABLES `subscriptions` WRITE;
/*!40000 ALTER TABLE `subscriptions` DISABLE KEYS */;
INSERT INTO `subscriptions` VALUES (1,NULL,1,0,1,0,1500),(2,NULL,1,1,1,0,40000),(3,NULL,1,0,1,0,40000),(4,NULL,1,0,0,0,10000),(5,NULL,1,1,0,1,40000),(6,NULL,1,0,1,1,20000),(7,NULL,0,0,0,0,0),(8,NULL,1,1,1,1,40000),(9,NULL,1,0,1,1,40000),(10,NULL,1,0,1,0,40000),(11,NULL,1,1,1,1,40000),(12,NULL,0,0,1,0,40000),(13,NULL,1,0,0,0,10000);
/*!40000 ALTER TABLE `subscriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `registrant_id` int DEFAULT NULL,
  `subscription_id` int DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `totalcost` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `useribfk1` (`subscription_id`),
  KEY `useribfk2` (`registrant_id`),
  CONSTRAINT `useribfk1` FOREIGN KEY (`subscription_id`) REFERENCES `subscriptions` (`id`),
  CONSTRAINT `useribfk2` FOREIGN KEY (`registrant_id`) REFERENCES `registrant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (5,NULL,NULL,NULL,NULL,'Shalmali Palace','Sangavi 411070',NULL,NULL,'Pushpa Joshi','40000'),(8,NULL,NULL,NULL,NULL,'Om Colony','Karve Nagar 411030',NULL,NULL,'Rukmini Khade','10000');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `address` varchar(128) NOT NULL,
  `pincode` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `user_address_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-15  2:20:21
