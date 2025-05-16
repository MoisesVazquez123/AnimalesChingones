<?php
$usuario=$_POST['usuario'];

$comentario=$_POST['comentario'];

$conexion=mysqli_connect('localhost','root','12345678','comentarios');

$usuario=mysqli_real_escape_string($conexion, $usuario);
$comentario=mysqli_real_escape_string($conexion, $comentario);

$query="INSERT INTO comentario (usuario,comentario) VALUES  ('$usuario', '$comentario')";
mysqli_query($conexion, $query);

header('Location:../html/index.php');
exit;
?>