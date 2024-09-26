// backend/crud/read_purchases.php

<?php
include '../config/database.php';

$query = "SELECT c.id, cl.nombre AS cliente, p.nombre AS producto, c.cantidad, c.fecha 
          FROM compras c
          JOIN clientes cl ON c.cliente_id = cl.id
          JOIN productos p ON c.producto_id = p.id";
$result = $conn->query($query);

$compras = [];
while ($row = $result->fetch_assoc()) {
    $compras[] = $row;
}

echo json_encode($compras);
?>
