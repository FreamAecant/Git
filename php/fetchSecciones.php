<?php
$archivo=fopen("../data/secciones.json","r");
while(($linea = fgets($archivo))){    
    $registro = json_decode($linea,true);
    if($_POST["codigo"] == $registro["codigo"]){
        $respuesta = $registro;
        break;
    }
}
fclose($archivo);
echo json_encode($respuesta);
?>