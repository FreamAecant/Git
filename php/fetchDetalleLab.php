<?php
$archivo = fopen("../data/labSecciones.json", "r");

while ($linea = fgets($archivo)){
    $registro = json_decode($linea, true);
    if ($registro["codigo"] == $_POST["codigo"]){
        //$temp = count($registro["secciones"]);
        foreach($registro["secciones"] as $seccion){
            if($seccion["codigoSeccion"] == $_POST["seccion"]){
                $respuesta = $seccion;
                break;
            }
        }
        break;
    }
}

fclose($archivo);
echo json_encode($respuesta);
?>