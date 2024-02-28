'use strict'

initGallery()
function initGallery(){
    renderTags()
}

function renderTags(){
    const elTags = document.querySelector('.tags')
    console.log(elTags);
    var str = '' 
    
    for(const tag in gKeywordSearchCountMap){
        str += tag + ' '
        // let count = gKeywordSearchCountMap[tag]
        // console.log(tag);
        // console.log('count',count);
    }
    console.log(str);
    console.log(elTags);
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

    // console.log(imgsHtml);
    elImgsContainer.innerHTML = imgsHtml.join('') 
}
// onMoveToEditor(this)
var gIsGalleryPage = false;
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