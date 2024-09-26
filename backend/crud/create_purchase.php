// backend/crud/create_purchase.php

<?php
include '../config/database.php';

$cliente_id = $_POST['cliente_id'];
$producto_id = $_POST['producto_id'];
$cantidad = $_POST['cantidad'];

$query = "INSERT INTO compras (cliente_id, producto_id, cantidad) VALUES (?, ?, ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("iii", $cliente_id, $producto_id, $cantidad);
$stmt->execute();

echo json_encode(["message" => "Compra creada"]);
?>
