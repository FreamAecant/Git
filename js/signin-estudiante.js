function loginLogic(){
    $.ajax({
        url: "php/session-estudiante.php",
        data: "cuenta="+$("#inputCuenta").val()+"&password="+$("#inputPassword").val(),
        dataType: "json",
        method: "POST",
        success:function(respuesta){
            if (respuesta.outcome=="success!"){
                console.log(respuesta);
                window.location.assign("main-estudiante.php")
            }else{
                console.log(respuesta);
                $("#errorDisplay").html("Número de cuenta o contraseña incorrecta.");
            }
        },
        error:function(error){
            console.error(error);            
        }
    })
};

$("#signinButton").click(loginLogic);

//No sé por qué mi botón no funciona con enter, pero esto lo soluciona.
$(function(){
    $(window).keyup( function(e){ 
      if (e.keyCode == 13) {

        loginLogic();

      }
    });
  });