<?php
session_start();

$archivo = fopen("../data/prematricula/".$_SESSION["cuenta"].".json", "a+");

fwrite($archivo, "{\"departamento\":\"".$_POST["departamento"]."\",\"asignatura\":\"".$_POST["asignatura"]."\",\"seccion\":\"".$_POST["seccion"]."\"}\n");

fclose($archivo);
echo "";
?>