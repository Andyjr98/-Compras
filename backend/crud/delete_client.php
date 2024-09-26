// backend/crud/delete_client.php

<?php
include '../config/database.php';

$id = $_POST['id'];

$query = "DELETE FROM clientes WHERE id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $id);
$stmt->execute();

echo json_encode(["message" => "Cliente eliminado"]);
?>
