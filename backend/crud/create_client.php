// backend/crud/create_client.php

<?php
include '../config/database.php';

$nombre = $_POST['nombre'];
$email = $_POST['email'];

$query = "INSERT INTO clientes (nombre, email) VALUES (?, ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("ss", $nombre, $email);
$stmt->execute();

echo json_encode(["message" => "Cliente creado"]);
?>
