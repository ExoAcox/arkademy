<?php
require '../change_me.php';

$xCashier = $_POST["cashier"];
$product = $_POST["product"];
$category = intval($_POST["category"]);
$price = intval($_POST["price"]);
$id = $_POST["id_pro"];
$idc = $_POST["id_cas"];

$cashier = mysqli_fetch_assoc(mysqli_query($db, "SELECT id FROM cashier WHERE name = '$xCashier'"))["id"];

if ($cashier == NULL) {
    mysqli_query($db, "UPDATE cashier SET
                name = '$xCashier' WHERE id = $idc");
};

$cashier = mysqli_fetch_assoc(mysqli_query($db, "SELECT id FROM cashier WHERE name = '$xCashier'"))["id"];

$insert = "UPDATE product SET
            name = '$product', price = '$price',
            id_category = '$category', id_cashier = '$cashier'
            WHERE id = $id";
mysqli_query($db, $insert);


echo "<script>
document.location.href = '../index.php'
</script>"

?>