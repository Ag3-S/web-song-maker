console.log("Start loading js");

const grid = document.getElementById("grid");
const myTempH1 = document.createElement("h1");

console.log("Created my temp H1 loading js");
myTempH1.textContent = "bye bye";
grid.appendChild(myTempH1);
console.log("Finish loading js");