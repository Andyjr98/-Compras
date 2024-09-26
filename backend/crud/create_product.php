// backend/crud/create_product.php

<?php
include '../config/database.php';

$nombre = $_POST['nombre'];
$precio = $_POST['precio'];

$query = "INSERT INTO productos (nombre, precio) VALUES (?, ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("sd", $nombre, $precio);
$stmt->execute();

echo json_encode(["message" => "Producto creado"]);
?>
