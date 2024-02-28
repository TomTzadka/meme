'use strict'

const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']

let gElCanvas;
let gCtx;
let gCurrImgAddress = '../img/1.jpg'
let gCurrText = 'text'

function onInit() {
    
    gElCanvas = document.querySelector("canvas");
    gCtx = gElCanvas.getContext("2d");
    renderMeme()
    addListeners()
  }
  
function renderMeme(){
    renderImg()
}
 

function renderImg() {
  let img = new Image();
  img.src = gCurrImgAddress;
  img.onload = ()=> {
    // Adjust the canvas to the new image size
    gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width;
  
    // Draw the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    drawText(gCurrText, 100, 50)
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
