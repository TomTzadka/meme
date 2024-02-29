'use strict'




function onMouseMove(ev){
    var {offsetX,offsetY} = ev
    var {x,y} = gMeme.lines[0].pos


    if(offsetX <= x + gElCanvas.width / 2  && offsetY >= y && offsetY <= y+10){// above text
        console.log('txt pos');
        document.body.style.cursor = 'pointer'
    }else{
        document.body.style.cursor = 'default'
    }
    
}



function addMouseListeners() {
    console.log('addMouseListeners');

	gElCanvas.addEventListener('mousedown', onDown)
	gElCanvas.addEventListener('mousemove', onMove)
	gElCanvas.addEventListener('mouseup', onUp)
}


function onDown(ev) {
	console.log('down');
    gMeme.lines[0].isDrag  = true
	// gStartPos = getEvPos(ev)        // Get the ev pos from mouse or touch
	// if (!isCircleClicked(gStartPos)) return

	// setCircleDrag(true)
	//Save the pos we start from
	document.body.style.cursor = 'grabbing'
}


//Handle the listeners
function addListeners() {
	addMouseListeners()
	// addTouchListeners()
	//Listen for resize ev
	// window.addEventListener('resize', () => {
		// resizeCanvas()
		//Calc the center of the canvas
		// const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
		// createCircle(center)
		// renderCanvas()
	// })
}
