var dets=[
    {
        innerSmall:"<h5>Matemática</h5>",
        innerBig:`<b style="pointer-events: none">MM-110 Pre-cálculo<br>
            MM-111 Geometría y Trigonometría<br>
            MM-314 Programación I<br>
            MM-201 Cálculo I<br>
            MM-202 Cálculo II<br>
            MM-211 Vectores y Matrices<br>
            mm-411 Ecuaciones Diferenciales
            <b>`,
        innerDetail:`
        
            `
    },
    {
        innerSmall:"<h5>Ingeniaria en sistemas</h5>",
        innerBig:`<b>IS-110 Introducción a la Ingeniería en Sistemas<br>
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
        innerBig:`pasdpads
        
            `,
        innerDetail:`
        
            `
    }
]



function goBig(id){
    document.getElementById(id).innerHTML=dets[id].innerBig;
    document.getElementById(id).setAttribute("onmouseout","goBack(this.id)");
    document.getElementById(id).removeAttribute("onclick","undefined");
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
}