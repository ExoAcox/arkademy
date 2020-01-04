<?php
require '../change_me.php';

$id = $_POST["id"];

mysqli_query($db, "DELETE FROM product WHERE id = $id");

echo "<script>
document.location.href = '../index.php'
</script>"

?>