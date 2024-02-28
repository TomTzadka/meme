"use strict";

function makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

function downloadCSV(elLink, objects) {
  const csvContent = _getAsCSV(objects);
  elLink.href = "data:text/csv;charset=utf-8," + csvContent;
  elLink.download = "places.csv";
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function _getAsCSV(objects) {
  let csvStr = `id, name`;
  objects.forEach((object) => {
    const csvLine = `\n${object.id}, ${object.name},`;
    csvStr += csvLine;
  });
  return csvStr;
}

function downloadCanvasAsImg() {
  var elCanvas = document.querySelector("canvas");
  var imgContent = elCanvas.toDataURL("image/png");

  var link = document.createElement("a");
  link.href = imgContent;
  link.download = "img.png";

  link.click();
}



let gSound;
function playSound(name) {
  const sound = new Audio(`sound/${name}.mp3`);
  sound.play();
  gSound = sound
//   if (name === "background") gBackgroundSound = sound;
}

function stopSound() {
    gSound.pause();
}
