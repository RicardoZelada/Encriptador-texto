/* Obtengo los elementos */
const btn_encriptar = document.querySelector(".btn-encriptar");
const btn_desebcriptar = document.querySelector(".btn-desencriptar");
const div_img = document.querySelector(".div-encriptador");
const div_txt = document.querySelector(".contenedor-p");
const div_result_txt = document.querySelector(".result-text");
const text = document.querySelector(".caja-txt").value;

console.log(text);

function encriptarTXT (message){
    var txt = message;
    var finaltxt = "";

    for(var i = 0; i < txt.length; i++){
        if(txt[i] == "a"){
            finaltxt = finaltxt + "ai"
        }
        else if(txt[i] == "e"){
            finaltxt = finaltxt + "enter"
        }
        else if(txt[i] == "i"){
            finaltxt = finaltxt + "imes"
        }
        else if(txt[i] == "o"){
            finaltxt = finaltxt + "ober"
        }
        else if(txt[i] == "u"){
            finaltxt = finaltxt + "ufat"
        }
        else{
            finaltxt = finaltxt + txt[i];
        }
    }
    return finaltxt;
}

/* Function para ocultar img y texto del contenedor-p */
function ocultarIMG (){
    div_img.classList.add("remove");
    div_txt.classList.add("remove");
}

/* Function para que llama a Function encriptarTXT */
function encriptadoFinal(){
    ocultarIMG();
    let div_texto = text;
    div_result_txt.textContent = encriptarTXT(div_texto);
}

/*function traerTXT(){
    var text = document.querySelector(".caja-txt");
    return text.value;
}*/

function desencriptarTXT(message){
    var txt = message;
    var finaltxt = "";

    for(var i = 0; i < txt.length; i++){
        if(txt[i] == "a"){
            finaltxt = finaltxt + "a"
            i = i+1;
        }
        else if(txt[i] == "e"){
            finaltxt = finaltxt + "e"
            i = i+4;
        }
        else if(txt[i] == "i"){
            finaltxt = finaltxt + "i"
            i = i+3;
        }
        else if(txt[i] == "o"){
            finaltxt = finaltxt + "o"
            i = i+3;
        }
        else if(txt[i] == "u"){
            finaltxt = finaltxt + "u"
            i = i+3;
        }
        else{
            finaltxt = finaltxt + txt[i];
        }
    } return finaltxt;
}

function desencriptadoFinal(){
    ocultarIMG();
    let div_texto = text;
    div_result_txt.textContent = desencriptarTXT(div_texto);
}

const btn_Copy = document.querySelector(".btn-copy");
    btn_Copy.addEventListener(".click", copiartxt = () =>{

    let contenido = document.querySelector(".result-text").textContent;
    navigator.clipboard.writeText(contenido);    
});