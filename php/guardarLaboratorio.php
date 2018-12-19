<?php
session_start();
$archivo = fopen("../data/prematricula/".$_SESSION["cuenta"]."lab.json", "a+");
fwrite($archivo, "{\"codigo\":\"".$_POST["codigo"]."\",\"nombre\":\"".$_POST["nombre"]."\",\"seccion\":\"".$_POST["seccion"]."\",\"hora\":\"".$_POST["hora"]."\"}\n");
fclose($archivo);
?>