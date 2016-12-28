$(document).ready(function () {
    detetaImg();
    desenharMapa();
    carregaElementos();
});

/* Variaveis Globais */
var canvas = $('#canvas');
var linhaInicial = 14,colunaInicial = 4,alturaTiles = 48,char,velocidadeChar = 10,baixo=1,cima=1,esquerda=1,direita=1,parado=1,myint,tempo=0,myint2;


var arrayMapa = [
    [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
    [40, 40, 40, 40, 60, 40, 40, 40, 40, 40, 40, 80, 40, 40, 100, 40, 40, 40, 40, 40, 40, 40, 40],
    [40, 40, 40, 40, 40, 40, 40, 40, 40, 71, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
    [40, 40, 69, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 69, 40, 40, 40, 40, 40, 40, 40, 80, 40],
    [40, 64, 65, 65, 66, 40, 40, 40, 40, 40, 40, 40, 40, 40, 61, 62, 62, 62, 62, 62, 62, 62, 62],
    [40, 104, 51, 52, 106, 40, 40, 40, 40, 70, 40, 40, 40, 40, 81, 20, 20, 20, 20, 20, 20, 20, 20],
    [40, 40, 40, 40, 40, 40, 40, 40, 42, 42, 42, 42, 42, 42, 67, 20, 20, 20, 20, 20, 20, 20, 20],
    [40, 40, 40, 40, 40, 42, 42, 43, 0, 0, 0, 0, 0, 0, 87, 88, 89, 20, 20, 20, 20, 20, 20],
    [40, 80, 40, 40, 23, 0, 0, 0, 0, 1, 2, 2, 2, 2, 107, 20, 20, 20, 20, 20, 20, 20, 20],
    [42, 42, 42, 42, 43, 0, 1, 2, 2, 40, 64, 65, 66, 40, 81, 20, 20, 20, 20, 20, 20, 20, 20],
    [0, 0, 0, 0, 0, 0, 0, 41, 42, 9, 84, 50, 86, 40, 81, 20, 20, 20, 20, 20, 20, 20, 20],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 104, 52, 106, 70, 81, 20, 20, 20, 20, 20, 20, 20, 20],
    [0, 0, 0, 0, 0, 0, 0, 0, 7, 48, 48, 48, 48, 48, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [0, 0, 0, 0, 0, 0, 0, 0, 29, 41, 9, 69, 71, 32, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 21, 40, 40, 40, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

function detetaImg() {
    var larguraTile = 20;
    var alturaTile = 7;
    var altura = 48;

    for (var i = 0; i <= (larguraTile * alturaTile) - 1; i++) {
        $('#tileMap').append("<div class='absolute' id='" + i + "'>" + i + "</div>");
        var id = $('#' + i);

        if (i > 0 && i < 20) {
            id.css('margin-top', 0);
            id.css('margin-left', i * 48 + "px");
        }
        if (i >= 20 && i < 40) {
            id.css('margin-top', altura + "px");
            id.css('margin-left', (i - 20) * 48 + "px");
        }
        if (i >= 40 && i < 60) {
            id.css('margin-top', altura * 2 + "px");
            id.css('margin-left', (i - 40) * 48 + "px");
        }
        if (i >= 60 && i < 80) {
            id.css('margin-top', altura * 3 + "px");
            id.css('margin-left', (i - 60) * 48 + "px");
        }
        if (i >= 80 && i < 100) {
            id.css('margin-top', altura * 4 + "px");
            id.css('margin-left', (i - 80) * 48 + "px");
        }
        if (i >= 100 && i < 120) {
            id.css('margin-top', altura * 5 + "px");
            id.css('margin-left', (i - 100) * 48 + "px");
        }
        if (i >= 120 && i < 140) {
            id.css('margin-top', altura * 6 + "px");
            id.css('margin-left', (i - 120) * 48 + "px");
        }
    }

}

function desenharMapa() {
    var tileNumber = 0;
    for (var l = 0; l < arrayMapa.length; l++) {
        for (var c = 0; c < arrayMapa[l].length; c++) {


            tileNumber++;

            var idTileMap = $('#' + arrayMapa[l][c]);

            var posX = parseInt(idTileMap.css('margin-left'));
            var posY = parseInt(idTileMap.css('margin-top'));
            canvas.append("<div id='tile" + tileNumber + "'></div>");
            var tileId = $('#tile' + tileNumber);

            tileId.css('margin-top', l * 48 + "px");
            tileId.css('margin-left', c * 48 + "px");

            tileId.css('height', '48px');
            tileId.css('width', '48px');
            tileId.css('background-image', 'url("img/mapa.png")');
            tileId.css('background-position', (-posX) + "px " + (-posY) + "px");
            tileId.css('position', 'absolute');
        }
    }
}


/* PERSONAGEM MOVIMENTO E SPRITES */

function carregaElementos() {

    canvas.append("<div id='personagem'></div>");
    char = $('#personagem');

    char.css('margin-top', linhaInicial * alturaTiles - alturaTiles + "px");
    char.css('margin-left', (colunaInicial * 48) + "px");
    char.css('background-image', 'url("img/personagem.png")');
    char.css('background-position',"-8px -7px");
    cameraInicio();
    myint = setInterval(function () {
        movimentoparado();},150);
}

function cameraInicio() {
    canvas.css('margin-top', -(6 * alturaTiles ) + "px");
    canvas.css('margin-left',"0px");
    console.log(canvas.css('margin-top'));
}

$(document).keypress(function (e) {
    var key = e.key || e.which;
    clearInterval(myint2);
    switch (key) {
        case "w":
        case "W":
            clearInterval(myint);
            console.log("cima");
            atualizaCamera("cima",-velocidadeChar);
            movimentaPersonagem(0, -velocidadeChar);
            sprite("cima");
            break;
        case "s":
        case "S":
            clearInterval(myint);
            console.log("baixo");
            atualizaCamera("baixo",velocidadeChar);
            movimentaPersonagem(0, velocidadeChar);
            sprite("baixo");
            break;
        case "a":
        case "A":
            clearInterval(myint);
            console.log("esquerda");
            atualizaCamera("esquerda",-velocidadeChar);
            movimentaPersonagem(-velocidadeChar, 0);
            sprite("esquerda");
            break;
        case "d":
        case "D":
            clearInterval(myint);
            console.log("direita");
            atualizaCamera("direita",velocidadeChar);
            movimentaPersonagem(velocidadeChar, 0);
            sprite("direita");
            break;
    }
    tempo=0;
    myint2 =  setInterval(function () {
        meutimer();
    },1000);
});

function movimentaPersonagem(left, top) {

    var charPosX = parseFloat(char.css('margin-left'));
    var charPosY = parseFloat(char.css('margin-top'));

    if(charPosX + left <=1052 && charPosX + left >=0){
        char.css('margin-left', left + charPosX + "px");}
    if(charPosY + top <=664 && charPosY + top >=0){
        char.css('margin-top', top + charPosY + "px");}
}

/* MAPA MOVIMENTO*/
function atualizaCamera(orientacao,velocidade){
    console.log("atualizaCamera");
    var canvasTop = parseFloat(canvas.css('margin-top'));
    var canvasLeft = parseFloat(canvas.css('margin-left'));
    var charPosX = parseFloat(char.css('margin-left'));
    var charPosY = parseFloat(char.css('margin-top'));

    switch (orientacao){
        case "cima":
            if(canvasTop<-8 && charPosY <624){
                canvas.css('margin-top',canvasTop-velocidade+"px");}
            break;
        case "baixo":
            if(canvasTop>-278 && charPosY>344){
                canvas.css('margin-top',canvasTop-velocidade+"px");}
            break;
        case "esquerda":
            if(canvasLeft<0 && charPosX<462){
                canvas.css('margin-left',canvasLeft-velocidade+"px");}
            break;
        case "direita":
            if(canvasLeft>-270 && charPosX>192){
                canvas.css('margin-left',canvasLeft-velocidade+"px");}
            break;
    }
}
function sprite(x) {
    var personagem = $('#personagem');
    if(x=="baixo"){
        direita=1;cima=1;esquerda=1;
        if(baixo==1){
            personagem.css('background-position',"-8px -55px");
            baixo=0;
        }else{
            personagem.css('background-position',"-56px -55px");
            baixo++;
        }
    }
    if(x=="cima"){
        baixo=1;direita=1;esquerda=1;
        if(cima==1){
            personagem.css('background-position',"-104px -56px");
            cima=0;
        }else{
            personagem.css('background-position',"-152px -55px");
            cima++;
        }
    }
    if(x=="esquerda"){
        baixo=1;cima=1;direita=1;
        switch (esquerda){
            case 1:
                personagem.css('background-position',"-9px -152px");
                esquerda++;
                break;
            case 2:
                personagem.css('background-position',"-57px -152px");
                esquerda++;
                break;
            case 3:
                personagem.css('background-position',"-105px -150px");
                esquerda++;
                break;
            case 4:
                personagem.css('background-position',"-153px -149px");
                esquerda++;
                break;
            case 5:
                personagem.css('background-position',"-201px -151px");
                esquerda=1;
                break;
        }

    }
    if(x=="direita"){
        baixo=1;cima=1;esquerda=1;
        switch (direita){
            case 1:
                personagem.css('background-position',"-11px -104px");
                direita++;
                break;
            case 2:
                personagem.css('background-position',"-59px -104px");
                direita++;
                break;
            case 3:
                personagem.css('background-position',"-107px -102px");
                direita++;
                break;
            case 4:
                personagem.css('background-position',"-155px -101px");
                direita++;
                break;
            case 5:
                personagem.css('background-position',"-203px -103px");
                direita=1;
                break;
        }
    }
}
function movimentoparado() {
    var personagem = $('#personagem');
    switch (parado){
        case 1:
            personagem.css('background-position',"-8px -7px");
            parado++;
            break;
        case 2:
            personagem.css('background-position',"-56px -7px");
            parado++;
            break;
        case 3:
            personagem.css('background-position',"-104px -8px");
            parado++;
            break;
        case 4:
            personagem.css('background-position',"-152px -7px");
            parado=1;
            break;
    }
}

function meutimer() {
    tempo=tempo+1;
    if(tempo==1){
        myint = setInterval(function () {
            movimentoparado();},150);
    }

}