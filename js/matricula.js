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
                        //console.log("found");
                        arr = respuesta.secciones[y];
                        //console.log("arr: "+arr.secciones.length);
                        for(var x=0;x<arr.secciones.length;x++){
                            if(arr.secciones[x].codigoSeccion == respuesta.prematricula[t].seccion){
                                //console.log("trueFound: "+arr.secciones[x].codigoSeccion+", "+respuesta.prematricula[t].seccion);
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
                //console.log("arr2.length"+arr2.length)                
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
function loadPrematriculaLab(){
    $("#listaLaboratoriosPrematriculados").html("Recuperando lista de prematricula...");
    $.ajax({
        url: "php/fetchPrematriculaLab.php",
        dataType: "json",
        success:function(respuesta){
            console.log(respuesta);
            if(respuesta.length == 0){
                $("#listaLaboratoriosPrematriculados").html("No se ha matriculado ningun laboratorio");
            }else{
                $("#listaLaboratoriosPrematriculados").html("");
            
                for(var v = 0; v<respuesta.length;v++){
                    $("#listaLaboratoriosPrematriculados").append(`
                        ${respuesta[v].nombre} - ${respuesta[v].seccion} - ${respuesta[v].hora}<br><hr class="h303">
                    `);
                }
            }
        },
        error:function(err){
            console.error(err);            
        }
    });
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
$(document).ready(loadPrematriculaLab);