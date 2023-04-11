"use strict"

let counter = 0;
const queueArray =[];

window.addEventListener("load", ready);

function ready() {
    console.log("running");
    setInterval(logQueueArray, 1000);
}

function logQueueArray() {
    const queueSize = getNumberOfCustomers();
    queueArray.unshift(queueSize);
    console.log(queueArray);
    addValueToBars();

    if (queueArray.length == 40) {
        queueArray.pop();
    } 
}

function getNumberOfCustomers() {
    return Math.floor(Math.random() * 32);
}

const gridContainer = document.querySelector("#grid-container");

function addValueToBars(){
    // Clear existing bars??
    gridContainer.innerHTML = "";
  
    for (let i = 0; i < queueArray.length; i++) {
      const bar = document.createElement("div");
      bar.className = "bar";
      bar.style.height = `${queueArray[i]}%`;
      gridContainer.appendChild(bar);
    }
}