var date = new Date();
var weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var todaysDay = weekday[date.getDay()];

function day(){
    document.getElementById('weekday').innerHTML = todaysDay;
}
day();