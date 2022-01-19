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

const giveway = document.querySelector('.giveway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let givewayDate = new Date(2022, 9, 20, 18, 30, 0);

const year = givewayDate.getFullYear();
const hours = givewayDate.getHours();
const mins = givewayDate.getMinutes();
const date = givewayDate.getDate();

let month = givewayDate.getMonth();
month = months[month]

let day = givewayDate.getDay();
day = weekdays[day];

console.log(date);
giveway.textContent = `giveway ends on ${day}, ${date} ${month} ${year} ${hours}:${mins}`;