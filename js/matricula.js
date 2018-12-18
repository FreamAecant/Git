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
var asignaturaActiva = null;
var seccionActiva = null;
var departamentoActivo = null;

function loadAsignaturas(){
    $("#matriculaCont").html(`<span class="nombreBlack"><i>Recuperando lista de departamentos...</i></span>`)
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
function loadPrematricula(){
    $("#listaAsignaturasPrematriculadas").html("Recuperando lista de prematricula...");
    $("#listaLaboratoriosPrematriculados").html("Recuperando lista de prematricula...");
    $.ajax({
        url:"php/fetchPrematricula.php",
        dataType:"json",
        success: function(respuesta){
            console.log(respuesta);
            var cont = null;
            var arr = Array();
            var arr2 = Array();
            $("#listaAsignaturasPrematriculadas").html("");
            if(respuesta.prematricula.length == 0){
                $("#listaAsignaturasPrematriculadas").html("No se ha prematriculado ninguna asignatura.")
            }
            for(var t=0;t<respuesta.prematricula.length;t++){
                for(var y = 0;y<respuesta.secciones.length;y++){
                    if(respuesta.prematricula[t].asignatura == respuesta.secciones[y].codigo){
                        console.log("found");
                        arr = respuesta.secciones[y];
                        console.log("arr: "+arr.secciones.length);
                        for(var x=0;x<arr.secciones.length;x++){
                            if(arr.secciones[x].codigoSeccion == respuesta.prematricula[t].seccion){
                                console.log("trueFound: "+arr.secciones[x].codigoSeccion+", "+respuesta.prematricula[t].seccion);
                                arr2.push(arr.secciones[x]);
                                break;
                            }
                        }
                        break;
                    }
                }                
            }

            
            for(var d = 0;d<arr2.length;d++){
                for(var g = 0; g<$registroAsignaturas.length;g++){
                    if(respuesta.prematricula[d].departamento == $registroAsignaturas[g].idDepartamento){
                        for(var f = 0; f<$registroAsignaturas[g].asignaturas.length;f++){
                            if(respuesta.prematricula[d].asignatura == $registroAsignaturas[g].asignaturas[f].codigo){
                                nombre = $registroAsignaturas[g].asignaturas[f].nombreAsignatura;
                            }
                        }
                    }
                }
                console.log("arr2.length"+arr2.length)                
                $("#listaAsignaturasPrematriculadas").append(`
                ${nombre} - ${respuesta.prematricula[d].asignatura} - ${arr2[d].codigoSeccion} - HI: ${arr2[d].hInicio} - HF: ${arr2[d].hFinal}  <br><hr class="h303">
                `);
            }
            //console.dir("arr2: "+arr2);
        },
        error: function(err){
            console.error(err);            
        }
    })
}
function displayDepartamentos($registroAsignaturas){
    asignaturaActiva = null;
    seccionActiva = null;
    departamentoActivo = null;
    $("#matriculaCont").html(``)
    for(var i=0;i < $registroAsignaturas.length;i++){
        $("#matriculaCont").append(`
        <div class="col-4">
            <div class="tarjeta-point" id="${$registroAsignaturas[i].idDepartamento}" onclick="goBig(this.id)">
                <h5>${$registroAsignaturas[i].nombreDepartamento}</h5>
            </div>
        </div>
        `)
    }
    $("#matriculaCont").append(``)
}


function goBig(id){
    asignaturas = [];
    for(var i=0; i<$registroAsignaturas.length; i++){
        if ($registroAsignaturas[i].idDepartamento == id){
            asignaturas = $registroAsignaturas[i].asignaturas;
            break;
        }
    }
    asignaturaActiva = null;
    seccionActiva = null;
    departamentoActivo = id;
    console.log(asignaturas);
    console.log(departamentoActivo);
    $("#matriculaCont").html(`
        <div class="col-12">
            <span id="back">← seleccionar otro departamento<br></span>
            <div class="tarjeta row">
                <div class="col-6">
                    <b id="control">
                    
                    </b>
                </div>
                <div class="col-6">
                    <div id="secciones" class="tarjeta-expand">
                        <span class="nombreAsignaturaGray"><i>No se ha seleccionado una asignatura.</i></span>
                    </div
                </div>
            </div>
            <div class="divAdicionar">
                <button type="button" id="btnAdicionar">Adicionar Asignatura</button>        <i><span id="adicionarDetalle"></span></i>
            </div>
        </div>
    `)
    $("#btnAdicionar").click(adicionarAsignaturaComplete);
    for(var i=0; i<asignaturas.length;i++){
        $("#control").append(`
        <span id="${asignaturas[i].codigo}" class="nombreAsignatura">${asignaturas[i].nombreAsignatura}</span><br>
        `)
    }
    $(".nombreAsignatura").click(function(){
        console.log(this.id);
        $(".nombreAsignatura").addClass("nombreAsignaturaGray");
        $("#"+this.id).removeClass("nombreAsignaturaGray");
        seccionActiva = null;
        $("#adicionarDetalle").html("");
        $.ajax({
            url: "php/fetchSecciones.php",
            data: "codigo="+this.id,
            dataType: "json",
            method: "POST",
            success: function(respuesta){
                console.log(respuesta);
                $("#secciones").html(``);
                for (var j = 0; j<respuesta.secciones.length; j++){
                    $("#secciones").append(`
                        <span class="elementoSeccion" id="${respuesta.secciones[j].codigoSeccion}"> seccion ${respuesta.secciones[j].codigoSeccion}, ${respuesta.secciones[j].hInicio}-${respuesta.secciones[j].hFinal} ; Prof.: ${respuesta.secciones[j].docente} </span><br>
                    `);
                }
                asignaturaActiva = respuesta.codigo;
                $(".elementoSeccion").click(function(){
                    adicionarAsignatura(this.id);
                });
            },
            error: function(err){
                console.error(err);                
            }
        });
    });

    $("#back").click(function(){
        displayDepartamentos($registroAsignaturas);
    })
}

function adicionarAsignatura(codigo){
    if (asignaturaActiva!=null){
        console.log("departamento: " + departamentoActivo + ", asignatura: " + asignaturaActiva + ", sección: " + codigo);
        seccionActiva = codigo;
        $("#adicionarDetalle").html(`Departamento: ${departamentoActivo}, código de asignatura: ${asignaturaActiva}, sección: ${seccionActiva}`);
    }else{
        console.error("Error al identificar la asignatura!");        
    }
}

function adicionarAsignaturaComplete(){
    console.log("departamentoActivo: "+departamentoActivo+", asignaturaActiva: "+asignaturaActiva+", seccionActiva: "+seccionActiva);
    if(asignaturaActiva != null && seccionActiva != null){
        console.log("válido");
        $("#adicionarDetalle").html("Enviando solicitud para adicionar asignatura...");
        $.ajax({
            url: "php/adicionarAsignatura.php",
            data: "departamento="+departamentoActivo+"&asignatura="+asignaturaActiva+"&seccion="+seccionActiva,            
            method: "post",
            success:function(){
                console.log("success!");
                $("#adicionarDetalle").html("Asignatura adicionada a prematrícula!");
                loadPrematricula();
            },
            error:function(err){
                console.error(err);            
                console.error("failure!");  
                $("#adicionarDetalle").html("Ocurrió un error al adicionar la asignatura...");  
            }
        });
    }else{
        console.error("inválido");
        $("#adicionarDetalle").html("Seleccione una sección para matricular.");
    }
}

$(document).ready(loadAsignaturas);
$(document).ready(loadPrematricula);