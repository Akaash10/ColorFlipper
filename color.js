const colorChange=()=>{
const arr=["blue","green","grey","black","pink","crimson","lightgrey","wheat","Aliceblue","aqua","beige","brown","cyan","cornsilk","darkcyan","gold","indigo"];
const box=document.getElementById("d");
const h1=box.querySelector("h1");
const n=(Math.floor(Math.random()*arr.length-1)+1);
h1.textContent=arr[n].toUpperCase();
box.style.backgroundColor=arr[n];
}
