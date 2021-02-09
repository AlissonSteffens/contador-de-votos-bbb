
let contador_visitas = 0

if (!localStorage.PC_uses)
    localStorage.PC_uses = 1;
else
    localStorage.PC_uses = (parseInt(localStorage.PC_uses))+1;


function aumenta_contador_visitas(){
    contador_visitas++;
    badge();
    guardaEstatisticas();
}

function zera_contador_visitas(){
    contador_visitas = 0 ;
    badge();
    guardaEstatisticas();
}



chrome.extension.onRequest.addListener(function(request, sender, sendResponse)
{
    if (request.greeting == "soma"){
        aumenta_contador_visitas();
    }else if (request.greeting == "zerar"){
        zera_contador_visitas();
    }
    
});

function badge() {
    var texto = String(contador_visitas);
   
    chrome.browserAction.setBadgeText({text:texto});
    chrome.browserAction.setBadgeBackgroundColor({color:[0,0,255,255]});
}


//Event when de extension is loaded: whether it is chrome who start or the user who enables the extension
window.onload = function() {
    cargaEstadisticas();
    badge();
};



//Load the number of pages visited from the last time
function cargaEstadisticas()
{
    
    if (!localStorage.PC_visitas)   //Si no hay nada
    {
        contador_visitas = 0;
    }
    else  //There are data in localstorage
    {
        contador_visitas = JSON.parse(localStorage.PC_visitas);
    }
}


function guardaEstatisticas()
{
    localStorage.PC_visitas =  JSON.stringify( contador_visitas ) ;
}



//Event when extension closes.
window.onunload =
    function () {
    guardaEstatisticas();

};

// chrome.browserAction.setBadgeText({text: "10+"})
// let contador = 0
// alert('oi')
// document.addEventListener('DOMContentLoaded', function() {
//     var link = document.getElementsByClassName('_2FQp0pTz1KSUdFKaO754EC T_YgdT6l_inPxOca5wBtJ')
    
//     if(link.length > 0){
//         link = link[0];
//         link.addEventListener('click', function() {
//             contador += 1
//             alert(hey)
//         });
//     }
    
// });