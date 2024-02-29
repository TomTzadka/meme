"use strict";




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


