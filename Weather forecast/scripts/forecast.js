/****generate unnique key to access the API on "openweathermap.org". */
const key = config.MY_API_TOKEN;
const temp = document.querySelector('.temp')
const detail = document.querySelector('.details')
const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const term = form.city.value.trim()
    form.reset();
    getCity(term)
        .then(data =>getWeather(data))
        .catch(err => console.log(err))
})

// form.addEventListener('keyup',()=>{

//     const term = form.city.value.trim()
//     getCity(term)
//         .then(data =>{
//         console.log(data);
//         getWeather(data)})
//         .catch(err => console.log(err))
// })

//get weather information
function getWeather( d ) {
    
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    temp.innerHTML = celcius + '&deg;c';
    const array = Array.from(detail.children);
    array[0].textContent = d.name;
    array[1].textContent = d.weather[0].main;
}
//get city information
/***copy base url from "openweathermap.org/current"
 * q parameter contains a city name and appid contains the unique key
 * the response will be full http request with specific params
*/
async function getCity ( city ){
    const base ='https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${key}`;

    const response = await fetch (base + query);
    const data = await response.json()

    return data;
}
