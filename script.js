async function getWeather(location) {
    try {
        const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?key=8NGT5AXWUHYCEYFBXN5CDWFY2')
        const data = await weather.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}   

const button = document.querySelector('.submit');
button.addEventListener("click", () => {
    const location = document.querySelector("#location").value;
    getWeather(location)
});
