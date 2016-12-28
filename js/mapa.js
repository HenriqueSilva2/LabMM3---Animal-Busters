$(document).ready(function () {
    detetaImg();
    desenharMapa();
    carregaElementos();
});

/* Variaveis Globais */
var canvas = $('#canvas');
var linhaInicial = 14, rightAllow=0, leftAllow=0,topAllow=0,botAllow=0, colunaInicial = 4, alturaTiles = 48, char, velocidadeChar = 10, baixo = 1, cima = 1, esquerda = 1, direita = 1, parado = 1, myint, tempo = 0, myint2;


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
    char.css('background-position', "-8px -7px");
    cameraInicio();
    myint = setInterval(function () {
        movimentoparado();
    }, 150);
}

function cameraInicio() {
    canvas.css('margin-top', -(6 * alturaTiles ) + "px");
    canvas.css('margin-left', "0px");

}

$(document).keypress(function (e) {

    var key = e.key || e.which;
    clearInterval(myint2);

    switch (key) {
        case "w":
        case "W":
            clearInterval(myint);
            detetarcolisao("cima",0, -velocidadeChar);
            rightAllow=0;
            botAllow=0;
            leftAllow=0;
            if(topAllow==0){
                atualizaCamera("cima", -velocidadeChar);
                movimentaPersonagem(0, -velocidadeChar);
                sprite("cima", 0, -velocidadeChar);
            }
            break;
        case "s":
        case "S":
            clearInterval(myint);
            rightAllow=0;
            detetarcolisao("baixo",0,velocidadeChar);
            rightAllow=0;
            topAllow=0;
            leftAllow=0;
            if(botAllow==0){
            atualizaCamera("baixo", velocidadeChar);
            movimentaPersonagem(0, velocidadeChar);
            sprite("baixo", 0, velocidadeChar);}
            break;
        case "a":
        case "A":
            detetarcolisao("esquerda",-velocidadeChar, 0);
            clearInterval(myint);
            rightAllow=0;
            topAllow=0;
            botAllow=0;
            if(leftAllow==0){
                atualizaCamera("esquerda", -velocidadeChar);
                movimentaPersonagem(-velocidadeChar, 0);
                sprite("esquerda", -velocidadeChar, 0);
            }

            break;
        case "d":
        case "D":
            detetarcolisao("direita",velocidadeChar, 0);
            clearInterval(myint);
            leftAllow=0;
            topAllow=0;
            botAllow=0;
            if(rightAllow==0) {
            atualizaCamera("direita", velocidadeChar);
            movimentaPersonagem(velocidadeChar, 0);
            sprite("direita", velocidadeChar, 0);
            }
            break;
    }
    tempo = 0;
    myint2 = setInterval(function () {
        meutimer();
    }, 1000);
});

function movimentaPersonagem(left, top) {

    var charPosX = parseFloat(char.css('margin-left'));
    var charPosY = parseFloat(char.css('margin-top'));

    if (charPosX + left <= 1052 && charPosX + left >= 0) {
        char.css('margin-left', left + charPosX + "px");
    }
    if (charPosY + top <= 674 && charPosY + top >= 0) {
        char.css('margin-top', top + charPosY + "px");
    }
}

/* MAPA MOVIMENTO*/
function atualizaCamera(orientacao, velocidade) {

    var canvasTop = parseFloat(canvas.css('margin-top'));
    var canvasLeft = parseFloat(canvas.css('margin-left'));
    var charPosX = parseFloat(char.css('margin-left'));
    var charPosY = parseFloat(char.css('margin-top'));

    switch (orientacao) {
        case "cima":
            if (canvasTop < -8 && charPosY < 624) {
                canvas.css('margin-top', canvasTop - velocidade + "px");
            }
            break;
        case "baixo":
            if (canvasTop > -278 && charPosY > 344) {
                canvas.css('margin-top', canvasTop - velocidade + "px");
            }
            break;
        case "esquerda":
            if (canvasLeft < 0 && charPosX < 462) {
                canvas.css('margin-left', canvasLeft - velocidade + "px");
            }
            break;
        case "direita":
            if (canvasLeft > -270 && charPosX > 192) {
                canvas.css('margin-left', canvasLeft - velocidade + "px");
            }
            break;
    }
}
function sprite(x, left, top) {
    var charPosX = parseFloat(char.css('margin-left'));
    var charPosY = parseFloat(char.css('margin-top'));
    var personagem = $('#personagem');

    if (charPosY + top <= 664) {
        if (x == "baixo") {
            direita = 1;
            cima = 1;
            esquerda = 1;
            if (baixo == 1) {
                personagem.css('background-position', "-8px -55px");
                baixo = 0;
            } else {
                personagem.css('background-position', "-56px -55px");
                baixo++;
            }
        }
    }

    if (charPosY + top >= 0) {
        if (x == "cima") {
            baixo = 1;
            direita = 1;
            esquerda = 1;
            if (cima == 1) {
                personagem.css('background-position', "-104px -56px");
                cima = 0;
            } else {
                personagem.css('background-position', "-152px -55px");
                cima++;
            }
        }
    }

    if (charPosX + left >= 0) {

        if (x == "esquerda") {
            baixo = 1;
            cima = 1;
            direita = 1;
            switch (esquerda) {
                case 1:
                    personagem.css('background-position', "-9px -152px");
                    esquerda++;
                    break;
                case 2:
                    personagem.css('background-position', "-57px -152px");
                    esquerda++;
                    break;
                case 3:
                    personagem.css('background-position', "-105px -150px");
                    esquerda++;
                    break;
                case 4:
                    personagem.css('background-position', "-153px -149px");
                    esquerda++;
                    break;
                case 5:
                    personagem.css('background-position', "-201px -151px");
                    esquerda = 1;
                    break;
            }

        }
    }
    if (charPosX + left <= 1052) {
        if (x == "direita") {
            baixo = 1;
            cima = 1;
            esquerda = 1;
            switch (direita) {
                case 1:
                    personagem.css('background-position', "-11px -104px");
                    direita++;
                    break;
                case 2:
                    personagem.css('background-position', "-59px -104px");
                    direita++;
                    break;
                case 3:
                    personagem.css('background-position', "-107px -102px");
                    direita++;
                    break;
                case 4:
                    personagem.css('background-position', "-155px -101px");
                    direita++;
                    break;
                case 5:
                    personagem.css('background-position', "-203px -103px");
                    direita = 1;
                    break;
            }
        }
    }
}
function movimentoparado() {

    var personagem = $('#personagem');
    switch (parado) {
        case 1:
            personagem.css('background-position', "-8px -7px");
            parado++;
            break;
        case 2:
            personagem.css('background-position', "-56px -7px");
            parado++;
            break;
        case 3:
            personagem.css('background-position', "-104px -8px");
            parado++;
            break;
        case 4:
            personagem.css('background-position', "-152px -7px");
            parado = 1;
            break;
    }
}

function meutimer() {
    tempo = tempo + 1;
    if (tempo == 1) {
        myint = setInterval(function () {
            movimentoparado();
        }, 150);
    }

}
function detetarcolisao(orientador,left, top) {

    //caracteristicas objeto1 (personagem)
    var obj1X = parseFloat(char.css('margin-left'));
    var obj1Y = parseFloat(char.css('margin-top'));
    var obj1Largura = parseInt(char.css('width'));
    var obj1Altura = parseInt(char.css('height'));

    //encontrar objeto2 (cada um dos tiles que nao pode colidir)
    var tileNumber = 0;
    for (var l = 0; l < arrayMapa.length; l++) {
        for (var c = 0; c < arrayMapa[l].length; c++) {
            tileNumber++;
            var tileId = $('#tile' + tileNumber);
            //7 29 48 51 52 60 61 62 67 80 81 107

            if(arrayMapa[l][c]==7 ||arrayMapa[l][c]==20||arrayMapa[l][c]==29 ||arrayMapa[l][c]==48 ||arrayMapa[l][c]==51 ||arrayMapa[l][c]==52 ||arrayMapa[l][c]==60 ||arrayMapa[l][c]==61 ||arrayMapa[l][c]==62 ||arrayMapa[l][c]==67 ||arrayMapa[l][c]==80 ||arrayMapa[l][c]==81 ||arrayMapa[l][c]==107){
                var obj2X = parseFloat(tileId.css('margin-left'));
                var obj2Y = parseFloat(tileId.css('margin-top'));
                var obj2Largura = parseInt(tileId.css('width'));
                var obj2Altura = parseInt(tileId.css('height'));

                //colisão no eixo dos XX
                if (obj1X + left < obj2X + obj2Largura && obj1X + obj1Largura + left > obj2X) {
                    //colisão no eixo dos YY
                    if (obj1Y +top < obj2Y + obj2Altura && obj1Y + top  + obj1Altura > obj2Y) {

                        if(orientador == "direita"){
                            rightAllow=1;
                        }
                        if(orientador == "esquerda"){
                            leftAllow=1;
                        }
                        if(orientador=="cima"){
                            topAllow=1;
                        }
                        if(orientador=="baixo"){
                            botAllow=1;
                        }

                    }

                }

            }



        }
    }







}




