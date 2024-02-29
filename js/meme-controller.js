'use strict'

const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']


function onInit() {
    
    gElCanvas = document.querySelector("canvas");
    gCtx = gElCanvas.getContext("2d");
    renderMeme()
    addListeners()
  }
  
function renderMeme(){
  let meme = getMeme()
  renderImg(meme)
}
 

function renderImg(meme) {
  let img = new Image();
  img.src = meme.imgAd;
  img.onload = ()=> {
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width;
  
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    
    var {txt,pos,size,color,dirAlien,font} = meme.lines[0]
    
    drawText(txt,size,color,dirAlien,font, pos.x, pos.y)
  };
}


function drawText(line,size,color,dirAlien,font, x, y) {
  gCtx.lineWidth = 1
	gCtx.strokeStyle = 'black'
	gCtx.fillStyle = color

	gCtx.font = `${size}px ${font}`
	gCtx.textAlign = dirAlien
	gCtx.textBaseline = 'middle'
  
	gCtx.fillText(line, x, y)
	gCtx.strokeText(line, x, y)
}

function onAddText(inputTxt){
  setLineTxt(inputTxt)
  renderMeme()
}
function onDownloadImg(elLink){
  downloadImg(elLink)
}

function onOpenColorPicker(){
  openColorPicker()
  renderMeme()
}
function onChangeTextSize(isIncrease){
  setLineSize(isIncrease)
  renderMeme()
}
function onTextAlign(dir){
  textAlign(dir)
  renderMeme()
}

function onChangeFont(font){
  changeFont(font)
  renderMeme()
}