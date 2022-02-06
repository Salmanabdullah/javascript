/*********object oriented way ********/
const temp = document.querySelector('.temp')
const detail = document.querySelector('.details')
const form = document.querySelector('form')
const card = document.querySelector('.card')

//its better to declare all classes in a separate js file
class Forecast{
    constructor(){
        this.key = config.MY_API_TOKEN;
        this.weatherURI = 'https://api.openweathermap.org/data/2.5/weather';
    }
    async getCity ( city ){
        const base =this.weatherURI;
        const query = `?q=${city}&appid=${this.key}`;
    
        const response = await fetch (this.weatherURI + query);
        const data = await response.json()
    
        return data;
    }
    getWeather( d ) {
        //get temparature
        let celcius = Math.round(parseFloat(d.main.temp)-273.15);
        temp.innerHTML = celcius + '&deg;c';
        const array = Array.from(detail.children);
        array[0].textContent = d.name;
        array[1].textContent = d.weather[0].main;
    }
}
// the forcast must created after the class has been declared
const forcast = new Forecast();

form.addEventListener('submit',(e)=>{
    //prevent default behaviour
    e.preventDefault();

    //get city value
    const term = form.city.value.trim()
    form.reset();

    //display on UI
    forcast.getCity(term)
        .then(data =>{
            // console.log(data);
            card.classList.remove('d-none')
            forcast.getWeather(data)})
        .catch(err => console.log(err))
    
    //set local storage
    localStorage.setItem('city',term)
})

//fetch data from local storage if available
if(localStorage.getItem('city')){
    forcast.getCity(localStorage.getItem('city'))
        .then(data => {
            card.classList.remove('d-none')
            forcast.getWeather(data)})
        .catch(err => console.log(err))
}