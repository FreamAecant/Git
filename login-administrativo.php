<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Plataforma para personal administrativo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/login.css" />
    <!--script src="main.js"></script>*-->
    <link rel="icon" href="img/icon.jpg">
</head>

<body style="background-image: url(img/lucem-aspicio-tile.jpg)">  
    <!--La topbar-->  
    <?php
    include "topbar-general.html"
    ?>
    <!--/La topbar-->
    <div class="container">
        <form class="form-signin">                    
            <img class="logo" src="img/emblema.png" alt="Emblema">             
            <h1 class="h3 mb-3 font-weight-normal">Plataforma para personal administrativo</h1>
            <label for="inputCuenta" class="sr-only">Cuenta</label>
            <input type="text" id="inputCuenta" class="form-control" placeholder="Código de empleado">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required>
            <!--
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            -->
            <button class="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
        </form>
    </div>
</body>
</html>