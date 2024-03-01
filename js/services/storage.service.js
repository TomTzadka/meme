'use strict'


const CANVAS_DB = 'canvasDB'

function saveToStorage(key, value) {
    const valueStr = JSON.stringify(value)
    console.log(`Saving ${valueStr.length} bytes to local storage...` )

    localStorage.setItem(key, valueStr)
}

function loadFromStorage(key) {
    const valueStr = localStorage.getItem(key)
    return JSON.parse(valueStr)
}