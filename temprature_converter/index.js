const temp=document.getElementById("temp");
const cel_to_fahr=document.getElementById("cel_to_fahr");
const fahr_to_cel=document.getElementById("fahr_to_cel");
const submit=document.getElementById("submit");
const answer=document.getElementById("answer");

submit.onclick=function(){
    let tem=temp.value;
    tem=Number(tem);
    let ans;
    if(cel_to_fahr.checked){
        //F = (C * 9/5) + 32
        ans=(tem*9/5)+32;
        answer.textContent= `${ans.toFixed(2)}°F`;
    }
    else if(fahr_to_cel.checked){
        //°C = (°F - 32) * 5/9. 
        ans=(tem-32)* 5/9;
        answer.textContent=`${ans.toFixed(2)}°C`;
    }
    else{
         answer.textContent = "Please select a conversion type.";
    }
}