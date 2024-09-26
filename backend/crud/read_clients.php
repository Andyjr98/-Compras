// backend/crud/read_clients.php

<?php
include '../config/database.php';

$query = "SELECT * FROM clientes";
$result = $conn->query($query);

$clientes = [];
while ($row = $result->fetch_assoc()) {
    $clientes[] = $row;
}

echo json_encode($clientes);
?>
