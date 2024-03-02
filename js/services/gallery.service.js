'use strict'

var gImgs = [
    { id: 1, url: "img/1.jpg", keywords: ["trump", "funny","man"] },
    { id: 2, url: "img/2.jpg", keywords: ["dogs", "cute"] },
    { id: 3, url: "img/3.jpg", keywords: ["dogs", "cute","baby"] },
    { id: 4, url: "img/4.jpg", keywords: ["cat", "cute"] },
    { id: 5, url: "img/5.jpg", keywords: ["baby", "cute"] },
    { id: 6, url: "img/6.jpg", keywords: ["man", "history"] },
    { id: 7, url: "img/7.jpg", keywords: ["baby", "cute"] },
    { id: 8, url: "img/8.jpg", keywords: ["man", "funny"] },
    { id: 9, url: "img/9.jpg", keywords: ["baby", "cute","funny"] },
    { id: 10, url: "img/10.jpg", keywords: ["man"] },
    { id: 11, url: "img/11.jpg", keywords: ["man", "boxing"] },
    { id: 12, url: "img/12.jpg", keywords: ["man",] },
    { id: 13, url: "img/13.jpg", keywords: ["man", "drink"] },
    { id: 14, url: "img/14.jpg", keywords: ["man", "matrix"] },
    { id: 15, url: "img/15.jpg", keywords: ["man", "lord"] },
    { id: 16, url: "img/16.jpg", keywords: ["man", "star"] },
    { id: 17, url: "img/17.jpg", keywords: ["man", "putin"] },
    { id: 18, url: "img/18.jpg", keywords: ["baz", "toy"] },
  ];
let gImgsCopy = gImgs.slice();
var gKeywordSearchCountMap = { funny: 3, cat: 16, baby: 2 ,man:8,trump:1,cute:5};
var gIsGalleryPage = false;


function getImgs(){
    return gImgs
}


function search(value) {
  gImgs = gImgs.filter((img) => {
    return img.keywords.some(keyword => keyword.toLowerCase().includes(value.toLowerCase()));
  });
}

function search(value) {
  console.log(value);
  if (!value.trim()) {
    gImgs = gImgsCopy.slice();
    return;
  }
  gImgs = gImgsCopy.filter((img) => {
    return img.keywords.some(keyword => keyword.toLowerCase().includes(value.toLowerCase()));
  });
}