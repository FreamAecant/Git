var dets=[
    {
        innerSmall:"<h5>Matemática</h5>",
        innerBig:`<b style="pointer-events: none;">MM-110 Pre-cálculo<br>
            MM-111 Geometría y Trigonometría<br>
            MM-314 Programación I<br>
            MM-201 Cálculo I<br>
            MM-202 Cálculo II<br>
            MM-211 Vectores y Matrices<br>
            mm-411 Ecuaciones Diferenciales
            </b>`,
        innerDetail:`
        
            `
    },
    {
        innerSmall:"<h5>Ingeniaria en sistemas</h5>",
        innerBig:`<b style="pointer-events: none">IS-110 Introducción a la Ingeniería en Sistemas<br>
            IS-210 Programación II<br>
            IS-310 Algoritmos y Estructura de Datos<br>
            IS-311 Circuitos Eléctricos para Ingeniería en Sistemas<br>
            IS-411 Electrónica para Ingeniería en Sistemas<br>
            IS-412 Sistemas Operativos I<br>
            IS-410 Programación Orientada a Objetos<br>
            IS-501 Bases de Datos
            </b>`,
        innerDetail:`
        
            `
    },
    {
        innerSmall:"<h5>Fisica</h5>",
        innerBig:`<b style="pointer-events: none">
            FS-100 Física I<br>
            FS-200 Física II<br>
            FS-300 Física III<br>
            FS-414 Física Médica<br>
            FS-302 Electrostática<br>
            FS-304 Termodinámica
            </b>        
            `,
        innerDetail:`
        
            `
    },
    {
        innerSmall:"<h5>Humanidades</h5>",
        innerBig:`<b style="pointer-events: none">SC-101 Sociología<br>
            DQ-101 Dibujo I<br>
            FF-101 Filosofía<br>
            HH-101 Historia de Honduras<br>
            EG-101 Español<br>
            </b>`,
        innerDetail:`
        
            `
    },
    {
        innerSmall:"<h5>Electivas</h5>",
        innerBig:`<b style="pointer-events: none">Tae kwon do<br>
            Basketball<br>
            Guitarra popular<br>
            Apreciación artística<br>
            Ping pong<br>
            </b>`,
        innerDetail:`
        
            `
    },
    {
        innerSmall:"<h5>Astronomía</h5>",
        innerBig:`<b style="pointer-events: none">PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER
            </b>`,
        innerDetail:`
    
        `
    },
    {
        innerSmall:"<h5>Ciencias naturales</h5>",
        innerBig:`<b style="pointer-events: none">PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER
            </b>`,
        innerDetail:`
    
        `
    },
    {
        innerSmall:"<h5>Idiomas</h5>",
        innerBig:`<b style="pointer-events: none">PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER<br>
            PLACEHOLDER
            </b>`,
        innerDetail:`
    
        `
    }
]

var $registroAsignaturas = null;


/*function goBig(id){
    document.getElementById(id).innerHTML=dets[id].innerBig;
    document.getElementById(id).setAttribute("onmouseout","goBack(this.id)");
    document.getElementById(id).removeAttribute("onclick")
    document.getElementById(id).setAttribute("class","tarjeta-expand");
    document.getElementById(id).scrollTop = 90;
    return;
}
function goBack(id){
    document.getElementById(id).removeAttribute("onmouseout");
    document.getElementById(id).setAttribute("onclick","goBig(this.id)");
    document.getElementById(id).innerHTML=dets[id].innerSmall;
    document.getElementById(id).setAttribute("class","tarjeta");
    return;
}*/

$(".nombreAsignatura").click(function(){
    console.log(this.id);
    $(".nombreAsignatura").addClass("nombreAsignaturaGray");
    $("#"+this.id).removeClass("nombreAsignaturaGray");
});

function loadAsignaturas(){
    $.ajax({
        url:"php/fetchAsignaturas.php",
        dataType:"json",
        success: function(respuesta){
            console.log(respuesta);
            $registroAsignaturas = respuesta;
            console.log($registroAsignaturas);
            displayDepartamentos($registroAsignaturas);
        },
        error: function(err){
            console.error(err);            
        }        
    })
}
function displayDepartamentos($registroAsignaturas){
    $("#matriculaCont").html(``)
    for(var i=0;i < $registroAsignaturas.length;i++){
        $("#matriculaCont").append(`
        <div class="col-4">
            <div class="tarjeta" id="${$registroAsignaturas[i].idDepartamento}" onclick="goBig(this.id)">
                <h5>${$registroAsignaturas[i].nombreDepartamento}</h5>
            </div>
        </div>
        `)
    }
    $("#matriculaCont").append(``)
}

function goBig(id){
    registro = [];
    for(var i=0; i<$registroAsignaturas.length; i++){
        if ($registroAsignaturas[i].idDepartamento == id){
            registro = $registroAsignaturas[i].asignaturas;
        }
    }
    console.log(registro);
    /*$("#matriculaCont").html(`

    `)
    for(var i=0; i<respuesta.length;i++){
        $("#matriculaCont").append(`
        
        `)
    }
    $("#matriculaCont").append(`
    
    `)*/
}

$(document).ready(loadAsignaturas);