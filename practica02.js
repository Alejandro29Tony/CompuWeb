// function CambiarEstiloCSS() { //Crear función
//     document.body.style.background = "#0D0D0D";//Cambiar color de fondo
//     document.getElementById("fondoHeader").style.background = "#272B73";
//     document.getElementById("fondoNav").style.background = "#1D2C59";
//     document.getElementById("fondoFooter").style.background = "#272B73";
//     document.getElementById("btnModo").style.background = "#1D2C59";

//     var elementosFeature = document.getElementsByClassName("feature");
//     for (var i = 0; i < elementosFeature.length; i++) {
//         elementosFeature[i].style.background = "#142240";
//     }

//     var elementosP = document.getElementsByClassName("parrafo");
//     for (var i = 0; i < elementosP.length; i++) {
//         elementosP[i].style.color = "#F2F2F2";
//     }
// }





function CambiarEstiloCSS() {
    // Obtener elementos
   
    const menu = document.getElementById("fondoNav");
    const pie = document.getElementById("fondoFooter");
    const btn=document.getElementById("btnModo");
    const S01=document.getElementById("s01");
    const S02=document.getElementById("s02");
        const encabezado = document.getElementById("fondoHeader");
        const body = document.body;
    // Asignar estilos del modo oscuro
    body.classList.toggle('dark-mode');





    encabezado.classList.toggle('dark-mode');



    menu.classList.toggle('dark-mode');
    pie.classList.toggle('dark-mode');
    S01.classList.toggle('dark-mode');
    S02.classList.toggle('dark-mode');
    btn.classList.toggle('dark-mode');

    // Verificar el estado actual y cambiar el texto del botón
    const modoOscuroActivo = body.classList.contains('dark-mode');
    btn.innerHTML = modoOscuroActivo ? "Día" : "Noche";
}