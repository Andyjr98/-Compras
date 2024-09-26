// backend/crud/delete_purchase.php

<?php
include '../config/database.php';

$id = $_POST['id'];

$query = "DELETE FROM compras WHERE id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $id);
$stmt->execute();

echo json_encode(["message" => "Compra eliminada"]);
?>
