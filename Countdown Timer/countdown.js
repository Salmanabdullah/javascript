/**name of months and weekdays => make arrays
 * target the containers in html
 * separate year, month, day, hour, min and sec from Date()
 * get the time duration when offer will expire
 * calculate that duration and extract miliseconds into  day, hour, min and sec format
 * use an array of day, hour, min and sec to call the values and add in the innerHTML
 * add a zero if it goes below 10
 * use setInterval method to refresh the time automatically
*/
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
// giveway date and time setup
const giveway = document.querySelector('.giveway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let givewayDate = new Date(2022, 1, 11, 18, 30, 0);
// console.log(givewayDate);

const year = givewayDate.getFullYear();
const hours = givewayDate.getHours();
const mins = givewayDate.getMinutes();
const date = givewayDate.getDate();

let month = givewayDate.getMonth();
month = months[month]

let day = givewayDate.getDay();
day = weekdays[day];

// console.log(date);
giveway.textContent = `giveway ends on ${day}, ${date} ${month} ${year} ${hours}:${mins}`;

/*futute time calculation. getTime() returns in miliseconds.*/ 
const futureTime = givewayDate.getTime();
console.log(futureTime);

/**Function to convert miliseconds into days, hours, mins and secs */
function remainingTime(){
  const timeRightNow = new Date().getTime();
  const totalTime = futureTime - timeRightNow;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  
  //calculate all values
  let days = totalTime / oneDay;
  days = Math.floor(days)
  
  let hours = Math.floor((totalTime % oneDay) / oneHour);
  // hour = Math.floor(hour)
  
  let mins = (totalTime % oneHour) / oneMinute;
  mins = Math.floor(mins)
  
  let secs = (totalTime % oneMinute) / 1000;
  secs = Math.floor(secs)
  
  //value array
  const values = [days,hours,mins,secs];
  
  function format(item){
    if(item < 10){
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  })
}
//countdown
let countdown = setInterval(remainingTime,1000)


remainingTime();