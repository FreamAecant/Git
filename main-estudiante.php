<?php
session_start();

if (!isset($_SESSION["nombreEstudiante"])){
    header("Location: login-estudiante.php", true, 301);
    die();
    
}else{
    $archivo = fopen("data/estudiantes.json","r");
    $idNo="Sin confirmar";
    $correoInst="Sin confirmar";
    while(($linea=fgets($archivo))){
        $registro = json_decode($linea,true);
        if ($registro["cuenta"] == $_SESSION["cuenta"]){            
            $idNo = $registro["idNo"];
            $correoInst = $registro["correoInst"];
                                    
            break;
        }
    }
    fclose($archivo);
}
?>
<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Plataforma para estudiantes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="css/main-menu.css" />
        <!--script src="main.js"></script>*-->
        <link rel="icon" href="img/icon.jpg">
    </head>


    <body style="background-image: url(img/lucem-aspicio-tile.jpg); background-size: auto">
        <!--La topbar-->  
        <?php include "topbar-estudiante.html" ?>
            <!--/La topbar-->
        <div class="main">
            
            <h1 class="h1"><b>Registrado como: <?php echo $_SESSION["nombreEstudiante"] ?></b></h1>
            <div style="padding-left: 1.4%">
                <b>Id: <?php echo $idNo ?>, Correo Institucional: <?php echo $correoInst ?><br>
                Para corregir los datos personales, avocarse a la DIPP con la copia de los documentos necesarios.</b>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <div class="menu">
                            <!--div class="prim-ing-header">
                                <h5>
                                Eres primer ingreso? <br>
                                    Click aquí:  
                                </h5>
                            </div-->
                            <div>
                                <a class="menu-link" href="matricula.php">
                                    <b>•Matrícula de asignaturas</b><br>
                                </a>
                                <a class="menu-link" href="main-estudiante.php"><!--PLACEHOLDER-->
                                    <b>•Matrícula de laboratorios</b><br>
                                </a>
                                <a class="menu-link" href="main-estudiante.php"><!--PLACEHOLDER-->
                                    <b>•Cambio de contraseña</b><br>
                                </a>
                                <a class="menu-link" href="main-estudiante.php"><!--PLACEHOLDER-->
                                    <b>•Estado de cuenta</b><br>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-9">
                        <div class="contenido">                                            
                            <div class="row tray-row">                           
                                <div class="col-md-4">
                                    <a href="main-estudiante.php">
                                        <div class="tarjeta">
                                            <h5><b>Calificación de periodo</b></h5>
                                            Ver tus calificaciones del último periodo matriculado.
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-4">
                                    <a href="main-estudiante.php">
                                        <div class="tarjeta">
                                            <h5><b>Programación académica</b></h5>
                                            Ver la planificación de secciones para el periodo en curso y averiguar cómo solicitar la apertura de una nueva sección.
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-4">
                                    <a href="main-estudiante.php">
                                        <div class="tarjeta">
                                            <h5><b>Censo de matrícula</b></h5>
                                            Ayuda a definir el calendario académico del próximo periodo diciéndonos qué planeas matricular.
                                        </div>
                                    </a>
                                </div>
                            </div>                        
                            <div class="row tray-row">
                                <div class="col-md-4">
                                    <a href="main-estudiante.php">
                                        <div class="tarjeta">
                                            <h5><b>Historial académico</b></h5>
                                            Ver tus calificaciones de pariodos anteriores.
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-4">
                                    <a href="main-estudiante.php">
                                        <div class="tarjeta">
                                            <h5><b>Solicitudes</b></h5>
                                            Realiza solicitudes particulares al equipo administrativo de la UNAH.
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </body>
    </html>