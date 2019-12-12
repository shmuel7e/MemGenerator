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
        id: gNextId++,
        txt: [
            {
                line: 'CLICK HERE TO EDIT',
                fontSize: 50,
                locationY: 90,
                locationX: 0,
                txtAlign: 'left',
                txtColor: 'white',
                txtFont: 'impact',
                isStroke: true

            },
            {
                line: 'CLICK HERE TO EDIT HEHEHEHEHEE',
                fontSize: 50,
                locationY: 650,
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

function setTxtLineUp() {
    if (!gCurrMeme.selectedTxt) gCurrMeme.txt[0].locationY--;
    else gCurrMeme.txt[1].locationY--;
}

function SetStroke() {
    if (!gCurrMeme.selectedTxt) gCurrMeme.txt[0].isStroke = !gCurrMeme.txt[0].isStroke;
    else gCurrMeme.txt[1].isStroke = !gCurrMeme.txt[1].isStroke;
}


function setTxtLineDown() {
    if (!gCurrMeme.selectedTxt) gCurrMeme.txt[0].locationY++;
    else gCurrMeme.txt[1].locationY++;
}

function setTxt(txt) {
    if (!gCurrMeme.selectedTxt) gCurrMeme.txt[0].line = txt;
    else gCurrMeme.txt[1].line = txt;
}

function setLine() {
    if (!gCurrMeme.selectedTxt) gCurrMeme.selectedTxt = 1;
    else gCurrMeme.selectedTxt = 0;
}

function setTxtColor(color) {
    if (!gCurrMeme.selectedTxt) gCurrMeme.txt[0].txtColor = color;
    else gCurrMeme.txt[1].txtColor = color;
}

function setFont(font) {
    if (!gCurrMeme.selectedTxt) gCurrMeme.txt[0].txtFont = font;
    else gCurrMeme.txt[1].txtFont = font;
}

function setTxtAlignLeft() {
    if (!gCurrMeme.selectedTxt) gCurrMeme.txt[0].locationX = 0;
    else gCurrMeme.txt[1].locationX = 0;
}

function setTxtAlignCenter() {
    if (!gCurrMeme.selectedTxt) gCurrMeme.txt[0].locationX = 350;
    else gCurrMeme.txt[1].locationX = 350;
}

function setTxtAlignRight() {
    if (!gCurrMeme.selectedTxt) gCurrMeme.txt[0].locationX = 600;
    else gCurrMeme.txt[1].locationX = 600;
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





