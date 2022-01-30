const date = new Date();
const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


document.getElementById('weekday')
    .innerHTML = weekday[date.getDay()];
    /**getDay() returns a number. 0 means sunday, 1 means monday and so on */
    
    
/***using dateFns. starts from (1-7). 1 means monday, 7 is sunday */    
// console.log(weekday[7 - dateFns.format(date,'E')]);
    