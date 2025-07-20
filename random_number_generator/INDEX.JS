//random number generator
const mylabel=document.getElementById("mylabel");
const roll=document.getElementById("roll");
const min=1;
const max=6;

let randomnum;

roll.onclick =function(){
    randomnum=Math.floor(Math.random()*(max-min+1)+min);
    mylabel.textContent=randomnum;
}