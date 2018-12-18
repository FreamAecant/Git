<?php
session_start();
$archivo = fopen("../data/prematricula/".$_SESSION["cuenta"].".json","r");
while($linea=fgets($archivo)){
    $registro[]=json_decode($linea,true);
}
$archivo2 = fopen("../data/secciones.json","r");
while($linea2=fgets($archivo2)){
    $hand[] = json_decode($linea2,true);
}
if(isset($registro)){
    $respuesta["prematricula"] = $registro;
}else{
    $respuesta["prematricula"] = [];
}
$respuesta["secciones"] = $hand;

fclose($archivo2);
fclose($archivo);
echo json_encode($respuesta);
?>