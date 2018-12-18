var $registroAsignaturas = null;
var asignaturaActiva = null;
var seccionActiva = null;
var departamentoActivo = null;
var temparr = null;

function loadAsignaturas(){
    $("#matriculaCont").html(`<span class="nombreBlack"><i>Recuperando lista de departamentos...</i></span>`)
    $.ajax({
        url:"php/fetchLabs.php",
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
    labs = [];
    for(var i=0; i<$registroAsignaturas.length; i++){
        if ($registroAsignaturas[i].idDepartamento == id){
            labs = $registroAsignaturas[i].labs;
            break;
        }
    }
    asignaturaActiva = null;
    seccionActiva = null;
    departamentoActivo = id;
    console.log(labs);
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
                <button type="button" id="btnAdicionar">Adicionar Laboratorio</button>        <i><span id="adicionarDetalle"></span></i>
            </div>
        </div>
    `)
    $("#btnAdicionar").click(adicionarLabComplete); 
    for(var i=0; i<labs.length;i++){
        $("#control").append(`
        <span id="${labs[i].codigo}" class="nombreAsignatura">${labs[i].nombreLab}</span><br>
        `)
    }
    $(".nombreAsignatura").click(function(){
        console.log(this.id);
        $(".nombreAsignatura").addClass("nombreAsignaturaGray");
        $("#"+this.id).removeClass("nombreAsignaturaGray");
        seccionActiva = null;
        $("#adicionarDetalle").html("");
        $.ajax({
            url: "php/fetchSeccionesLab.php",
            data: "codigo="+this.id,
            dataType: "json",
            method: "POST",
            success: function(respuesta){
                console.log(respuesta);
                $("#secciones").html(``);
                for (var j = 0; j<respuesta.secciones.length; j++){
                    $("#secciones").append(`
                        <span class="elementoSeccion" id="${respuesta.secciones[j].codigoSeccion}"> seccion ${respuesta.secciones[j].codigoSeccion}, ${respuesta.secciones[j].hInicio}-${respuesta.secciones[j].hFinal} ; Prof.: ${respuesta.secciones[j].instructor} </span><br>
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

function adicionarLabComplete(){
    console.log("departamentoActivo: "+departamentoActivo+", asignaturaActiva: "+asignaturaActiva+", seccionActiva: "+seccionActiva);
    if(asignaturaActiva != null && seccionActiva != null){
        console.log("válido");
        checkPrematricula(asignaturaActiva);
    }else{
        console.error("inválido");
        $("#adicionarDetalle").html("Seleccione una sección para matricular.");
    }
}

function checkPrematricula(codigoLab){
    //$("#listaAsignaturasPrematriculadas").html("Recuperando lista de prematricula...");
    //$("#listaLaboratoriosPrematriculados").html("Recuperando lista de prematricula...");
    $.ajax({
        url:"php/fetchPrematricula.php",
        dataType:"json",
        success: function(respuesta){
            console.log(respuesta);
            var cont = null;
            var arr = Array();
            var arr2 = Array();
            //$("#listaAsignaturasPrematriculadas").html("");
            var found = false;
            for(var z = 0; z<$registroAsignaturas.length;z++){
                console.log("revisando registros: "+$registroAsignaturas[z]);
                console.log("codigoLab: "+ codigoLab)
                if (departamentoActivo == $registroAsignaturas[z].idDepartamento){
                    console.log("registroe encontrado en idDepartamento: "+$registroAsignaturas[z].idDepartamento);
                    for(var n = 0; n<$registroAsignaturas[z].labs.length; n++){
                        console.log("   revisando registro labs de "+$registroAsignaturas[z].labs[n].codigo);
                        if($registroAsignaturas[z].labs[n].codigo == codigoLab){
                            console.log("encontrado en codigo "+$registroAsignaturas[z].labs[n].codigo+" en indice "+n);
                            temparr = $registroAsignaturas[z].labs[n];
                            break;
                        }
                    }
                    break;
                }
            }
            console.log("temparr: "+temparr.codigo+", "+temparr.nombreLab);
            temparr["test"] = 5;
            console.log("test: "+temparr["test"])

            if(respuesta.prematricula.length == 0){
                found = false;
                //$("#listaAsignaturasPrematriculadas").html("No se ha prematriculado ninguna asignatura.")
            }else{
                for(var t=0;t<respuesta.prematricula.length;t++){

                    if (respuesta.prematricula[t].asignatura == codigoLab){
                        found = true;
                        break;
                    }
                    
                }
            }
            console.log("found: "+found);

            if(found){
                
                

                /*$("#adicionarDetalle").html("Enviando solicitud para adicionar asignatura...");
                $.ajax({
                    url: "php/adicionarLab.php",
                    data: "departamento="+departamentoActivo+"&asignatura="+asignaturaActiva+"&seccion="+seccionActiva,            
                    method: "post",
                    success:function(){
                        console.log("success!");
                        $("#adicionarDetalle").html("Laboratorio adicionado a prematrícula!");
                        
                    },
                    error:function(err){
                        console.error(err);            
                        console.error("failure!");  
                        $("#adicionarDetalle").html("Ocurrió un error al adicionar el laboratorio...");  
                    }
                });*/
            }
        },
        error: function(err){
            console.error(err);            
        }
    })
}

$(document).ready(loadAsignaturas);