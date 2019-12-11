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
    var memes = gMemes;
    var items = memes.map(function (meme) {
        return `<img src="${meme.imgURL}" onclick="onHideGallery(this,${meme.id})" data-id="${meme.id}"></img>`;
    })
    gElGallery.innerHTML = items.join('');
}


function onHideGallery(elImg, memeId) {
    gElGallery.classList.toggle('hidden');
    gCurrMeme = getMemeById(memeId);
    gCurrElMeme = elImg;
    renderEditor();
}

function renderEditor() {
    document.querySelector('.header').innerText = 'Edit Your Meme :)';
    drawImg(gCurrElMeme);
    gElEditor.classList.toggle('hidden');
}

function drawImg() {
    const img = gCurrElMeme;
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    gCtx.font = '50px impact';
    gCtx.fillStyle = 'white';
    gCtx.fillText(gCurrMeme.topTxt, 300, 90);
    gCtx.fillText(gCurrMeme.botTxt, 300, 650);
}

function closeEditor() {
    gElEditor.classList.toggle('hidden');
    document.querySelector('.header').innerText = 'Welcome to my Meme Generator :)';
    gElGallery.classList.toggle('hidden');
}

function setTopTxt(value) {
    gCurrMeme.topTxt = value;
    drawImg();
}

function setBotTxt(value) {
    gCurrMeme.botTxt = value;
    drawImg();
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