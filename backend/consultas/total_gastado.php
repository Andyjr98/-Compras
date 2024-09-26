// backend/consultas/total_gastado.php

<?php
include '../config/database.php';

$limite = 500; // Cambia este valor según sea necesario
$mes = date('Y-m'); // Obtiene el mes actual

$query = "SELECT c.id, c.nombre, SUM(p.precio * co.cantidad) AS total_gastado, COUNT(co.producto_id) AS numero_productos
          FROM clientes c
          JOIN compras co ON c.id = co.cliente_id
          JOIN productos p ON p.id = co.producto_id
          WHERE DATE_FORMAT(co.fecha, '%Y-%m') = ?
          GROUP BY c.id
          HAVING total_gastado > ?";

$stmt = $conn->prepare($query);
$stmt->bind_param("si", $mes, $limite);
$stmt->execute();
$result = $stmt->get_result();

$clientes = [];
while ($row = $result->fetch_assoc()) {
    $clientes[] = $row;
}

echo json_encode($clientes);
?>
