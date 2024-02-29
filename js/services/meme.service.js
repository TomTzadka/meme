"use strict";

let gElCanvas;
let gCtx;

var gMeme = {
  selectedImgId: getRandomInt(0, gImgs.length - 1),
  selectedLineIdx: 0,
  lines: [
    {
      txt: "Can't get fired",
      size: 40,
      color: "red",
      dirAlien: "left",
      pos: { x: 10, y: 50 },
      font: 'Ariel'
    },
  ],
};

function getMeme() {
  // console.log('gImgs[gMeme.selectedImgId]',gImgs);
  // console.log('gMeme',gMeme);
  return {
    imgAd: gImgs[gMeme.selectedImgId].url,
    lines: gMeme.lines,
  };
}

function setLineSize(isIncrease) {
  if (isIncrease) {
    gMeme.lines[0].size += 5;
  } else {
    gMeme.lines[0].size -= 5;
  }
}
function setLineTxt(inputTxt) {
  gMeme.lines[0].txt = inputTxt;
}

function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL("image/jpeg");
  elLink.href = imgContent;
  elLink.download = "img.jpeg";
}

function openColorPicker() {
  const colorInput = document.getElementById("text-color");
  colorInput.click();
  colorInput.addEventListener("input", () => {
    gMeme.lines[0].color = colorInput.value;
    // const painterIcon = document.getElementById('painterIcon');
    // painterIcon.style.fill = colorInput.value;
  });
}

function textAlign(dir) {
  switch (dir) {
    case "left":
      gMeme.lines[0].pos.x = 10
      break;
    case "center":
      gMeme.lines[0].pos.x = gElCanvas.width / 2
      break;
    case "right":
      gMeme.lines[0].pos.x = gElCanvas.width
      break;
  }
  gMeme.lines[0].dirAlien = dir
}
function changeFont(font){
  gMeme.lines[0].font = font
}