
const apiUrl = "//api.openweathermap.org/data/2.5/weather?q=London&appid=51900dce543a0a789e49e6157c74bda3"


fetch (apiUrl).then((response) => response.json()).then((weatherInfo) => {
        console.log(weatherInfo);
                document.getElementById("place").innerHTML = weatherInfo.name;
                let icon = weatherInfo.weather[0].icon;
                let icon_path = "//openweathermap.org/img/w/" + icon + ".png"
                
                document.getElementById("tempo").src = icon_path;
  
    });


let time = new Date();
console.log(time);
let day = time.getDay();
console.log(day);
const element = document.getElementById("coloreB");
if (day == 4){
    element.classList.add("showme");
    }else{
    element.classList.add("hide");
    }

const wind = document.getElementById("windSpeed").textContent;
const temp = document.getElementById("temp").textContent;
const percive = 35.74 +(0.6215*temp)-(35.75*(Math.pow(wind,0.16)))+(0.4275*temp*(Math.pow(wind,0.16)));
console.log(percive);



document.getElementById("percive").textContent = percive;

//document.getElementById("puppy").innerHTML = mydata.eta;
//    let sample = document.createElement("h1");
//    sample.textContent = mydata.name;
//    
//    document.getElementById("puppy").appendChild(sample);
//    