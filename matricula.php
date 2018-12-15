<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Matrícula de Asignaturas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/matricula.css" />
    <script src="js/matricula.js"></script>
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

            <div class="row">
                <div class="col-4">
                    <div class="tarjeta" id="0" onclick="goBig(this.id)">
                        <h5>Matemática</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="1" onclick="goBig(this.id)">
                        <h5>Ingeniaria en sistemas</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="2" onclick="goBig(this.id)">
                        <h5>Física</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="3" onclick="goBig(this.id)">
                        <h5>Humaninades</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="4" onclick="goBig(this.id)">
                        <h5>Electivas</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="5" onclick="goBig(this.id)">
                        <h5>Astronomia</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="6" onclick="goBig(this.id)">
                        <h5>Ciencias Naturales</h5>
                    </div>
                </div>
                <div class="col-4">
                    <div class="tarjeta" id="7" onclick="goBig(this.id)">
                        <h5>Idiomas</h5>
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
</body>
</html>