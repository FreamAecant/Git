<?php
session_start();
if (!isset($_SESSION["nombreEstudiante"])){
    header("Location: login-estudiante.php", true, 301);
    die();    
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Matrícula de Asignaturas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/matricula.css" />
    
    <link rel="icon" href="img/icon.jpg">
</head>

<body style="background-image: url(img/lucem-aspicio-tile.jpg); background-size: auto">
        <!--La topbar-->  
        <?php
            include "topbar-estudiante.html"
        ?>
        <!--/La topbar-->

    <div class="main">
        <div class="container-fluid">
            <h1><b>Matrícula de asignaturas</b></h1>
            <p><b>Primer periodo del 2019<br>
            Seleccione un departamento para ver las asignaturas disponibles<br>
            Seleccione una asignatura para ver las secciones disponibles</b></p>

            <div class="row" id="matriculaCont">
                <!--<div class="col-4">
                    <div class="tarjeta" id="matematica" onclick="goBig(this.id)">
                        <h5>Matemática</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="ingSistemas" onclick="goBig(this.id)">
                        <h5>Ingeniaria en sistemas</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="fisica" onclick="goBig(this.id)">
                        <h5>Física</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="humanidades" onclick="goBig(this.id)">
                        <h5>Humaninades</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="electivas" onclick="goBig(this.id)">
                        <h5>Electivas</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="astronomia" onclick="goBig(this.id)">
                        <h5>Astronomia</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="cienNaturales" onclick="goBig(this.id)">
                        <h5>Ciencias Naturales</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="idiomas" onclick="goBig(this.id)">
                        <h5>Idiomas</h5>
                    </div>
                </div>-->
            </div>     
            
            

            <hr>
            <div class="prematricula">
                Asignaturas prematriculadas
                <div class="lista03">
                    PLACEHOLDER - Sección - Hora - Aula - Uv - Código<br><hr class="h303">
                    PLACEHOLDER - Sección - Hora - Aula - Uv - Código<br><hr class="h303">
                    PLACEHOLDER - Sección - Hora - Aula - Uv - Código<br><hr class="h303">
                    PLACEHOLDER - Sección - Hora - Aula - Uv - Código
                </div>
                En lista de espera
                <div class="lista03">
                    PLACEHOLDER - Sección - Hora - Aula - Uv - Código
                </div>                    
                Laboratorios prematriculados
                <div class="lista03">
                    PLACEHOLDER - Sección - Hora - Aula - Uv - Código<br><hr class="h303">
                    PLACEHOLDER - Sección - Hora - Aula - Uv - Código
                </div>
            </div>
        </div>
    </div>    
    <script src="js/jquery.min.js"></script>
    <script src="js/matricula.js"></script>
</body>
</html>