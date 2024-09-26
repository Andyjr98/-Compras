// backend/crud/update_product.php

<?php
include '../config/database.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$precio = $_POST['precio'];

$query = "UPDATE productos SET nombre = ?, precio = ? WHERE id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("sdi", $nombre, $precio, $id);
$stmt->execute();

echo json_encode(["message" => "Producto actualizado"]);
?>
