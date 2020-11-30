let seuVotoPara = document.querySelector('.d1_1 span');
let cargo = document.querySelector('.d1_2 span');
let descricao = document.querySelector('.d1_4')
let aviso = document.querySelector('.d2')
let lateral = document.querySelector('.d1_right')
let numeros = document.querySelector('.d1_3')

let etapaAtual = 0;

function comecarEtapa(){
    let etapa = etapas[etapaAtual]
    let numeroHtml = '';

    seuVotoPara.style.display = "none";
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml
}

function clicou(n){

}

function branco(){

}

function corrige(){

}

function confirma(){

}

comecarEtapa()