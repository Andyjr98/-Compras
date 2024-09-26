// backend/crud/read_products.php

<?php
include '../config/database.php';

$query = "SELECT * FROM productos";
$result = $conn->query($query);

$productos = [];
while ($row = $result->fetch_assoc()) {
    $productos[] = $row;
}

echo json_encode($productos);
?>
