const weatherForm=document.querySelector(".weather_form");
const cityInput=document.querySelector(".cityInput");
const displayDiv=document.querySelector(".mydiv");
const apiKey="";//put your own open weather api key here

weatherForm.addEventListener("submit",async event=>{

    event.preventDefault();
    const city=cityInput.value;

    if(city){
        try{
            const weatherData =await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city")
    }
});

async function getWeatherData(city){
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response= await fetch(apiurl);
    console.log(response);
    if(!response.ok){
        throw new Error("could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(data){
    const {name:city,main:{temp,humidity},weather:[{description,id}]}=data;
    
    displayDiv.textContent="";
    displayDiv.style.display="flex";
    const cityname=document.createElement("h1");
    cityname.textContent=city;
    cityname.classList.add("ciytDisplay");

    const temprature=document.createElement("p");
    temprature.textContent=`${temp}°C`;
    temprature.classList.add("tempDisplay");

    const humiditydis=document.createElement("p");
    humiditydis.textContent=`Humidity: ${humidity}%`;
    humiditydis.classList.add("humidityDisplay");

    const forcast=document.createElement("p");
    forcast.textContent=description;
    forcast.classList.add("forcastDisplay");

    const emoji=document.createElement("p");
    emoji.classList.add("emojidisplay");
    emoji.textContent=displayEmoji(id);


    displayDiv.appendChild(cityname);
    displayDiv.appendChild(temprature);
    displayDiv.appendChild(humiditydis);
    displayDiv.appendChild(forcast);
    displayDiv.appendChild(emoji);
}

function displayEmoji(weatherId){
    switch(true){
        case (weatherId>=200 && weatherId<300):
            return "⛈️";
        case (weatherId>=300 && weatherId<500):
            return "🌧️";
        case (weatherId>=500 && weatherId<600):
            return "🌧️";
        case (weatherId>=600 && weatherId<700):
            return "❄️";
        case (weatherId>=700 && weatherId<800):
            return "🌁";
        case (weatherId===800):
            return "☀️";
        case (weatherId>=801 && weatherId<810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message){
    const errormsg=document.createElement("p");
    errormsg.textContent=message;
    errormsg.classList.add("errorDisplay");
    displayDiv.textContent="";
    displayDiv.style.display="flex";
    displayDiv.appendChild(errormsg);
} 