const key = '14413fa25f441506260cc2e54f8355a7'
const temp = document.querySelector('.temp')

//get weather information
function getWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    temp.textContent = celcius;	
}
//get city information
async function getCity (city){
    const base ='https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${key}`;

    const response = await fetch(base + query);
    const data = await response.json()

    return data;
}

getCity('chemnitz')
    .then(data => {
        console.log(data);
        getWeather(data)
    })
    .catch(err => console.log(err))