// setInterval(() => {
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//     var period = "AM"
//     if (hours >= 12){
//         period = "PM";
//     }
//     if (hours > 12){
//         hours = hours - 12;
//     }
//     if (hours <10){
//         hours = '0' + hours
//     }
//     if (minutes < 10){
//         minutes = '0' + minutes;
//     }
//     if (seconds < 10){
//         seconds = '0' + seconds;
//     }
//     var time = hours +':'+minutes+':'+seconds+' '+period;
//     document.getElementById('clock').innerHTML = time;
// }, 1000);

/*******Another way *******/
const clock = document.getElementById('clock')

setInterval(currentTime,1000)

function currentTime(){
    const now = new Date()

    let hours = dateFns.format(now,'HH');
    let minutes = dateFns.format(now,'mm');
    let seconds = dateFns.format(now,'ss');

    const html = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>`    

    clock.innerHTML = html
}