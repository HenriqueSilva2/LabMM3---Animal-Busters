$(document).ready(function () {
    detetaImg();
    desenharMapa();

});


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

function desenharMapa() {
var tileNumber = 0;
    for (l = 0; l < arrayMapa.length; l++) {

        for (c = 0; c < arrayMapa[l].length; c++) {

            var canvas = $('#canvas');
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
            tileId.css('position','absolute');

        }
    }
}


function detetaImg() {
    var larguraTile = 20;
    var alturaTile = 7;
    var altura = 48;


    for (i = 0; i <= (larguraTile * alturaTile) - 1; i++) {
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


