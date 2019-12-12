'use strict'
var gMemes, gNextId = 1, gElGallery, gElEditor, gCurrMeme, gCurrElMeme, gElCanvas, gCtx;

function createMemes() {
    gMemes = [];
    gMemes.push(createMeme('imgs/1.jpg'));
    gMemes.push(createMeme('imgs/2.jpg'));
    gMemes.push(createMeme('imgs/3.jpg'));
    gMemes.push(createMeme('imgs/4.jpg'));
    gMemes.push(createMeme('imgs/5.jpg'));
    gMemes.push(createMeme('imgs/6.jpg'));
    gMemes.push(createMeme('imgs/7.jpg'));
    gMemes.push(createMeme('imgs/8.jpg'));
    gMemes.push(createMeme('imgs/9.jpg'));
    gMemes.push(createMeme('imgs/10.jpg'));
    gMemes.push(createMeme('imgs/11.jpg'));
    gMemes.push(createMeme('imgs/12.jpg'));
    gMemes.push(createMeme('imgs/13.jpg'));
    gMemes.push(createMeme('imgs/14.jpg'));
    gMemes.push(createMeme('imgs/15.jpg'));
    gMemes.push(createMeme('imgs/16.jpg'));
    gMemes.push(createMeme('imgs/17.jpg'));
    gMemes.push(createMeme('imgs/18.jpg'));
    gMemes.push(createMeme('imgs/19.jpg'));
    gMemes.push(createMeme('imgs/20.jpg'));
    gMemes.push(createMeme('imgs/21.jpg'));
    gMemes.push(createMeme('imgs/22.jpg'));
    gMemes.push(createMeme('imgs/23.jpg'));
    gMemes.push(createMeme('imgs/24.jpg'));
    gMemes.push(createMeme('imgs/24.jpg'));
    gMemes.push(createMeme('imgs/24.jpg'));
    gMemes.push(createMeme('imgs/24.jpg'));
    gMemes.push(createMeme('imgs/24.jpg'));
    gMemes.push(createMeme('imgs/24.jpg'));
    gMemes.push(createMeme('imgs/24.jpg'));
}

function createMeme(imgURL) {
    var meme = {
        imgURL: imgURL,
        topTxt: 'Click here to edit',
        botTxt: 'Click here to edit',
        happy: 1,
        sad: 1,
        funny: 1,
        selectedTxt: 0,
        numOfLines: 2,
        id: gNextId++,
        txt: [
            {
                line: 'CLICK HERE TO EDIT',
                fontSize: 35,
                locationY: 90,
                locationX: 0,
                txtAlign: 'left',
                txtColor: 'white',
                txtFont: 'impact',
                isStroke: true

            },
            {
                line: 'CLICK HERE TO EDIT HEHEHEHEHEE',
                fontSize: 35,
                locationY: 450,
                locationX: 0,
                txtAlign: 'left',
                txtColor: 'white',
                txtFont: 'impact',
                isStroke: true
            }
        ]
    };

    return meme;
}

function getMemeById(memeId) {
    var meme = gMemes.find(function (meme) {
        return meme.id === memeId;
    });
    return meme;
}


function setCurrMeme(elImg, memeId) {
    gCurrMeme = getMemeById(memeId);
    gCurrElMeme = elImg;
}

function clearLine() {
    gCurrMeme.txt[gCurrMeme.selectedTxt].line = '';
}

function addLine() {
    gCurrMeme.txt.push({
        line: 'LOREM IPSUM DOLOR SIT AMET',
        fontSize: 35,
        locationY: 250,
        locationX: 0,
        txtAlign: 'left',
        txtColor: 'white',
        txtFont: 'impact',
        isStroke: true
    });
    gCurrMeme.numOfLines++;
}

function removeLine() {
    gCurrMeme.txt.slice();
    gCurrMeme.numOfLines--;
}




function setStroke() {
    gCurrMeme.txt[gCurrMeme.selectedTxt].isStroke = !gCurrMeme.txt[gCurrMeme.selectedTxt].isStroke;
}

function setTxtLineUp() {
    gCurrMeme.txt[gCurrMeme.selectedTxt].locationY--;
}

function setTxtLineDown() {
    gCurrMeme.txt[gCurrMeme.selectedTxt].locationY++;
}

function setTxt(txt) {
    gCurrMeme.txt[gCurrMeme.selectedTxt].line = txt;
}

function setLine() {
    if (gCurrMeme.selectedTxt + 1 === gCurrMeme.numOfLines) gCurrMeme.selectedTxt = 0;
    else gCurrMeme.selectedTxt++;

}

function setTxtColor(color) {
    gCurrMeme.txt[gCurrMeme.selectedTxt].txtColor = color;
}

function setFont(font) {
    gCurrMeme.txt[gCurrMeme.selectedTxt].txtFont = font;
}

function setTxtAlignLeft() {
    gCurrMeme.txt[gCurrMeme.selectedTxt].locationX = 0;
}

function setTxtAlignCenter() {
    gCurrMeme.txt[gCurrMeme.selectedTxt].locationX = 350;
}

function setTxtAlignRight() {
    gCurrMeme.txt[gCurrMeme.selectedTxt].locationX = 600;
}

function increaseFontSize() {
    gCurrMeme.txt[gCurrMeme.selectedTxt].fontSize++;
}

function decreaseFontSize() {
    gCurrMeme.txt[gCurrMeme.selectedTxt].fontSize--;
}

function getCanvasWidth() {
    return gElCanvas.width;
}

function getCanvasHeight() {
    return gElCanvas.height;
}

function getCurrMemeImg() {
    return gCurrElMeme;
}





