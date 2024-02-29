'use strict'

const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']


function onInit() {
    
    gElCanvas = document.querySelector("canvas");
    gCtx = gElCanvas.getContext("2d");
    renderMeme()
    // addListeners()
  }
  
function renderMeme(){
  let meme = getMeme()
  renderImg(meme)
    // console.log(meme);
}
 

function renderImg(meme) {
  let img = new Image();
  img.src = meme.imgAd;
  img.onload = ()=> {
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width;
  
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    
    var {txt,pos,size,color} = meme.lines[0]
    
    drawText(txt,size,color, pos.x, pos.y)
  };
}


function drawText(line,size,color, x, y) {
  gCtx.lineWidth = 1
	gCtx.strokeStyle = 'black'
	gCtx.fillStyle = color

	gCtx.font = `${size}px Arial`
	// gCtx.textAlign = 'center'
	gCtx.textAlign = 'left'
	// gCtx.textAlign = 'right'
	// gCtx.textBaseline = 'middle'
  
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
  // console.log('gMeme',resGmeme);
  renderMeme()
}
function onChangeTextSize(isIncrease){
  setLineSize(isIncrease)
  renderMeme()
}