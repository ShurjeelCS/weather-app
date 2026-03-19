console.log("hello worlds");

async function getWeather() {
    try {
        const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=8NGT5AXWUHYCEYFBXN5CDWFY2')
        const data = await weather.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}   

getWeather();