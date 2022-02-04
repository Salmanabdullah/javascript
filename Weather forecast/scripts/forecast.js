/****generate unnique key to access the API on "openweathermap.org". */
const key = config.MY_API_TOKEN;
const temp = document.querySelector('.temp')
const detail = document.querySelector('.details')
const form = document.querySelector('form')
const card = document.querySelector('.card')
// const time = document.querySelector('img.time')
// const icon = document.querySelector('.icon img')

form.addEventListener('submit',(e)=>{
    //prevent default behaviour
    e.preventDefault();

    //get city value
    const term = form.city.value.trim()
    form.reset();

    //display on UI
    getCity(term)
        .then(data =>{
            // console.log(data);
            card.classList.remove('d-none')
            getWeather(data)})
        .catch(err => console.log(err))
    
    //set local storage
    localStorage.setItem('city',term)
})

//fetch data from local storage if available
if(localStorage.getItem('city')){
    getCity(localStorage.getItem('city'))
        .then(data => {
            card.classList.remove('d-none')
            getWeather(data)})
        .catch(err => console.log(err))
}

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
    //get temparature
	let celcius = Math.round(parseFloat(d.main.temp)-273.15);
    temp.innerHTML = celcius + '&deg;c';
    // let date = new Date().getTime();
    // date = Math.round(date / 1000);
    //get city name and weather conditioin
    console.log(d);
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
