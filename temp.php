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
                <div class="col-12">
                    ← seleccionar otro departamento<br>
                    <div class="tarjeta row">
                        <div class="col-6">
                            <b>
                            <span id="mm110" class="nombreAsignatura">MM-110 Pre-cálculo</span><br>
                            <span id="mm111" class="nombreAsignatura">MM-111 Geometría y Trigonometría</span><br>
                            <span id="mm314" class="nombreAsignatura">MM-314 Programación I</span><br>
                            <span id="mm201" class="nombreAsignatura">MM-201 Cálculo I</span><br>
                            <span id="mm202" class="nombreAsignatura">MM-202 Cálculo II</span><br>
                            <span id="mm211" class="nombreAsignatura">MM-211 Vectores y Matrices</span><br>
                            <span id="mm411" class="nombreAsignatura">mm-411 Ecuaciones Diferenciales</span>
                            </b>
                        </div>
                        <div class="col-6">
                            asd
                        </div>
                    </div>
                </div>
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