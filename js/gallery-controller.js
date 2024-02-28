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