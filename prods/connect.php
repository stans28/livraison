<?php

class Query{
    private $db;

    function __construct()
    {
        try {

            // Connect to DB
            $this->db = new PDO('mysql:host=localhost;dbname=livraison','tonny','securepassword');
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

        } catch (PDOException $e) {

            echo 'Exception reçue : ',  $e->getMessage(), "\n";
            die;

        }
    }

    public function getProduct($type)
    {

        $sel = $this->db->prepare('SELECT * FROM produit WHERE typeProd=:tp');
        $sel->bindParam(':tp', $type);

        $sel->execute() or die(print_r($sel->errorInfo()));

        $data = [];
        $i = 0;
        while ($dt = $sel->fetch()) {
            $data[$i]['id'] = $dt['id'];
            $data[$i]['name'] = $dt['name'];
            $data[$i]['price'] = $dt['price'];
            $data[$i]['note'] = $dt['note'];
            $data[$i]['image'] = $dt['image'];
            $data[$i]['marque'] = $dt['marque'];
            $i++;
        }

        return $data;
    }
}


?>
