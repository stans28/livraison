DROP TABLE IF EXISTS `produit`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `note` int(5) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `marque` varchar(200) DEFAULT NULL,
  `typeProd` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `produit` WRITE;

/*!40000 ALTER TABLE `produit` DISABLE KEYS */;
INSERT INTO `produit` VALUES (1,'Televiseur Smart TV ultra-plat 4K UHD LED',500,4,'img/produits/electro/1.jpeg','Philips','electro'),(2,'65\" UHD
 4K Flat Smart TV Curved KU6500 Serie 6',450,4,'img/produits/electro/2.jpg','Samsung','electro'),(3,'iPhone',550,4,'img/produits/electro/3.jpg','
Apple','electro'),(4,'The Sun',100,3,'img/produits/mode/1.jpg','Standard','mode'),(5,'Pippa O\'Connor',90,4,'img/produits/mode/2.jpg','O\'Connor'
,'mode'),(6,'Elle Canada Sun',100,3,'img/produits/mode/5.jpg','Standard','mode'),(7,'Boys Ramadan',90,5,'img/produits/mode/4.jpg','Twenty4','mode
'),(8,'Produit 1',45,3,'img/produits/spa/1.png','Dubai SPA','spa'),(9,'Trepup',45,4,'img/produits/spa/3.jpg','Bangalore','spa'),(10,'Vella Farga'
,30,3,'img/produits/spa/2.jpeg','Dubai SPA','spa'),(11,'Salon 1 1',200,3,'img/produits/design/1.jpg','Tomali','design'),(12,'Salle à manger',125,
4,'img/produits/design/3.jpg','Standard','design'),(13,'Salon 2',145,3,'img/produits/design/2.jpg','Standard','design'),(14,'TopMila Dining table
 round',350,5,'img/produits/design/4.jpg','TopMila','design'),(15,'Meuble TV',125,5,'img/produits/design/5.jpg','Alinea','design'),(16,'KidsBele
1',45,3,'img/produits/enfant/1.jpg','BORSALINO','enfant'),(17,'Porteur',35,2,'img/produits/enfant/2.jpg','Little Bikloon','enfant'),(18,'Violon O
utfit',20,4,'img/produits/enfant/3.jpg','Carlton','enfant'),(19,'Burger',20,3,'img/produits/repas/1.jpg','Standard','repas'),(20,'Pizza',50,4,'im
g/produits/repas/3.jpg','Standard','repas'),(21,'Italien',10,3,'img/produits/repas/2.jpg','Standard','repas'),(22,'Poulet',40,5,'img/produits/rep
as/4.jpg','Standard','repas'),(23,'Garbage Bread',30,4,'img/produits/repas/5.jpg','Standard','repas');
/*!40000 ALTER TABLE `produit` ENABLE KEYS */;
UNLOCK TABLES;
