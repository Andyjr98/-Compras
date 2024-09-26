// backend/crud/update_client.php

<?php
include '../config/database.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$email = $_POST['email'];

$query = "UPDATE clientes SET nombre = ?, email = ? WHERE id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("ssi", $nombre, $email, $id);
$stmt->execute();

echo json_encode(["message" => "Cliente actualizado"]);
?>
