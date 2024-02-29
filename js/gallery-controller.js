'use strict'

initGallery()
function initGallery(){
    renderTags()
}

function renderTags(){
    const elTags = document.querySelector('.tags')
    var str = '' 
    
    for(const tag in gKeywordSearchCountMap){
        str += tag + ' '
        // let count = gKeywordSearchCountMap[tag]
        // console.log(tag);
        // console.log('count',count);
    }
    elTags.innerText = str
}

renderGallery()
function renderGallery(){
    const elImgsContainer = document.querySelector('.img-gallery')
    const imgsHtml = []
    var imgs = getImgs()

    imgs.map(img =>{
        const str =`
        <img onclick="onMoveToPage(${img.id-1})" class="pointer rounded" src="${img.url}" alt="">
        `
        imgsHtml.push(str)
    }
    )
    elImgsContainer.innerHTML = imgsHtml.join('') 
}

function onMoveToPage(idx){
    const elEditor = document.querySelector('.meme-editor-container')
    const elGallery = document.querySelector('.gallery-container')

    if(gIsGalleryPage){
        gMeme.selectedImgId = idx
        renderMeme()
        
        elGallery.style.display = 'none'
        elEditor.style.display = 'grid'
    }else{
        elGallery.style.display = 'block'
        elEditor.style.display = 'none'
    }
    gIsGalleryPage = !gIsGalleryPage
}