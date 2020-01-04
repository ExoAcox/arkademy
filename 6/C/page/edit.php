<?php
require '../change_me.php';

$xCashier = $_POST["xCashier"];
$product = $_POST["xProduct"];
$category = intval($_POST["xCategory"]);
$price = intval($_POST["xPrice"]);
$id = $_POST["id"];
$idc = $_POST["idC"];

$cashier = mysqli_fetch_assoc(mysqli_query($db, "SELECT id FROM cashier WHERE name = '$xCashier'"))["id"];

$insert = "UPDATE product SET
            name = '$product', price = '$price',
            id_category = '$category', id_cashier = '$cashier'
            WHERE id = $id";
mysqli_query($db, $insert);

if ($cashier == NULL) {
    mysqli_query($db, "UPDATE cashier SET
                name = '$xCashier' WHERE id = $idc");
    mysqli_query($db, "UPDATE product SET
                id_cashier = '$idc' WHERE id = $id");
};

echo "<script>
document.location.href = '../index.php'
</script>"

?>