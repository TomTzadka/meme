"use strict";

let gElCanvas;
let gCtx;



var gMeme = {
  selectedImgId: getRandomInt(0, gImgs.length-1),
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

function downloadImg(elLink) {
  // console.log(elLink);
  const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
  elLink.href = imgContent
  elLink.download = "img.jpeg";
}

function openColorPicker() {
  const colorInput = document.getElementById('text-color')
  colorInput.click()
  colorInput.addEventListener('input',()=> {
      console.log(colorInput.value);
      gMeme.lines[0].color = colorInput.value
      // console.log(gMeme.lines[0].color);
      // const painterIcon = document.getElementById('painterIcon');
      // painterIcon.style.fill = this.value;
  });
  return gMeme
}
