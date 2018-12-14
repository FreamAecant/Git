$("#signinButton").click(function(){
    $.ajax({
        url: "php/session-estudiante.php",
        data: "cuenta="+$("#inputCuenta").val()+"&password="+$("#inputPassword").val(),
        dataType: "json",
        method: "POST",
        success:function(respuesta){
            console.log(respuesta);
            
        },
        error:function(error){
            console.error(error);            
        }
    })
})