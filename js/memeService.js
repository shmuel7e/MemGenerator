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
        topTxtSize: 20,
        topTxtAlign: 'left',
        topTxtColor: 'black',
        botTxtSize: 20,
        botTxtAlign: 'left',
        botTxtColor: 'black',
        id: gNextId++
    };
    return meme;
}

function getMemeById(memeId) {
    var meme = gMemes.find(function (meme) {
        return meme.id === memeId;
    });
    return meme;
}
