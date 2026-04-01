const container = document.querySelector('.container');

async function getWeather(location) {
    try {
        const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?unitGroup=uk&key=8NGT5AXWUHYCEYFBXN5CDWFY2')
        const data = await weather.json();
        console.log(data.currentConditions.temp);
        showWeather(data.currentConditions.temp);
    } catch (error) {
        console.log(error);
        alert("Not a valid location");
    }
    
}   

const button = document.querySelector('.submit');
button.addEventListener("click", () => {
    const location = document.querySelector("#location").value;
    getWeather(location)
});

function showWeather(temp) {
    const weather = document.createElement("p");
    weather.textContent = temp;
    container.innerHTML = "";
    container.appendChild(weather);
}