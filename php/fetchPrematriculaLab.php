<?php
session_start();
$archivo = fopen("../data/prematricula/".$_SESSION["cuenta"]."lab.json","r");
$registro = array();
while($linea = fgets($archivo)){
    $registro[]=json_decode($linea,true);
}
fclose($archivo);
echo json_encode($registro);
?>