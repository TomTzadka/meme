'use strict'

initGallery()
function initGallery(){
    renderGallery()
    renderTags()
}

function renderTags(){
    const elTags = document.querySelector('.tags')
    var str = '' 
    for(const tag in gKeywordSearchCountMap){
        str += tag + ' '
    }
    elTags.innerText = str
}

function renderGallery(){
    const elImgsContainer = document.querySelector('.img-gallery')
    const imgsHtml = []
    var imgs = getImgs()

    imgs.map(img =>{
        const str =`
        <img onclick="onMoveToPage(this,${img.id-1})" class="pointer rounded" src="${img.url}" alt="">
        `
        imgsHtml.push(str)
    }
    )
    elImgsContainer.innerHTML = imgsHtml.join('') 
}

function onMoveToPage(elBtn,idx){
    const elEditor = document.querySelector('.meme-editor-container')
    const elGallery = document.querySelector('.gallery-container')
    
    if(gIsGalleryPage){
        gMeme.selectedImgId = idx
        renderMeme()
        elGallery.style.display = 'none'
        elEditor.style.display = 'grid'
        elBtn.classList.remove('white-border') 
    }else{
        elBtn.classList.add('white-border') 
        elGallery.style.display = 'block'
        elEditor.style.display = 'none'
    }
    gIsGalleryPage = !gIsGalleryPage
}

function onSearch(value){
    search(value)
    renderGallery()
    if(!value) return
    else search(value)
  }


  