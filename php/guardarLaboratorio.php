<?php
session_start();
$archivo = fopen("../data/prematricula/".$_SESSION["cuenta"]."lab.json", "a+");
fwrite($archivo, "{\"codigo\":\"".$_POST["codigo"]."\",\"nombre\":\"".."\"}");
fclose($archivo);
?>