'use strict'
var gMemes, gNextId = 1, gElGallery, gElEditor, gCurrMeme, gCurrElMeme, gElCanvas, gCtx, gFilterBy = 'isAll';
var gFilterKeyFontSize = {
        funny:16,
        happy:16,
        sad:16,
        dogs:16,
        BRUH:16,
}

function createMemes() {
    gMemes = [];                       // funny happy sad dog please bro//
    gMemes.push(createMeme('imgs/1.jpg', false, true, false, false, false, true));
    gMemes.push(createMeme('imgs/2.jpg', true, false, false, false, true, true));
    gMemes.push(createMeme('imgs/3.jpg', false, false, true, true, false, true));
    gMemes.push(createMeme('imgs/4.jpg', false, false, true, true, false, true));
    gMemes.push(createMeme('imgs/5.jpg', true, false, false, false, false, true));
    gMemes.push(createMeme('imgs/6.jpg', true, false, true, false, false, true));
    gMemes.push(createMeme('imgs/7.jpg', true, false, false, false, false, true));
    gMemes.push(createMeme('imgs/8.jpg', true, true, false, false, true, true));
    gMemes.push(createMeme('imgs/9.jpg', true, true, false, false, false, true));
    gMemes.push(createMeme('imgs/10.jpg', true, false, false, false, false, true));
    gMemes.push(createMeme('imgs/11.jpg', true, true, false, false, true, true));
    gMemes.push(createMeme('imgs/12.jpg', true, false, false, false, false, true));
    gMemes.push(createMeme('imgs/13.jpg', true, true, false, false, true, true));
    gMemes.push(createMeme('imgs/14.jpg', true, false, false, false, false, true));
    gMemes.push(createMeme('imgs/15.jpg', true, true, false, false, false, true));
    gMemes.push(createMeme('imgs/16.jpg', false, true, false, true, false, true));
    gMemes.push(createMeme('imgs/17.jpg', true, true, false, false, false, true));
    gMemes.push(createMeme('imgs/18.jpg', true, false, false, false, false, true));
    gMemes.push(createMeme('imgs/19.jpg', false, true, false, false, true, true));
    gMemes.push(createMeme('imgs/20.jpg', false, false, true, false, true, true));
    gMemes.push(createMeme('imgs/21.jpg', false, false, false, false, true, true));
    gMemes.push(createMeme('imgs/22.jpg', false, true, false, false, false, true));
    gMemes.push(createMeme('imgs/23.jpg', false, true, false, false, false, true));
    gMemes.push(createMeme('imgs/24.jpg', true, false, false, false, true, true));
    gMemes.push(createMeme('imgs/25.jpg', false, true, false, false, true, true));
    gMemes.push(createMeme('imgs/26.jpg', true, false, false, false, true, true));
    gMemes.push(createMeme('imgs/27.jpg', true, false, false, false, false, true));
    gMemes.push(createMeme('imgs/28.jpg', true, false, false, false, true, true));
    gMemes.push(createMeme('imgs/29.jpg', true, true, false, false, true, true));
    gMemes.push(createMeme('imgs/30.jpg', false, false, false, false, true, true));
}

function createMeme(imgURL, isFunny, isHappy, isSad, isDog, isPbro, isAll) {
    var meme = {
        imgURL: imgURL,
        img: '',
        isFunny,
        isHappy,
        isSad,
        isDog,
        isPbro,
        isAll,
        popular: 1,
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

function setMemeImg(imgURL) {
    let currImg = new Image();
    currImg.src = imgURL;
    gCurrMeme.img = currImg;
}


function setCanvas() {
    gElCanvas.width = gCurrMeme.img.width
    gElCanvas.height = gCurrMeme.img.height
}

function setCurrMeme(elImg, memeId) {
    gCurrMeme = getMemeById(memeId);
    gCurrElMeme = elImg;
}

function clearLine() {
    gCurrMeme.txt[gCurrMeme.selectedTxt].line = '';
}

function setMemePopularity() {
    gCurrMeme.popular++;
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

function getMemesToRender() {
    var filteredMemes = gMemes.filter(meme => meme[gFilterBy]);
    return filteredMemes;
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





