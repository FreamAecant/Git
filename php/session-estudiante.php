<?php
session_start();
$archivo = fopen("../data/estudiantes.json","r");
while(($linea=fgets($archivo))){
    $registro = json_decode($linea,true);
    if ($_POST["cuenta"] == $registro["cuenta"] && $_POST["password"] == $registro["password"]){
        
        $_SESSION["cuenta"]=$registro["cuenta"];
        $_SESSION["nombre"]=$registro["nombre"];
        
        $respuesta = array();
        $respuesta["outcome"] = "success!";
        $respuesta["nombre"] = $registro["nombre"];
        echo json_encode($respuesta);
        exit;
    }
        $respuesta = array();
        $respuesta["outcome"] = "failure!";
        echo json_encode($registro);
    
}
?>