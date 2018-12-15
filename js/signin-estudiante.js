function loginLogic(){
    $.ajax({
        url: "php/session-estudiante.php",
        data: "cuenta="+$("#inputCuenta").val()+"&password="+$("#inputPassword").val(),
        dataType: "json",
        method: "POST",
        success:function(respuesta){
            console.log(respuesta);
            window.location.replace("main-estudiante.php")
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