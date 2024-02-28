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
    // Adjust the canvas to the new image size
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width;
  
    // Draw the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    drawText(meme.lines[0].txt, 100, 50)
  };
}


function drawText(text, x, y) {
  gCtx.lineWidth = 2
	gCtx.strokeStyle = 'black'

	gCtx.fillStyle = 'red'

	gCtx.font = '45px Arial'
	gCtx.textAlign = 'center'
	gCtx.textBaseline = 'middle'

	gCtx.fillText(text, x, y)
	gCtx.strokeText(text, x, y)
}

function onAddText(inputTxt){
  // console.log(elBtn.value);
  setLineTxt(inputTxt)
  renderMeme()


}