let img = document.getElementById("img");
let cityName = document.getElementById("city-name");
let temp = document.getElementById("temp");
let description = document.getElementById("description");
let button = document.getElementById("btn");
let inputt = document.getElementById("city-data");

button.addEventListener("click", handleclick);

async function handleclick() {
    // Corrected the typo: "response" instead of "reponse"
    const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + 
        inputt.value + 
        "&appid=fe824cb856a37281c8c13e7a5fbbd488&units=metric"
    );
    
    const data = await response.json();
    const icon = data.weather[0].icon;
    const des = data.weather[0].description;
    const temp2 = data.main.temp;
    const city = data.name;

    img.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"; 
    cityName.innerText = city;
    temp.innerText = temp2 + "°C"; 
    description.innerText = des;
}
