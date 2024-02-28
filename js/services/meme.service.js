"use strict";

let gElCanvas;
let gCtx;



var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: "Can't get fired",
      size: 20,
      color: "red",
    },
  ],
};



function getMeme(){
  // console.log('gImgs[gMeme.selectedImgId]',gImgs);
  // console.log('gMeme',gMeme);
  return{
    imgAd: gImgs[gMeme.selectedImgId].url,
    lines: gMeme.lines
  }
}

function setLineTxt(inputTxt){
    gMeme.lines[0].txt = inputTxt
}