<?php
$archivo = fopen("../data/departamentosLab.json","r");
while($linea=fgets($archivo)){
    $registro[]=json_decode($linea,true);
}
fclose($archivo);
echo json_encode($registro);
?>