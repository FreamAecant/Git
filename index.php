<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>DIPP - Dirección de Ingreso, Permanencia y Promoción</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/index.css">
    <!--script src="main.js"></script>-->
    <link rel="icon" href="img/icon.jpg">
    <style>        
        
    </style>
</head>


<body style="background-image: url(img/lucem-aspicio-tile.jpg); background-size: auto">
<?php
include "topbar-general.html"
?>
    <div class="main">
        <div class="container-fluid">
            <div class="row">

                <div class="col-md-3">
                    <div class="menu">
                        <div class="prim-ing-header">
                            <h5>
                            Eres primer ingreso? <br>
                                Click aquí:  
                            </h5>
                        </div>
                        <div>
                            <!--<input type="button" class="btn btn-lg btn-primary btn-block menu-element" style="height: 100%; white-space:normal" value="Ingresar como estudiante">
                            <input type="button" class="btn btn-lg btn-primary btn-block menu-element" style="height: 100%; white-space:normal" value="Ingresar como docente">
                            <input type="button" class="btn btn-lg btn-primary btn-block menu-element" style="height: 100%; white-space:normal" value="Ingresar como personal administrativo">-->
                            <a href="login-estudiante.php" class="btn btn-lg btn-primary btn-block menu-element" style="height: 100%; white-space:normal" >Ingresar como estudiante</a>
                            <a href="login-docente.php" class="btn btn-lg btn-primary btn-block menu-element" style="height: 100%; white-space:normal" >Ingresar como docente</a>
                            <a href="login-administrativo.php" class="btn btn-lg btn-primary btn-block menu-element" style="height: 100%; white-space:normal" >Ingresar como personal administrativo</a>
                            <div class="tarjeta menu-element">
                                Calendario académico
                                <a href="doc/CALENDARIO-ACADEMICO-2018.pdf"><img class="fit-img" src="img/calendario-academico.png"></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-9">
                    <div class="contenido">                        
                        <img class="fit-img" src="img/dipp-banner.jpg">                        
                        <h5 class="titulos"><b>Reciente</b></h5>
                        <div class="row">
                            <!--hrefs y alts con placeholders a ser reemplazados!!!-->
                            <div class="col-md-4">
                                <div class="tarjeta">
                                    <a href="img/calendarioPagoIII2018.jpg"><img class="fit-img" src="img/calendarioPagoIII2018.jpg" alt="Calendario de pagos"></a>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="tarjeta">
                                    <a href="img/calendarioIII2018.png"><img class="fit-img" src="img/calendarioIII2018.png" alt="Calendario de pagos"></a>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="tarjeta">
                                    <a href="img/pagoLabIII2018.jpg"><img class="fit-img" src="img/pagoLabIII2018.jpg" alt="Calendario de pagos"></a>
                                </div>
                            </div>
                        </div>
                        <h5 class="titulos"><b>Importante</b></h5>
                        <div class="row">
                           
                            <div class="col-md-4">
                                <div class="tarjeta boton-llamativo">
                                    Cupos de medicina
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="tarjeta boton-llamativo">
                                    Cupos de biologia
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="tarjeta boton-llamativo">
                                    Cupos de arquitectura
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>
</html>