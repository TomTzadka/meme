"use strict";

let gElCanvas;
let gCtx;

var gImgs = [
  { id: 1, url: "../img/1.jpg", keywords: ["trump", "funny"] },
  { id: 2, url: "../img/2.jpg", keywords: ["dogs", "cute"] },

];

var gMeme = {
  selectedImgId: 0,
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
  return{
    imgAd: gImgs[gMeme.selectedImgId].url,
    lines: gMeme.lines
  }
}

function setLineTxt(inputTxt){
    gMeme.lines[0].txt = inputTxt
}