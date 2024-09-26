// backend/crud/delete_product.php

<?php
include '../config/database.php';

$id = $_POST['id'];

$query = "DELETE FROM productos WHERE id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $id);
$stmt->execute();

echo json_encode(["message" => "Producto eliminado"]);
?>
