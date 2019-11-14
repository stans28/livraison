<?php


/**
 *
 * @param : void
 * @return : void
 */
function Elmec(){
    header('Pragma: no-cache');
    header('Expires: 0');
    header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT');
    header('Cache-Control: no-cache, must-revalidate');
}

Elmec();

require 'connect.php';

$query = new Query();

if (isset($_GET['type'])) {
    $type = htmlspecialchars($_GET['type']);
}
else{
    $type = '1';
}

$data = $query->getProduct($type);

   for ($i=0; $i < count($data); $i++) {

?>

<div class='prodCard'>

    <div class="imgCard">
        <img src="<?php echo $data[$i]['image']; ?>" alt="">
    </div>
    <div class="details">
        <div class="row">
            <div class="nameProd">
                <?php echo $data[$i]['name']; ?>
            </div>

            <div class="getDetail" data-opt='no'>
                <span class="fa fa-info-circle"></span>
            </div>

            <div class="ubder">
                <div class="price">
                    $ <?php echo $data[$i]['price']; ?>
                </div>

                <div class="stars">
                    <?php

                        for ($j=0; $j < $data[$i]['note']; $j++) {
                    ?>
                        <div class="yellow">
                            <span class="fa fa-star"></span>
                        </div>
                    <?php
                    }
                    ?>

                    <?php

                        for ($j=$data[$i]['note']; $j < 5; $j++) {
                    ?>
                        <div class="grey">
                            <span class="fa fa-star"></span>
                        </div>
                    <?php
                    }
                    ?>
                </div>
            </div>

            <div class="under">
                <div class="brand">

                    <span class="fa fa-tag"></span> <?php echo $data[$i]['marque']; ?>
                </div>

                <div class="formulaire">
                    <form action="" method="post" enctype="multipart/form-data">
                        <div class='partForm'>
                            <label>Quantité</label>
                            <input type="number" name="qty" class='qty' min="1" max="10" value="1">
                        </div>

                        <div class='partForm'>
                            <label>Livrer chez : </label>
                            <input type="text" name="locate" class="locate">
                        </div>

                        <div class='partForm'>
                            <div class="radio">
                                <label>Express (20$)</label>
                                <input type="radio" name="methode" class="methode" checked>
                            </div>

                            <div class="radio">
                                <label>Rogue Post (15$)</label>
                                <input type="radio" name="methode" class="methode">
                            </div>

                            <div>
                                <button type="submit" class='sub'><span class='ico'><span class="fa fa-shipping-fast"></span></span> Livrer</button>
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>

</div>

<?php

    }

?>
