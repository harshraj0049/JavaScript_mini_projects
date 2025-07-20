function generatepassword(Length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    const lowercase="abcdefghijklmnopqrstuvwxyz"
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers="0123456789"
    const symbols="!@#$%^&*_~?"

    let allowedchar=""
    let password="";

    allowedchar+= includeLowerCase ? lowercase : "";
    allowedchar+= includeUpperCase ? uppercase : "";
    allowedchar+= includeNumbers ? numbers : "";
    allowedchar+= includeSymbols ? symbols : "";

    if(Length<=0){
        console.log(`password lenght must be atleast 1 characters `);
        return "";
    }
    if(allowedchar.length===0){
        console.log(`you must select atleast one set of characters for the password `)
        return "";
    }

    for(let i=0;i<Length;i++){
        const randomindex=Math.floor(Math.random()*allowedchar.length);
        password+=allowedchar[randomindex];
    }
    return password;
}

const passwordlength=12;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumbers=true;
const includeSymbols=true;


const password=generatepassword(passwordlength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols)
console.log(password);
document.getElementById("my_p").textContent=`password : ${password}`;