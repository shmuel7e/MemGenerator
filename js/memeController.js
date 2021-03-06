'use strict'

function init() {
    gElCanvas = document.querySelector('.my-canvas');
    gCtx = gElCanvas.getContext('2d');
    gElGallery = document.querySelector('.images-wrapper');
    gElEditor = document.querySelector('.images-editor');
    createMemes();
    renderGallery();

}

function renderGallery() {
    var memes = getMemesToRender();
    var items = memes.map(function (meme) {
        return `<img src="${meme.imgURL}" onclick="onHideGallery(this,${meme.id},'${meme.imgURL}')" data-id="${meme.id}"></img>`;
    })
    gElGallery.innerHTML = items.join('');
}



function onSetFilter(filterKey) {
    var elKey = document.getElementById(filterKey);
    if (gFilterKeyFontSize[filterKey] < 30) {
        gFilterKeyFontSize[filterKey]++;
        elKey.style.fontSize = `${gFilterKeyFontSize[elKey.innerHTML]}px`;
    }
    gFilterBy = filterKey;
    renderGallery();
}

function onSearchKeyWord(input) {
    input = input.toLowerCase();
    let keyWords = document.getElementsByClassName('key');
    for (var i = 0; i < keyWords.length; i++) {
        if (keyWords[i].innerHTML.toLowerCase().includes(input)) {
            onSetFilter(keyWords[i].innerHTML);
        }
    }
}

function onHideGallery(elImg, memeId, imgURL) {
    gElGallery.classList.toggle('hidden');
    document.querySelector('.gallery-search-nav').classList.toggle('hidden');
    document.querySelector('.second-footer').classList.toggle('hidden');
    document.querySelector('.gallery-nav').classList.remove('border');
    setCurrMeme(elImg, memeId);
    setMemePopularity();
    setMemeImg(imgURL);
    renderEditor();
}

function renderEditor() {
    drawImg(gCurrElMeme);
    gElEditor.classList.toggle('hidden');
}

function onCloseEditor() {
    if (!gCurrMeme) return;
    document.querySelector('.gallery-nav').classList.toggle('border');
    gElEditor.classList.toggle('hidden');
    gElGallery.classList.toggle('hidden');
    document.querySelector('.gallery-search-nav').classList.toggle('hidden');
    document.querySelector('.second-footer').classList.toggle('hidden');
}


function drawImg() {
    const currMemeImg = getCurrMemeImg();
    setCanvas();
    var canvasWidth = getCanvasWidth();
    var canvasHeight = getCanvasHeight();
    gCtx.drawImage(currMemeImg, 0, 0, canvasWidth, canvasHeight);
    for (var i = 0; i < gCurrMeme.numOfLines; i++) {
        var memeTxt = gCurrMeme.txt[i];
        gCtx.font = `${memeTxt.fontSize}px ${memeTxt.txtFont}`
        gCtx.fillStyle = memeTxt.txtColor;
        gCtx.lineWidth = 3;
        gCtx.fillText(memeTxt.line, memeTxt.locationX, memeTxt.locationY);
        if (memeTxt.isStroke) gCtx.strokeText(memeTxt.line, memeTxt.locationX, memeTxt.locationY);
    }
}






function onIncreaseFontSize() {
    increaseFontSize();
    drawImg();
}

function onDecreaseFontSize() {
    decreaseFontSize();
    drawImg();
}

function onSetLine() {
    setLine();
    drawImg();
}

function onSetTxtColor(color) {
    setTxtColor(color);
    drawImg();
}

function onSetColor() {
    document.querySelector(".btn-for-color").focus();
    document.querySelector(".btn-for-color").value = "#FFCC00";
    document.querySelector(".btn-for-color").click();
}

function onSetTxt(txt) {
    setTxt(txt);
    drawImg();
}

function onSetFont(font) {
    setFont(font);
    drawImg();
}

function onAlignTxtLeft() {
    setTxtAlignLeft();
    drawImg();
}

function onAlignTxtCenter() {
    setTxtAlignCenter();
    drawImg();
}

function onAlignTxtRight() {
    setTxtAlignRight();
    drawImg();
}

function onSetLineHeightUp() {
    setTxtLineUp();
    drawImg();
}

function onSetLineHeightDown() {
    setTxtLineDown();
    drawImg();
}

function onSetStroke() {
    setStroke();
    drawImg();
}

function onClearLine() {
    clearLine();
    drawImg();
}

function onAddLine() {
    addLine();
    drawImg();
}

function onRemoveLine() {
    removeLine();
    drawImg();
}

function onToggleMenu() {
    document.querySelector('.secondery').classList.toggle('open');
    document.querySelector('.main-nav').classList.toggle('menu-open');
}

function onShareMeme() {
    var elForm = document.getElementById('fbshare');
    uploadImg(elForm);
}

function onDownloadMeme(elLink) {
    const data = gElCanvas.toDataURL('png')
    elLink.href = data
    elLink.download = 'my-meme.png'
}



// function a() {
//     var keyHistory = "";

//     window.addEventListener("keyup", keyUpHandler, true);

//     function addletter(letter) {
//         keyHistory += letter;
//         gCtx.fillText(keyHistory, 300, 90);
//     }

//     function keyUpHandler(event) {
//         var letters = "abcdefghijklmnopqrstuvwxyz";
//         var key = event.keyCode;
//         if (key > 64 && key < 91) {
//             var letter = letters.substring(key - 64, key - 65);
//             addletter(letter);
//         }
//     }
// }