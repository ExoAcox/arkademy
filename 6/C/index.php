<?php
require 'change_me.php';

$data = "SELECT c.name, p.name, t.name, p.price, p.id, p.id_cashier
FROM product AS p
LEFT JOIN cashier AS c
ON p.id_cashier = c.id
LEFT JOIN category AS t
ON p.id_category = t.id";
$result = mysqli_query($db, $data);
$list = [];
while ($x = mysqli_fetch_row($result)) {
    $list[] = $x;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Menu</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div id="header">
        <img src="img/logo.png" alt="logo">
        <span><b>ARKADEMY</b> COFFE SHOP</span>
        <a href="javascript:void(0)">ADD</a>
    </div>
    <div id="main">
        <div id="topTable">
            <div id="topNo">No</div>
            <div id="topCashier">Cashier</div>
            <div id="topProduct">Product</div>
            <div id="topCategory">Category</div>
            <div id="topPrice">Price</div>
            <div id="topAction">Action</div>
        </div>
        <div id="table">
            <?php $no = 1; ?>
            <?php foreach ($list as $x) {;?>
            <ul class="list">
                <li><?= $no?></li>
                <li><?= $x[0];?></li>
                <li><?= $x[1];?></li>
                <li><?= $x[2];?></li>
                <li>Rp. <?= $x[3];?></li>
                <li><a href="javascript:void(0)">Edit</a> | <a href="javascript:void(0)">Delete</a></li>
                <li class="hide"><?= $x[4];?></li>
                <li class="hide"><?= $x[5];?></li>
            </ul>
            <?php $no++; ?>
            <?php }; ?>
        </div>
    </div>
    <div id="popup">
        <form action="page/edit.php" method="POST" id="edit" onsubmit="return validate()">
            <label for="xCashier">Cashier</label>
            <input type="text" name="xCashier" id="xCashier" required>
                <br>
            <label for="xProduct">Product</label>
            <input type="text" name="xProduct" id="xProduct" required>
                <br>
            <label for="xCategory">Category</label>
            <select name="xCategory" id="xCategory">
                <option value="1">Food</option>
                <option value="2">Drink</option>
            </select>
                <br>
            <label for="xPrice">Price</label>
            <input type="text" name="xPrice" id="xPrice" required>
            <input type="hidden" name="id" id="xID">
            <input type="hidden" name="idC" id="xIDc">
            <button type="submit" name="submit" id="change">Change</button>
            <a href="javascript:void(0)"><img src="img/close.png" alt="close" class="close"></a>
        </form>
    </div>
    <div id="popup-del">
        <span>Are you sure?</span>
        <form action="page/delete.php" method="post">
            <input type="hidden" name="id" id="xIDx">
            <button type="submit">Delete</button>
        </form>
        <a href="javascript:void(0)"><img src="close.png" alt="close" class="close"></a>
    </div>
    <div id="popup-bg"></div>
    <script src="assets/script.js"></script>
</body>
</html>