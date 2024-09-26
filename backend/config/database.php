// backend/config/database.php

<?php
$servername = "localhost";
$username = "root"; // Cambia según sea necesario
$password = ""; // Cambia según sea necesario
$dbname = "compras_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
