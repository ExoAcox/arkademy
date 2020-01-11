<?php
require 'change_me.php';

$data = "SELECT c.name, p.name, t.name, p.price, p.id, p.id_cashier
FROM product p
LEFT JOIN cashier c
ON p.id_cashier = c.id
LEFT JOIN category t
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
        <span><b>ARKADEMY</b> COFFEE SHOP</span>
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
                <li class="xcashier"><?= $x[0];?></li>
                <li class="xproduct"><?= $x[1];?></li>
                <li class="xcategory"><?= $x[2];?></li>
                <li class="xprice">Rp. <?= $x[3];?></li>
                <li><a href="javascript:void(0)">Edit</a> | <a href="javascript:void(0)">Delete</a></li>
                <li class="hide xid_pro"><?= $x[4];?></li>
                <li class="hide xid_cas"><?= $x[5];?></li>
            </ul>
            <?php $no++; ?>
            <?php }; ?>
        </div>
    </div>
    <div id="popup">
        <form action="pages/edit.php" method="POST" id="form">
            <label for="cashier">Cashier</label>
            <input type="text" name="cashier" id="cashier" required pattern="^[a-zA-Z][a-zA-Z ]*[a-zA-Z]$" title="Use a valid name, not number or symbol!">
            <label for="product">Product</label>
            <input type="text" name="product" id="product" required>
            <label for="category">Category</label>
            <select name="category" id="category">
                <option value="1">Food</option>
                <option value="2">Drink</option>
            </select>
            <label for="price">Price</label>
            <input type="number" name="price" id="price" required min="10000">
            <input type="hidden" name="id_pro" id="id_pro">
            <input type="hidden" name="id_cas" id="id_cas">
            <button type="submit" name="submit" id="change">Change</button>
            <img src="img/close.png" alt="close" class="close">
        </form>
    </div>
    <div id="popup-del">
        <span>Are you sure?</span>
        <form action="pages/delete.php" method="post">
            <input type="hidden" name="id" id="id_del">
            <button type="submit">Delete</button>
        </form>
        <img src="img/close.png" alt="close" class="close">
    </div>
    <div id="popup-bg"></div>
    <script src="assets/script.js"></script>
</body>
</html>